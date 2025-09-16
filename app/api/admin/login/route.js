import { NextResponse } from "next/server";
import crypto from "node:crypto";

function verifyPasswordPbkdf2(password, saltHex, hashHex, iterations, keylen, digest) {
	try {
		if (typeof saltHex !== "string" || typeof hashHex !== "string") return false;
		if (!/^[0-9a-fA-F]+$/.test(saltHex)) return false;
		if (!/^[0-9a-fA-F]+$/.test(hashHex)) return false;
		const derivedHex = crypto.pbkdf2Sync(password, Buffer.from(saltHex, "hex"), Number(iterations) || 120000, Number(keylen) || 64, digest || "sha512").toString("hex");
		if (derivedHex.length !== hashHex.length) return false;
		return crypto.timingSafeEqual(Buffer.from(derivedHex, "hex"), Buffer.from(hashHex, "hex"));
	} catch {
		return false;
	}
}

export async function POST(request) {
	try {
		const { email, password } = await request.json();
		if (!email || !password) {
			return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
		}

		// Try DB auth first if configured
		const hasMongo = !!process.env.MONGODB_URI;
		if (hasMongo) {
			try {
				const { getMongoDb } = await import("@/lib/mongodb");
				const db = await getMongoDb();
				const users = db.collection("users");
				const user = await users.findOne({ email: email.toLowerCase().trim(), role: "admin" });
				if (user && user.password && user.password.salt && user.password.hash) {
					const ok = verifyPasswordPbkdf2(password, user.password.salt, user.password.hash, user.password.iterations, user.password.keylen, user.password.digest);
					if (ok) {
						const response = NextResponse.json({ message: "ok" }, { status: 200 });
						response.cookies.set("admin_auth", "1", {
							httpOnly: true,
							secure: process.env.NODE_ENV === "production",
							sameSite: "lax",
							path: "/",
							maxAge: 60 * 60 * 6,
						});
						return response;
					}
				}
			} catch (e) {
				// Ignore DB errors and fall back to env-based auth
			}
		}

		// Fallback to env-based static admin
		const adminEmail = process.env.ADMIN_EMAIL;
		const adminPassword = process.env.ADMIN_PASSWORD;
		if (adminEmail && adminPassword) {
			if (email === adminEmail && password === adminPassword) {
				const response = NextResponse.json({ message: "ok" }, { status: 200 });
				response.cookies.set("admin_auth", "1", {
					httpOnly: true,
					secure: process.env.NODE_ENV === "production",
					sameSite: "lax",
					path: "/",
					maxAge: 60 * 60 * 6,
				});
				return response;
			}
		}

		return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
	} catch (error) {
		return NextResponse.json({ message: "Unexpected error" }, { status: 500 });
	}
} 