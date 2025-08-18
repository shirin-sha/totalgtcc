import React from 'react';
import Link from 'next/link';
import servicesData from '@/components/data/services-data';
import servicesDetailsContent from '@/components/data/services-details-content';

const ServicesSingleMain = ({serviceDetails}) => {
	const servicesD = servicesData.slice(0, 5);
	const content = servicesDetailsContent[serviceDetails?.id];
	return (
		<>
			<div className="services__details section-padding">
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-lg-4 order-last order-lg-first">
							<div className="all__sidebar">
								<div className="all__sidebar-item">
									<h4>Our Solutions</h4>
									<div className="all__sidebar-item-solution">
										<ul>
											{servicesD.map((data, id) => (
												<li key={id}><Link href={`/services/${data.id}`}><i className="far fa-chevron-double-right"></i>{data.title}<span>({data.number})</span></Link></li>
											))}
										</ul>
									</div>
								</div>
								<div className="all__sidebar-item">
									<h4>Company Profile</h4>
									<div className="all__sidebar-item-download">
										<ul>
											<li><Link href="#"><div><i className="fa-light fa-file-word"></i>Download File</div><span className="fal fa-arrow-to-bottom"></span></Link></li>
											<li><Link href="#"><div><i className="fa-light fa-file-pdf"></i>Download Pdf</div><span className="fal fa-arrow-to-bottom"></span></Link></li>
										</ul>
									</div>
								</div>
								<div className="all__sidebar-help">
									<div className="all__sidebar-help-image">
										<img className="img__full" src="../assets/img/pages/help.jpg" alt="image" />
										<div className="all__sidebar-help-image-content">
											<img src="../assets/img/favicon-1.png" alt="icon" />
											<h4>We're Always ready for help You</h4>
											<Link className="btn-one" href="/contact">Need Help<i className="far fa-chevron-double-right"></i></Link>
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
									{content?.thirdSection && (
										<>
											<h3 className="mt-30">{content.thirdSection.title}</h3>
											<div className="faq__area mt-35" id="accordionExample">
												{content.thirdSection.faqs?.map((faq, index) => {
													const collapseId = `collapse-${index}`;
													const show = index === 1 ? ' show' : '';
													const collapsed = index === 1 ? '' : ' collapsed';
													return (
														<div className="faq__area-item" key={index}>
															<h6 className={`icon page${collapsed}`} data-bs-toggle="collapse" data-bs-target={`#${collapseId}`}>{faq.q}</h6>
															<div id={collapseId} className={`faq__area-item-body collapse${show}`} data-bs-parent="#accordionExample">
																<p>{faq.a}</p>
															</div>
														</div>
													);
												})}
											</div>
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