"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";
import WhoWeAre from "./who-we-are";
import History from "./history";
import VisionMission from "./vision-mission";
import WhatWeDo from "./what-we-do";
import OurStrength from "./our-strength";
import OurCommitment from "./our-commitment";

const AboutUs = () => {
	return (
		<>
			<SEO pageTitle="About Us" />
			<HeaderOne />
			<BreadCrumb title="About Us" innerTitle="Company About" />
			<AboutMain />
				<WhoWeAre />
				<VisionMission />
				<WhatWeDo />
				<OurStrength />
				<OurCommitment />
				{/* <History /> */}
			<div className='all-footer'>
				<FooterTwo />
			</div>
				<ScrollToTop />
		</>
	);
};

export default AboutUs;