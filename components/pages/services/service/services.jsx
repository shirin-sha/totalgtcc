import Link from 'next/link';
import CtaArea from '../../homes/home/cta';
import Solution from './solution';
import servicesData from '@/components/data/services-data';
import Brands from '@/components/pages/common/brands';

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
			<Brands />
		</>
	);
};

export default ServicesMain;