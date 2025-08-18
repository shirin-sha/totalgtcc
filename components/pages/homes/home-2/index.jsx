"use client"
import SEO from "@/components/data/seo";
import HeaderTwo from "@/components/layout/headers/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import BannerTwo from "./banner";
import SwitchTab from "../../common/dark-light";
import Services from "./services";
import About from "./about";
import Video from "./video";
import Work from "./work";
import Consulting from "./consulting";
import Portfolio from "./portfolio";
import Blog from "./blog";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const HomeTwo = ({addClass}) => {
	const clientLogos = [
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
			<SEO pageTitle="Consulting Business" />
			<SwitchTab addClass={addClass} />
			<HeaderTwo />
			<BannerTwo />
			<Services />
			<About />
			<Video />
			<Work />
			<Consulting />
			<Portfolio />
			{/* Clients grid on homepage */}
			<div className="clients__logos section-padding">
				<div className="container">
					<div className="row mb-30">
						<div className="col-xl-12 t-center">
							<span className="subtitle-two">OUR TRUSTED PARTNERS</span>
							<h2>Proudly Serving Leading Clients</h2>
						</div>
					</div>
					<div className="row g-3 g-md-4 align-items-center">
						{clientLogos.map((src, i) => (
							<div className="col-6 col-sm-4 col-md-3" key={i}>
								<img className="client-logo" src={src} alt="client" style={{ maxWidth: 220, maxHeight: 100}} />
							</div>
						))}
					</div>
				</div>
			</div>
			<Blog />
			<div className='all-footer'>
				<FooterTwo />
			</div>
			<ScrollToTop addClass={addClass} />
		</>
	);
};

export default HomeTwo;