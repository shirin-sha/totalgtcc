import React from 'react';
import bgImage from "../../../public/assets/img/about/About-Us-Page-Section-3.jpg"
import image from "../../../public/assets/img/about/About-Us-Page-Section-2-Image-1.jpg";
import shape from "../../../public/assets/img/shape/about-solution.png";
import Count from '../common/count';
import Link from 'next/link';

const WhoWeAre = () => {
    return (
        <>
            <div className="company__two section-padding pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7 lg-mb-30">
                            <div className="company__two-left">
                                <div className="company__two-left-title">
                                    <span className="subtitle-one">Who we are</span>
                                    <h2> A Trusted Partner in Every Industry</h2>
                                    <p>We are a customer-focused organization, combining global expertise with local
knowledge. Our mission is to provide top-quality solutions that enhance
business performance and strengthen client trust. With dedicated professionals
and international partnerships, we deliver reliability, efficiency, and sustainable
value.</p>
                                </div>
                                <div className="company__two-left-skill">
                                    <div className="company__two-left-skill-item">
                                        <h2><Count number={100} />+</h2>
                                        <h6> Projects Delivered</h6>
                                    </div>
                                    <div className="company__two-left-skill-item">
                                        <h2><Count number={50} />+</h2>
                                        <h6>Global Partners</h6>
                                    </div>
                                </div>
                                {/* <Link className="btn-two" href="/about">Discover more<i className="far fa-chevron-double-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="company__two-right dark__image t-right">
                                <img className="img__full" src={image.src} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="about__solution" style={{backgroundImage: `url(${bgImage.src})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8">
                            <div className="about__solution-left xl-t-center">
                                <h2>Partner With Us Today</h2>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="about__solution-right t-right xl-t-center">						
                                <Link className="btn-one" href="/contact">CONTACT US<i className="far fa-chevron-double-right"></i></Link>
                                {/* <img className="about__solution-right-shape left-right-animate" src={shape.src} alt="shape" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    );
};

export default WhoWeAre;