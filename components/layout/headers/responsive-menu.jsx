"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
	const [activeMenu, setActiveMenu] = useState(null);
	const active = (value) => setActiveMenu(value === activeMenu ? null : value),
	activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
	activeSubMenu = (value) =>
	value == activeMenu ? { display: "block" } : { display: "none" };

	return (
		<>	
		<ul>
			<li><Link href='/home-two'>HOME</Link></li>
			<li><Link href='/about-us'>ABOUT US</Link></li>
			<li className='menu-item-has-children'>
				<Link href='#'>SERVICES</Link>
				<ul className='sub-menu' style={activeSubMenu("services")}>
					<li><Link href='/services/industrial-trading'>Industrial Trading</Link></li>
					<li><Link href='/services/industrial-contracting'>Industrial Contracting</Link></li>
					<li><Link href='/services/logistics-services'>Logistics Services</Link></li>
					<li><Link href='/services/ict-services'>ICT Services</Link></li>
					<li><Link href='/services/security-defence'>Security & Defence</Link></li>
					<li><Link href='/services/offshore-services'>Offshore Services</Link></li>
				</ul>
				<a className={`mean-expand ${activeIcon("services")}`} onClick={() => active("services")}></a>
			</li>
			<li><Link href='/portfolio-filter'>PROJECTS</Link></li>
			<li><Link href='/clients'>CLIENTS</Link></li>
			<li><Link href='/contact'>CONTACT US</Link></li>
		</ul>	
		</>
	);
};

export default ResponsiveMenu;