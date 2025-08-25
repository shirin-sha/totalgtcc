import Link from "next/link";
import Image from "next/image";
import logo2 from "../../../../public/assets/img/300-pxl.png";
import ResponsiveMenu from "../responsive-menu";

const MobileMenuOne = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`menu__bar-popup ${isOpen ? "show" : ""}`}>
            <div className="menu__bar-popup-top">
                <div className="logo">
                    <Link href="/"><Image src={logo2} alt='logo' width="5px" height="5px" priority /></Link>
                </div>
                <div className="close" onClick={() => setIsOpen(false)}>
                    <i className="fal fa-times"></i>
                </div>
            </div>
            <div className="responsive-menu mean-container">
                <div className="mean-bar">
                    <div className="mean-nav">
                        <ResponsiveMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenuOne;