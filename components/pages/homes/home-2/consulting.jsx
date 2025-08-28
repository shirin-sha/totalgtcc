import Link from 'next/link';

const Consulting = () => {
	return (
		<div className="consulting__area section-padding">
			<img className="consulting__area-shape dark-n" src="assets/img/shape/consulting.png" alt="shape" />
			<img className="consulting__area-shape light-n" src="assets/img/shape/consulting-dark.png" alt="shape" />
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-7 col-lg-6 lg-mb-30">
						<div className="consulting__area-image dark__image">
							<img src="assets/img/pages/section5.jpg" alt="image" />
						</div>
					</div>
					<div className="col-xl-5 col-lg-6">
						<div className="consulting__area-right">
							<div className="consulting__area-right-title">
								<span className="subtitle-two">PREMIUM SERVICES</span>
								<h2>Delivering Expertise. Building Trust.</h2>
								<p>TOTAL GTC combines industry knowledge and global partnerships to provide innovative solutions that enhance operations and strengthen long-term relationships.</p>
							</div>
							<div className="consulting__area-right-list">
								<span><i className="far fa-check"></i>Industrial Training & Skill Development</span>
								<span><i className="far fa-check"></i>Project & Contract Management Support</span>
							</div>
							<Link className="btn-six" href="/services">EXPLORE SERVICES<i className="far fa-chevron-double-right"></i></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Consulting;