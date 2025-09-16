import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ContactsTable from "./ContactsTable";
import { getMongoDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ContactsListPage() {
	const cookieStore = cookies();
	const isAuthed = cookieStore.get("admin_auth")?.value === "1";
	if (!isAuthed) {
		redirect("/admin");
	}

	const db = await getMongoDb();
	const collection = db.collection("contact_messages");
	const docs = await collection
		.find({}, { projection: { name: 1, email: 1, subject: 1, message: 1, createdAt: 1 } })
		.sort({ createdAt: -1 })
		.limit(50)
		.toArray();

	const messages = docs.map((d) => ({
		id: typeof d._id?.toHexString === 'function' ? d._id.toHexString() : d._id?.toString?.(),
		name: d.name,
		email: d.email,
		subject: d.subject || '',
		message: d.message || '',
		createdAt: d.createdAt ? new Date(d.createdAt).toISOString() : null,
	}));

	return (
		<div className="card p-3" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 8 }}>
			<h5 className="mb-3" style={{ color: '#000' }}>Contact Enquires</h5>
			{messages.length === 0 && <p className="mb-0">No messages yet.</p>}
			{messages.length > 0 && <ContactsTable messages={messages} />}
		</div>
	);
} 