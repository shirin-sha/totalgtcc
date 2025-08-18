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
		'/assets/img/logo-1.png',
		'/assets/img/logo-2.png',
		'/assets/img/logo-3.png',
		'/assets/img/logo-4.png',
		'/assets/img/logo-5.png',
		'/assets/img/logo-6.png',
		'/assets/img/logo-7.png',
		'/assets/img/logo-2.png',
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
			{/* Fourth Section: Client logos refined grid */}
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
								<div className="client-logo-card">
									<img className="client-logo" src={src} alt="client" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicesMain;