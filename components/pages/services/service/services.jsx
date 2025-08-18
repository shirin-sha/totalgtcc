import Link from 'next/link';
import CtaArea from '../../homes/home/cta';
import Solution from './solution';
import servicesData from '@/components/data/services-data';

const ServicesMain = () => {
	const coreSlugs = [
		'industrial-trading',
		'industrial-contracting',
		'logistics-services',
		'ict-services',
		'security-defence',
		'offshore-services',
	];
	const coreServices = servicesData.filter(s => coreSlugs.includes(s.id));
	const clientLogos = [
		'/assets/img/clients/client1.jpg',
		'/assets/img/clients/client2.jpg',
		'/assets/img/clients/client3.jpg',
		'/assets/img/clients/client4.jpg',
		'/assets/img/clients/client5.jpg',
		'/assets/img/clients/client6.jpg',
		'/assets/img/clients/client7.jpg',
		'/assets/img/clients/client8.jpg',
		'/assets/img/clients/client9.jpg',
	];
	return (
		<>
		<div className="services__page section-padding-two">
			<div className="container">
				<div className="row">
					{coreServices?.map((data, id) => (
						<div className="col-xl-4 col-lg-4 col-md-6 mt-25" key={id}>
							<div className="services__three-item page">
								<img src={data.image.src} alt="image" />
								<div className="services__three-item-content page">
									<div className="services__three-item-content-icon">
										{data.icon}
									</div>
									<h4><Link href={`/services/${data.id}`}>{data.title}</Link></h4>
									<p>{data.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
			<CtaArea />    
			<Solution />
			{/* Clients grid */}
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
		</>
	);
};

export default ServicesMain;