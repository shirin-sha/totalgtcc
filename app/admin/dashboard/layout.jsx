import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }) {
	const cookieStore = cookies();
	const isAuthed = cookieStore.get("admin_auth")?.value === "1";
	if (!isAuthed) {
		redirect("/admin");
	}

	return (
		<div className="admin__layout">
			<aside className="admin__sidebar">
				<div className="admin__brand">
					<Link href="/admin/contacts" className="admin__brand-link">
						<img src="/assets/img/logo2.png" alt="TOTAL GTC" className="admin__brand-logo" />
					</Link>
				</div>
				<nav className="admin__nav">
					<Link className="admin__nav-link" href="#"><i className="fal fa-grid-2"></i><span className="admin__nav-text">Dashboard</span></Link>
					<Link className="admin__nav-link" href="/admin/dashboard/contacts"><i className="fal fa-envelope"></i><span className="admin__nav-text">Contacts</span></Link>
				</nav>
				<a className="admin__nav-link admin__logout" href="/api/admin/logout"><i className="fal fa-sign-out"></i><span className="admin__nav-text">Logout</span></a>
			</aside>
			<main className="admin__content">
				<div className="admin__topbar">
					<h4 className="admin__title">Total GTC Admin</h4>
				</div>
				<div className="admin__page">
					{children}
				</div>
			</main>
		</div>
	);
} 