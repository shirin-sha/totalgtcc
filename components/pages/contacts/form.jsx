"use client";
import React, { useState } from 'react';

const Form = () => {
	const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
	const [status, setStatus] = useState({ type: '', text: '' });
	const [submitting, setSubmitting] = useState(false);

	function onChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	async function onSubmit(e) {
		e.preventDefault();
		setStatus({ type: '', text: '' });
		setSubmitting(true);
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data?.message || 'Failed to submit');
			setStatus({ type: 'success', text: 'Message sent successfully.' });
			setForm({ name: '', email: '', subject: '', message: '' });
		} catch (err) {
			setStatus({ type: 'error', text: err.message });
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className="row">
					<div className="col-md-6 mb-30">
						<div className="contact__two-right-form-item contact-item">
							<span className="fal fa-user"></span>
							<input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={onChange} />
						</div>
					</div>
					<div className="col-md-6 md-mb-30">
						<div className="contact__two-right-form-item contact-item">
							<span className="far fa-envelope-open"></span>
							<input type="email" name="email" placeholder="Email Address" required value={form.email} onChange={onChange} />
						</div>
					</div>
					<div className="col-md-12 mb-30">
						<div className="contact__two-right-form-item contact-item">
							<span className="fal fa-book"></span>
							<input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
						</div>
					</div>
					<div className="col-md-12 mb-30">
						<div className="contact__two-right-form-item contact-item">
							<span className="far fa-comments"></span>
							<textarea name="message" placeholder="Message" value={form.message} onChange={onChange}></textarea>
						</div>
					</div>

					{status.text && (
						<div className="col-md-12 mb-10">
							<div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">{status.text}</div>
						</div>
					)}

					<div className="col-md-12">
						<div className="contact__two-right-form-item">
							<button className="btn-one" type="submit" disabled={submitting}>
								{submitting ? 'Sending...' : 'Submit Message'} <i className="far fa-chevron-double-right"></i>
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default Form;