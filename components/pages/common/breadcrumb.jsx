import Link from 'next/link';
import breadCrumbBg from "../../../public/assets/img/pages/pagetitlebanner.jpg";

const BreadCrumb = ({title, innerTitle}) => {
    return (
        <div className="page__banner" style={{backgroundImage: `url(${breadCrumbBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="page__banner-content">
                         
                            <ul>
                                <li><Link href="/">Home</Link><span>|</span></li>
                                <li>{innerTitle}</li>
                            </ul>
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;