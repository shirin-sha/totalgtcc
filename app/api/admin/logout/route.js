import { NextResponse } from "next/server";

export async function GET() {
	const response = NextResponse.redirect(new URL("/admin", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"));
	response.cookies.set("admin_auth", "", {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 0,
	});
	return response;
} 