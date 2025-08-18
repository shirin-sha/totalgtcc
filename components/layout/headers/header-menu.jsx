import Link from 'next/link';
import React from 'react';

const MainMenu = () => {
	return (
		<>	
			<ul>
				<li><Link href='/home-two'>HOME</Link></li>
				<li><Link href='/about-us'>ABOUT US</Link></li>
				<li className='menu-item-has-children'><Link href='/services'>SERVICES</Link>
					<ul className='sub-menu'>
						<li><Link href='/services/industrial-trading'>Industrial Trading</Link></li>
						<li><Link href='/services/industrial-contracting'>Industrial Contracting</Link></li>
						<li><Link href='/services/logistics-services'>Logistics Services</Link></li>
						<li><Link href='/services/ict-services'>ICT Services</Link></li>
						<li><Link href='/services/security-defence'>Security & Defence</Link></li>
						<li><Link href='/services/offshore-services'>Offshore Services</Link></li>
					</ul>
				</li>
				<li><Link href='/projects'>PROJECTS</Link></li>
				<li><Link href='/clients'>CLIENTS</Link></li>
				<li><Link href='/contact'>CONTACT US</Link></li>
			</ul>	
		</>
	);
};

export default MainMenu;