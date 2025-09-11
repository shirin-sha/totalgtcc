"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import Form from "./form";
import Social from "@/components/data/social";
import ScrollToTop from "../common/scroll/scroll-to-top";

const iconStyle = { color: 'var(--primary-color-1)', fontSize: 45, width: 45, height: 45, lineHeight: '45px', textAlign: 'center' };

const ContactFour = () => {
	return (
		<>
			<SEO pageTitle="Contact Four" />
			<HeaderOne />
			<BreadCrumb title="Contact Us" innerTitle="Contact Us" />
			<div className="contact__two section-padding pb-0">
				<div className="container">
					<div className="row contact__two-box">
						<div className="col-xl-4 col-lg-5 lg-mb-30">
							<div className="contact__two-left">
								<h3>Contact Us</h3>
								<p className="mb-30">We’re ready to answer your questions and support your business needs. Reach out to us anytime.</p>
								<div className="contact__two-left-item">
									<div className="contact__two-left-item-icon">
										<i className="fal fa-phone" style={iconStyle}></i>
									</div>
									<div className="contact__two-left-item-info">
										<span>Call Us</span>
										<p><a href="tel:+96522432553">+965 22432553</a> / <a href="tel:+96522287118">22287118</a></p>
									</div>
								</div>
								<div className="contact__two-left-item">
									<div className="contact__two-left-item-icon">
										<i className="fal fa-file-alt" style={iconStyle}></i>
									</div>
									<div className="contact__two-left-item-info">
										<span>Send Fax</span>
										<p>+965 22437833</p>
									</div>
								</div>
								<div className="contact__two-left-item">
									<div className="contact__two-left-item-icon">
										<i className="fal fa-envelope" style={iconStyle}></i>
									</div>
									<div className="contact__two-left-item-info">
										<span>Email Us</span>
										<p><a href="mailto:info@totalgtc.com">info@totalgtc.com</a></p>
									</div>
								</div>
								<div className="contact__two-left-item">
									<div className="contact__two-left-item-icon">
										<i className="fal fa-map-marker-alt" style={iconStyle}></i>
									</div>
									<div className="contact__two-left-item-info">
										<span>Office Address</span>
										<p>P.O. Box 5092, SAFAT 13051, Kuwait</p>
										{/* <p>Shuaiba Industrial Area, Block 100</p> */}
									</div>
								</div>
								<div className="contact__two-left-item-socialIcon">
									<h6>Follow  Us</h6>
									<Social />
								</div>
							</div>					
						</div>
						<div className="col-xl-8 col-lg-7">
							<div className="contact__two-right">
								<h3>Get In Touch</h3> 
								<p>Have a project in mind or need more details about our services? Send us a message and our team will get back to you shortly.</p>
								<div className="contact__two-right-form">
									<Form />
								</div>
							</div>					
						</div>
					</div>
				</div>
			</div>
			<div className="contact__two-map">

				<iframe 
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1073.5789091952593!2d48.1218051!3d28.9878599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf010079e5c2e1%3A0xe7a8c0906e23dac0!2sGULF%20SPIC!5e1!3m2!1sen!2sin!4v1756193223145!5m2!1sen!2sin"
					width="100%" 
					height="450" 	
					style={{border:0}} 
					allowFullScreen="" 
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div> 
			<div className='all-footer'>
				<FooterTwo />
			</div>
			<ScrollToTop />
		</>
	);
};

export default ContactFour;