import { getMongoDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const db = await getMongoDb();
		// Run a light command to ensure connectivity
		await db.command({ ping: 1 });
		return NextResponse.json({ status: "ok" });
	} catch (error) {
		return NextResponse.json({ status: "error", message: error?.message || "DB error" }, { status: 500 });
	}
} 