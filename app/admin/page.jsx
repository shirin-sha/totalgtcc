"use client";

import { useState } from "react";
import SEO from "@/components/data/seo";

export default function AdminLoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();
		setError("");
		setSuccess("");
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/admin/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data?.message || "Login failed");
			}
			setSuccess("Login successful. Redirecting...");
			setTimeout(() => {
				window.location.href = "/admin/dashboard/contacts";
			}, 800);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<>
			<SEO pageTitle="Admin Login" />
			<section className="section-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 col-lg-4">
							<div className="auth__card">
								<div className="auth__header">
									<h3 className="title mb-0" style={{ color: '#000' }}	>Admin Login</h3>
								</div>
								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-12 mb-20">
											<div className="contact__two-right-form-item contact-item">
												<span className="far fa-envelope-open"></span>
												<input
													type="email"
													name="email"
													placeholder="Email Address"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													required
												/>
											</div>
										</div>
										<div className="col-12 mb-10">
											<div className="contact__two-right-form-item contact-item">
												<span className="fal fa-lock"></span>
												<input
													type="password"
													name="password"
													placeholder="Password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													required
												/>
											</div>
										</div>

										{error && (
											<div className="col-12 mb-10">
												<div className="alert alert-danger" role="alert">{error}</div>
											</div>
										)}
										{success && (
											<div className="col-12 mb-10">
												<div className="alert alert-success" role="alert">{success}</div>
											</div>
										)}

										<div className="col-12">
											<div className="contact__two-right-form-item">
												<button className="btn-one w-100" type="submit" disabled={isSubmitting} style={{display: "block"}}>
													{isSubmitting ? "Signing in..." : "Sign In"} <i className="far fa-chevron-double-right"></i>
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
} 