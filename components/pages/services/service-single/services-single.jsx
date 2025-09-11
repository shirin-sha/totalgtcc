import React from 'react';
import Link from 'next/link';
import servicesData from '@/components/data/services-data';
import servicesDetailsContent from '@/components/data/services-details-content';

const ServicesSingleMain = ({serviceDetails}) => {
	const servicesD = servicesData.slice(0, 6);
	const content = servicesDetailsContent[serviceDetails?.id];
	return (
		<>
			<div className="services__details section-padding">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 order-last order-lg-first">
							<div className="all__sidebar">
								<div className="all__sidebar-item">
									<h4>Our Services</h4>
									<div className="all__sidebar-item-solution">
										<ul>
											{servicesD.map((data, id) => (
												<li key={id}><Link href={`/services/${data.id}`}><i className="far fa-chevron-double-right"></i>{data.title}</Link></li>
											))}
										</ul>
									</div>
								</div>
								<div className="all__sidebar-item">
									<h4>Company Documents
									</h4>
									<div className="all__sidebar-item-download">
										<ul>
											<li><Link href="#"><div><i className="fa-light fa-file-word"></i>Company Profile</div><span className="fal fa-arrow-to-bottom"></span></Link></li>
											<li><Link href="#"><div><i className="fa-light fa-file-pdf"></i>Services Catalogue</div><span className="fal fa-arrow-to-bottom"></span></Link></li>
										</ul>
									</div>
								</div>
								<div className="all__sidebar-help">
									<div className="all__sidebar-help-image">
										<img className="img__full" src="../assets/img/pages/Services-Detail-Page-Sidebar.jpg" alt="image" />
										<div className="all__sidebar-help-image-content">
											{/* <img src="../assets/img/favicon-1.png" alt="icon" /> */}
											<h4>Consult with Our Engineering Team</h4>
											<Link className="btn-one" href="/contact">Contact Us<i className="far fa-chevron-double-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-8 col-lg-8 lg-mb-50">
							<div className="services__details-left">
								<div className="services__details-left-image dark__image">
									<img src={serviceDetails?.image.src} alt="image" />
								</div>
								<div className="services__details-left-content">
									<h2>{content?.firstSection?.title || serviceDetails?.title}</h2>
									{content?.firstSection?.description?.map((p, idx) => (
										<p key={idx} className={idx === 0 ? 'mb-25' : 'mb-25'}>{p}</p>
									))}
									{content?.secondSection && (
										<>
											<h3 className="mb-15">{content.secondSection.title}</h3>
											<p className="mb-20">{content.secondSection.shortDescription}</p>
											<div className="services__details-left-content-list bold">
												<div className="row">
													<div className="col-sm-12">
														{content.secondSection.listingPoints?.map((point, id) => (
															<span key={id}><i className="far fa-check"></i>{point}</span>
														))}
													</div>
												</div>
											</div>
											{content.secondSection.note && (
												<p className="mt-20">{content.secondSection.note}</p>
											)}
										</>
									)}
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicesSingleMain;