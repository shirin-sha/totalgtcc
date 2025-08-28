import shape1 from "../../../../public/assets/img/shape/about.png";
import shape2 from "../../../../public/assets/img/shape/about-dark.png";
import image1 from "../../../../public/assets/img/about/about2.jpg";
import image2 from "../../../../public/assets/img/about/about1.jpg";
import avatar from "../../../../public/assets/img/avatar/avatar-1.jpg";
import Count from "../../common/count";
import Link from "next/link";

const About = () => {
    const aboutData = {
        subtitle: 'ABOUT COMPANY',
        title: 'Trusted Partner in Energy & Industry',
        description: 'TOTAL GTC provides innovative trading, contracting, and ICT solutions. We ensure reliable services with advanced technologies. Our focus is performance, safety, and sustainable growth.',
        count: 20,
        exp: 'Years of Excellence in Industrial & Engineering Services',
        btn_title: 'LEARN MORE',
        btn_link: '/about-us',
    }
    return (
        <div className="about__two dark__image section-padding">
            <img className="about__two-shape dark-n" src={shape1.src} alt="shape" />
            <img className="about__two-shape light-n" src={shape2.src} alt="shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 lg-mb-30">
                        <div className="row">
                            <div className="col-6">
                                <img src={image1.src} alt="image" />
                            </div>
                            <div className="col-6 mt-95 sm-mt-55">
                                <img src={image2.src} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="about__two-right">
                            <div className="about__two-right-title">
                                <span className="subtitle-two">{aboutData?.subtitle}</span>
                                <h2>{aboutData?.title}</h2>
                                <p>{aboutData?.description}</p>
                            </div>
                            <div className="about__two-right-experience">
                                <div className="about__two-right-experience-counter">
                                    <h1><Count number={aboutData?.count}/>+</h1>
                                </div>
                                <div>
                                    <h6>{aboutData?.exp}</h6>
                                </div>
                            </div>
                            <div className="about__two-right-btn">
                                <div>
                                    <Link className="btn-six" href={aboutData?.btn_link}>{aboutData?.btn_title}<i className="far fa-chevron-double-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;