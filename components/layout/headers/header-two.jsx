"use client";
import Social from '@/components/data/social';
import Link from 'next/link';
import logo1 from "../../../public/assets/img/logowhite300.png";
import logo2 from "../../../public/assets/img/300-pxl.png";
import logo3 from "../../../public/assets/img/logo-4.png";
import MainMenu from './header-menu';
import { useState } from 'react';
import MobileMenuOne from './menu_sidebar/menu-one';
import Search from './search';

const HeaderTwo = () => {
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    return (
        <>
            <div className="header__two">
                <div className="header__two-topbar">
                    <div className="container">
                        <div className="row align-items-center borders">
                            <div className="col-xl-6 col-sm-8">
                                <div className="header__two-topbar-left sm-t-center">
                                    <Link href="#"><i className="far fa-clock"></i>Working Hours : Monday - Friday 9: - 5 PM</Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-4">
                                <div className="header__two-topbar-social t-right sm-t-center">
                                    <Social />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auto__container pl-35 pr-35">
                    <div className="header__area-menubar two">
                        <div className="header__area-menubar-left">
                            <div className="header__area-menubar-left-logo">
                                <Link href='/'>
                                    <img className='one' src={logo1.src} alt='logo' />
                                    <img className="two" src={logo2.src} alt="logo" />
                                    {/* <img className="light" src={logo3.src} alt="logo" /> */}
                                </Link>
                            </div>
                        </div>
                        <div className="header__area-menubar-center two">
                            <div className="header__area-menubar-center-menu two menu-responsive">
                                <MainMenu />
                            </div>
                        </div>
                        <div className="header__area-menubar-right">
                            <div className="header__area-menubar-right-box">
                                <div className="header__area-menubar-right-box-contact">
                                    <div className="header__area-menubar-right-box-contact-icon">
                                        <i className="fal fa-envelope-open-text"></i>
                                    </div>
                                    <div className="header__area-menubar-right-box-contact-info d-none d-xl-block">
                                        <span className="text-four">Need Help</span>
                                        <h6><Link href="mailto:conbix@gmail.com">conbix@gmail.com</Link></h6>
                                    </div>
                                </div>
                                <div className="header__area-menubar-right-responsive-menu menu__bar">
                                    <i className="flaticon-menu" onClick={() => setMenuSidebar(true)}></i>
                                </div>
                            </div>
                        </div>
                        <div className="header__area-menubar-right-btn">
                            <Link className="btn-six" href="/request-quote">Profile <i className="far fa-download"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenuOne isOpen={menuSidebar} setIsOpen={setMenuSidebar} />
        </>
    );
};

export default HeaderTwo;