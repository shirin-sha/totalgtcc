import Link from 'next/link';
import React from 'react';

const Social = () => {
	return (
		<>
			<ul>
				<li><Link href="https://www.facebook.com/totalgtc" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
				<li><Link href="https://www.linkedin.com/company/totalgtc" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
				<li><Link href="https://www.instagram.com/totalgtc" target="_blank"><i className="fab fa-instagram"></i></Link></li>
				<li><Link href="https://www.youtube.com/@totalgtc" target="_blank"><i className="fab fa-youtube"></i></Link></li>
			</ul>			
		</>
	);
};

export default Social;