"use client";
import { useState } from "react";

export default function ContactsTable({ messages }) {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(null);

	function onView(msg) {
		setSelected(msg);
		setOpen(true);
	}
	function onClose() {
		setOpen(false);
		setSelected(null);
	}

	return (
		<>
			<div className="table-responsive">
				<table className="admin__table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Subject</th>
							<th>Date</th>
							<th className="table__action">Action</th>
						</tr>
					</thead>
					<tbody>
						{messages.map((m) => (
							<tr key={m.id}>
								<td>{m.name}</td>
								<td>{m.email}</td>
								<td>{m.subject || '-'}</td>
								<td>{m.createdAt ? new Date(m.createdAt).toLocaleString() : '-'}</td>
								<td className="table__action">
									<button type="button" className="btn btn-link p-0" aria-label="View message" title="View message" onClick={() => onView(m)}>
										<i className="fal fa-eye"></i>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{open && selected && (
				<div className="modal__overlay" role="dialog" aria-modal="true">
					<div className="modal__card">
						<div className="modal__header">
							<h6 className="mb-0">Contact from {selected.name}</h6>
							<button type="button" className="modal__close" aria-label="Close" onClick={onClose}>
								<i className="fal fa-times"></i>
							</button>
						</div>
						<div className="modal__body">
							<div className="mb-2"><strong>Email:</strong> {selected.email}</div>
							{selected.subject && <div className="mb-2"><strong>Subject:</strong> {selected.subject}</div>}
							<div className="mb-2"><strong>Received:</strong> {selected.createdAt ? new Date(selected.createdAt).toLocaleString() : '-'}</div>
							<div className="mb-0"><strong>Message:</strong><br />{selected.message}</div>
						</div>
						<div className="modal__footer">
							<button type="button" className="modal__btn" onClick={onClose}>Close</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
} 