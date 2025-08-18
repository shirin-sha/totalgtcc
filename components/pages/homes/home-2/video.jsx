import { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import videoBg from "../../../../public/assets/img//pages/section3.jpg";


const Video = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
      setOpenVideo(true);
    }; 
    return (
        <>
            <div className="solution__area section-padding" style={{backgroundImage: `url(${videoBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-9">
                            <div className="solution__area-title">
                                <span className="subtitle-two">RELIABLE PARTNER</span>
                                <h1>Engineering Trust. Delivering Value.</h1>
                                <Link className="btn-five" href="/request-quote">CONTACT US<i className="far fa-chevron-double-right"></i></Link>
                            </div>					
                        </div>
                        {/* <div className="col-xl-3">
                            <div className="solution__area-right">
                                <div className="solution__area-right-video">
                                    <div className="solution__area-right-icon video video-pulse">
                                        <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                                    </div>
                                    <h6>Watch The Consulting Video</h6>
                                </div>
                            </div>					
                        </div> */}
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />       
        </>
    );
};

export default Video;