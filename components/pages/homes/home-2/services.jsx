import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';

const Services = () => {
	const slideControl = {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		speed: 1500,
		autoplay: {
			delay: 6000,
			reverseDirection: false,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.services__three-arrow-next',
			prevEl: '.services__three-arrow-prev',
		},
		breakpoints: {
			0: { slidesPerView: 1 },
			768: { slidesPerView: 2, spaceBetween: 20 },
			992: { slidesPerView: 3 },
		}
	};

	const services = [
		{
			title: 'Industrial Trading',
			description: 'Supplying pumps, valves, turbines, piping, and spare parts for industries.',
			link: '/services/industrial-trading',
			image: '/assets/img/service/Industrial Trading.jpg',
			icon: <i className="flaticon-corporate"></i>,
		},
		{
			title: 'Industrial Contracting',
			description: 'Construction, pipelines, fabrication, and civil works for energy projects.',
			link: '/services/industrial-contracting',
			image: '/assets/img/service/industrial Contracting.jpg',
			icon: <i className="flaticon-analysis"></i>,
		},
		{
			title: 'Logistics Services',
			description: 'Heavy equipment leasing, specialized transport, manpower, and maintenance support.',
			link: '/services/logistics-services',
			image: '/assets/img/service/Logistics Services.jpg',
			icon: <i className="flaticon-resource"></i>,
		},
		{
			title: 'ICT Services',
			description: 'AI, AR/VR, IoT, and digital solutions for industrial transformation.',
			link: '/services/ict-services',
			image: '/assets/img/service/ICT Services.jpg',
			icon: <i className="flaticon-data-science"></i>,
		},
		{
			title: 'Security & Defence',
			description: 'Infrastructure protection, intrusion detection, and advanced security technologies.',
			link: '/services/security-defence',
			image: '/assets/img/service/Security-Defence-Services.jpg',
			icon: <i className="fa-solid fa-shield"></i>,
		},
		{
			title: 'Offshore Services',
			description: 'Turnkey port construction, maritime facilities, and coastal protection projects.',
			link: '/services/offshore-services',
			image: '/assets/img/service/Offshore-Services.jpg',
			icon: <i className="flaticon-creative"></i>,
		},
	];

	return (
		<>
			<div className="services__three section-padding">
				<div className="container">
					<div className="row mb-70">
						<div className="col-xl-12">
							<div className="services__three-title">
								<span className="subtitle-three">POWERING INDUSTRIES</span>
								<h2>Our Core Services</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-12 slider">
							<div className="services__three-arrow">
								<div className="services__three-arrow-prev mr-10"><i className="fal fa-long-arrow-left"></i></div>
								<div className="services__three-arrow-next"><i className="fal fa-long-arrow-right"></i></div>
							</div>
							<Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl} >
								{services.map((data, id) => (
									<SwiperSlide key={id}>
										<div className="services__three-item">
											<img src={data.image} alt="image" />
											<div className="services__three-item-content">
												<div className="services__three-item-content-icon">
													{data.icon}
												</div>
												<h4><Link href={data.link}>{data.title}</Link></h4>
												<p>{data.description}</p>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>			
		</>
	);
};

export default Services;