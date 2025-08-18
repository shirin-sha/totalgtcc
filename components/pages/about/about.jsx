import Link from "next/link";
import Count from "../common/count";


const AboutMain = () => {
    const aboutContent = {
        image_1: '/assets/img/about/About-Us-Page-Section-1-Image-1.jpg',
        image_2: '/assets/img/about/About-Us-Page-Section-1-Image-2.jpg',
        subtitle: 'Our Company',
        title: 'Building Trust, Delivering Excellence',
        description: 'TOTAL General Trading & Contracting Co. (TOTAL GTCC) is a Kuwait-based company dedicated to delivering quality industrial trading, contracting, ICT, and integrated solutions for Oil & Gas, Utilities, and Security industries. With a commitment to excellence and customer satisfaction, TOTAL has grown into a trusted partner, offering reliable services, innovative business approaches, and long-term relationships that ensure value for our clients across multiple sectors.',
        btn_href: '/about-us',
        shape_1: '/assets/img/shape/about-1.png',
        shape_2: '/assets/img/shape/about-2.png',
    }
    return (
        <>
            <div className="about__company section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-7 col-xl-6 xl-mb-30">
                            <div className="about__company-left">
                                <div className="about__company-left-image dark__image">
                                    <img src={aboutContent.image_1} alt="image" />
                                    <img src={aboutContent.image_2} alt="image" />
                                </div>
                                <div className="about__company-left-experience">
                                    <h2><Count number={20} />+</h2>
                                    <h6> Years of Excellence</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6">
                            <div className="about__company-right">
                                <div className="about__company-right-title">							
                                    <span className="subtitle-one">{aboutContent.subtitle}</span>
                                    <h2>{aboutContent.title}</h2>
                                    <p>{aboutContent.description}</p>
                           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="about__one-shape-1" src={aboutContent.shape_1} alt="shape" />
                <img className="about__one-shape-2" src={aboutContent.shape_2} alt="shape" />
            </div>
        </>
    );
};

export default AboutMain;