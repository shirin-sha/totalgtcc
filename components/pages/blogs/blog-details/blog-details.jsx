import Link from 'next/link';
import Social from '@/components/data/social';
import blogData from '@/components/data/blog-data';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import blogDetailsContent from '@/components/data/blog-details-content';

const BlogSingleMain = ({singleData}) => {
    const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '';
    const blogPost = blogData.slice(0, 3);
    const content = blogDetailsContent[singleData?.id];

    const emphasizeText = (text) => {
        if (!text) return text;
        const pattern = /(High[-‑]efficiency assets:|Data[-‑]driven reliability:|Execution with certainty:|End[-‑]to[-‑]end support:|TOTAL GTC[’']s|TOTAL GTC|smart ICT|Contact TOTAL GTC)/gi;
        const exactPattern = new RegExp('^(?:High[-‑]efficiency assets:|Data[-‑]driven reliability:|Execution with certainty:|End[-‑]to[-‑]end support:|TOTAL GTC[’\']s|TOTAL GTC|smart ICT|Contact TOTAL GTC)$','i');
        return text.split(pattern).map((part, i) => exactPattern.test(part) ? <strong key={i} className="emphasis-strong">{part}</strong> : part);
    };

    return (
        <>
            <div className="blog__details dark__image section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 lg-mb-50">
                            <div className="blog__details-left dark_image">
                                <img className="img__full" src={singleData.image.src} alt="blog-details-image" />
                                <div className="blog__details-left-meta">
                                    <div className="blog__details-left-meta-left">
                                        <div className="author">
                                            <div className="author-avatar">
                                                <img src="../assets/img/team/team-3.jpg" alt="avatar" />
                                            </div>
                                            <div className="author-info">
                                                <span>Engineer</span>
                                                <h6>Roberto Ramon</h6>
                                            </div>
                                        </div>                                
                                    </div>
                                    <div className="blog__details-left-meta-content">
                                        <span>Date :</span>
                                        <h6>March {singleData.date}, 2024</h6>
                                    </div>
                                    <div className="blog__details-left-meta-content">
                                        <span>Category</span>
                                        <h6>{category}</h6>
                                    </div>
                                </div>
                                <h3 className="mb-20">{singleData.title}</h3>
                                {content?.intro?.map((p, idx) => (
                                    <p key={`intro-${idx}`} className="mb-20">{emphasizeText(p)}</p>
                                ))}

                                {content?.sections?.map((section, idx) => (
                                    <div key={`sec-${idx}`} className="mb-25">
                                        {section.title && <h4 className="mb-15">{section.title}</h4>}
                                        {section.paragraphs?.map((p, i) => (
                                            <p key={`p-${idx}-${i}`} className="mb-15">{emphasizeText(p)}</p>
                                        ))}
                                        {section.bullets && (
                                            <ul className="list-style-two">
                                                {section.bullets.map((b, i) => {
                                                    const parts = String(b).split(':');
                                                    if (parts.length > 1) {
                                                        const head = parts.shift();
                                                        const rest = ':' + parts.join(':');
                                                        return (
                                                            <li key={`b-${idx}-${i}`}>
                                                                <strong className="emphasis-strong">{head}</strong>{emphasizeText(rest)}
                                                            </li>
                                                        );
                                                    }
                                                    return (
                                                        <li key={`b-${idx}-${i}`}>{emphasizeText(b)}</li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </div>
                                ))}

                             
                                               
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>          
        </>
    );
};

export default BlogSingleMain;