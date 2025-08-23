"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-two";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

const ClientsPage = () => {
	const clients = [
		{ src: "/assets/img/clients/client1.jpg", name: "Petrochemical Industries Company (PIC)" },
		{ src: "/assets/img/clients/client2.jpg", name: "Kuwait Oil Company (KOC)" },
		{ src: "/assets/img/clients/client3.jpg", name: "Kuwait National Petroleum Company (KNPC)" },
		{ src: "/assets/img/clients/client4.jpg", name: "Kuwait Aviation Fueling Company (KAFCO)" },
		{ src: "/assets/img/clients/client5.jpg", name: "Kuwait Foreign Petroleum Exploration Company (KUFPEC)" },
		{ src: "/assets/img/clients/client6.jpg", name: "EQUATE Petrochemical Company" },
		{ src: "/assets/img/clients/client7.jpg", name: "Kuwait Gulf Oil Company (KGOC)" },
		{ src: "/assets/img/clients/client8.jpg", name: "Kuwait Oil Tanker Company (KOTC)" },
		{ src: "/assets/img/clients/client9.jpg", name: "Kuwait Petroleum Corporation (KPC)" },
	];
	return (
		<>
			<SEO pageTitle="Clients" />
			<HeaderOne />
			<BreadCrumb title="Clients" innerTitle="Clients" />
			<div className="clients__logos section-padding">
				<div className="container">
					<div className="row mb-30">
						<div className="col-xl-12 t-center">
							<span className="subtitle-two">OUR TRUSTED PARTNERS</span>
							<h2>Proudly Serving Leading Clients</h2>
						</div>
					</div>
					<div className="row g-3 g-md-4 align-items-start">
						{clients.map(({ src, name }, i) => (
							<div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
								<div className="client-logo-card">
									<img className="client-logo" src={src} alt={`${name} logo`} loading="lazy" />
									<h6 className="client-name">{name}</h6>
								</div>
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