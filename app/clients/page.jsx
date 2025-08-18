"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-two";
import BreadCrumb from "@/components/pages/common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

const ClientsPage = () => {
	return (
		<>
			<SEO pageTitle="Clients" />
			<HeaderOne />
			<BreadCrumb title="Clients" innerTitle="Clients" />
			<div className="clients__logos section-padding">
				<div className="container">
					<div className="row g-4">
						{[1,2,3,4,5,6,7,8].map(i => (
							<div className="col-6 col-md-3" key={i}>
								<div className="client-logo t-center p-20">
									<img src={`/assets/img/logo-${i <= 6 ? i : (i-6)}.png`} alt="client" />
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