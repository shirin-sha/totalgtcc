
import Social from "@/components/data/social";
import Link from "next/link";
import logo1 from "../../../public/assets/img/logowhite-535x180.png";
import logo2 from "../../../public/assets/img/logowhite94.png";
import blogData from "@/components/data/blog-data";
import footerBg from "../../../public/assets/img/pages/stayconnect2.jpg";

const FooterTwo = () => {
	const blogPost = blogData.slice(0, 2);
	return (
		<>
			<div className="footer__two" data-background="assets/img/shape/footer-bg-1.png">
				<div className="subscribe__area">
					<div className="container">
						<div className="row align-items-center subscribe__area-bg" style={{backgroundImage: `url(${footerBg.src})`}}>
							<div className="col-xl-5 col-lg-5 lg-mb-40">
								<div className="subscribe__area-left">
									<h2>Stay Connected</h2>
									<div className="subscribe__area-left-notification">
										<h6>get all notifications</h6>
										<div className="subscribe__area-left-notification-icon icon-animation video-pulse">
											<i className="far fa-bell"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-7 col-lg-7">
								<div className="subscribe__area-form">
									<form>
										<input type="email" name="email" placeholder="Email address" />
										<button type="submit">Subscribe Now</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>				
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
							<div className="footer__two-widget">
								<div className="footer__two-widget-about">
									<Link href="/">
										<img className="f_logo" src={logo1.src} alt="logo" />
										<img className="all_f_logo" src={logo2.src} alt="logo" />
									</Link>
									<p>TOTAL General Trading & Contracting Co. is a trusted provider of industrial trading,
contracting, logistics, ICT, and security services in Kuwait. With ISO 9001:2015 and TRACE
certification, we deliver reliable solutions for Oil & Gas, Petrochemical, Power, and Utilities
sectors.
</p>
									<div className="footer__two-widget-about-social">
										<Social />
									</div>								
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
							<div className="footer__two-widget footer-border">
								<h4>Head Office</h4>
								<div className="footer__two-widget-location">
								
									<div className="footer__two-widget-location-item">
										<div className="footer__two-widget-location-item-icon">
											<i className="far fa-map-marker-alt"></i>
										</div>
										<div className="footer__two-widget-location-item-info">
											<p>P.O. Box 5092, SAFAT 13051, Kuwait</p>
											<p>Shuaiba Industrial Area, Block 100</p>
										</div>
									</div>
									<div className="footer__two-widget-location-item">
										<div className="footer__two-widget-location-item-icon">
											<i className="far fa-phone"></i>
										</div>
										<div className="footer__two-widget-location-item-info">
											<p>Tel: +965 22432553 / 22287118</p>
										</div>
									</div>
									<div className="footer__two-widget-location-item">
										<div className="footer__two-widget-location-item-icon">
											<i className="far fa-fax"></i>
										</div>
										<div className="footer__two-widget-location-item-info">
											<p>Fax: +965 22437833</p>
										</div>
									</div>
									<div className="footer__two-widget-location-item">
										<div className="footer__two-widget-location-item-icon">
											<i className="far fa-envelope"></i>
										</div>
										<div className="footer__two-widget-location-item-info">
											<p>Email: <Link href="mailto:info@totalgtc.com">info@totalgtc.com</Link></p>
										</div>
									</div>
									<div className="footer__two-widget-location-item">
										<div className="footer__two-widget-location-item-icon">
											<i className="far fa-globe"></i>
										</div>
										<div className="footer__two-widget-location-item-info">
											<p>Web: <Link href="https://www.totalgtc.com" target="_blank">www.totalgtc.com</Link></p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="footer__two-widget footer-border">
								<h4>Services</h4>
								<ul className="">
									<li><Link href="/services/industrial-trading">Industrial Trading</Link></li>
									<li><Link href="/services/industrial-contracting">Industrial Contracting</Link></li>
									<li><Link href="/services/logistics-services">Logistics Services</Link></li>
									<li><Link href="/services/ict-services">ICT Services</Link></li>
									<li><Link href="/services/security-defence">Security & Defence</Link></li>
									<li><Link href="/services/offshore-services">Offshore Services</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright__two">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<p>© 2025 TOTAL GTC – All Rights Reserved | Designed & Developed by Anathoth</p>
							</div>
						</div>
					</div>
				</div>		
			</div>		  
		</>
	);
};

export default FooterTwo;