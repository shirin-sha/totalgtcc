"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const demoLogos = [
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

const Brands = () => {
	return (
		<div className="brands section-padding">
			<div className="container">
				<div className="row mb-30">
					<div className="col-xl-12 t-center">
						<span className="subtitle-two">OUR TRUSTED PARTNERS</span>
						<h2>Proudly Serving Leading Clients</h2>
					</div>
				</div>
				<Swiper
					modules={[Autoplay]}
					slidesPerView={4}
					spaceBetween={12}
					loop
					speed={3500}
					autoplay={{ delay: 0, disableOnInteraction: false }}
					breakpoints={{
						320: { slidesPerView: 2, spaceBetween: 8 },
						576: { slidesPerView: 3, spaceBetween: 10 },
						768: { slidesPerView: 4, spaceBetween: 12 },
						992: { slidesPerView: 4, spaceBetween: 12 },
					}}
					className="brands__swiper"
				>
					{demoLogos.map((src, i) => (
						<SwiperSlide key={i}>
							<div className="brand__item">
								<img src={src} alt="brand" className="brand__logo" loading="lazy" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Brands; 