"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-two";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

const ClientsPage = () => {
	const logos = [
		"/assets/img/clients/client1.jpg",
		"/assets/img/clients/client2.jpg",
		"/assets/img/clients/client3.jpg",
		"/assets/img/clients/client4.jpg",
		"/assets/img/clients/client5.jpg",
		"/assets/img/clients/client6.jpg",
		"/assets/img/clients/client7.jpg",
		"/assets/img/clients/client8.jpg",
		"/assets/img/clients/client9.jpg",
	
	];
	return (
		<>
			<SEO pageTitle="Clients" />
			<HeaderOne />
			<BreadCrumb title="Clients" innerTitle="Clients" />
			<div className="clients__logos section-padding">
				<div className="container">
					<div className="row g-3 g-md-4 align-items-center">
						{logos.map((src, i) => (
							<div className="col-6 col-sm-4 col-md-3" key={i}>
								{/* <div className="client-logo-card"> */}
									<img className="client-logo" src={src} alt="client" style={{ maxWidth: 220, maxHeight: 100}} />
								{/* </div> */}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='all-footer'>
				<FooterTwo />
			</div>
			<ScrollToTop />
		</>
	);
};

export default ClientsPage; 