import React from 'react';

const Work = () => {
	return (
		<div className="work__area section-padding pb-0">
			<div className="container">
				<div className="row mb-70">
					<div className="col-xl-12">
						<div className="work__area-title t-center">
							<span className="subtitle-two">WORK PROCESS</span>
							<h2>Our Solution Process</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 col-sm-6 xl-mb-30">
						<div className="work__area-item">
							<span>01</span>
							<h6>Understanding Needs</h6>
							<p>Analyzing client requirements and industry challenges.</p>
							<img className="work__area-item-arrow sm-display-n dark-n" src="assets/img/icon/arrow-1.png" alt="shape" />
							<img className="work__area-item-arrow sm-display-n light-n" src="assets/img/icon/arrow-1-dark.png" alt="shape" />
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 sm-mb-30">
						<div className="work__area-item">
							<span>02</span>
							<h6>Strategic Planning</h6>
							<p>Designing tailored solutions for complex operations.</p>
							<img className="work__area-item-arrow xl-display-n dark-n" src="assets/img/icon/arrow-2.png" alt="shape" />
							<img className="work__area-item-arrow xl-display-n light-n" src="assets/img/icon/arrow-2-dark.png" alt="shape" />
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 sm-mb-30">
						<div className="work__area-item">
							<span>03</span>
							<h6>Reliable Execution</h6>
							<p>Delivering services with precision and efficiency.</p>
							<img className="work__area-item-arrow xl-display-n dark-n" src="assets/img/icon/arrow-1.png" alt="shape" />
							<img className="work__area-item-arrow xl-display-n light-n" src="assets/img/icon/arrow-1-dark.png" alt="shape" />
							<img className="work__area-item-arrow display-n xl-display-b sm-display-n dark-n" src="assets/img/icon/arrow-2.png" alt="shape" />
							<img className="work__area-item-arrow display-n xl-display-b sm-display-n light-n" src="assets/img/icon/arrow-2-dark.png" alt="shape" />
						</div>
					</div>
					<div className="col-xl-3 col-sm-6">
						<div className="work__area-item">
							<span>04</span>
							<h6>Ongoing Support</h6>
							<p>Expert consultation and long-term partnership.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;