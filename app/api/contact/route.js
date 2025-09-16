import { NextResponse } from "next/server";
import { getMongoDb } from "@/lib/mongodb";

export async function POST(request) {
	try {
		const body = await request.json();
		const name = (body?.name || "").toString().trim();
		const email = (body?.email || "").toString().trim().toLowerCase();
		const subject = (body?.subject || "").toString().trim();
		const message = (body?.message || "").toString().trim();

		if (!name || !email || !message) {
			return NextResponse.json({ message: "Name, email and message are required" }, { status: 400 });
		}

		const db = await getMongoDb();
		const collection = db.collection("contact_messages");
		const doc = {
			name,
			email,
			subject: subject || null,
			message,
			createdAt: new Date()
		};
		await collection.insertOne(doc);
		return NextResponse.json({ message: "ok" }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: "Unexpected error" }, { status: 500 });
	}
} 