import React from "react";
import "../assets/styles/footer.css"; 
import Icon, { Stack } from '@mdi/react';
import { mdiHeart } from '@mdi/js';

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer_containerFluid">
					<div className="footer_display">
						<div className="footerLeft">
						    <div className="footer_copyright">
								<p>© 2022, smade with</p>
								<Icon className="icon_mdiHeart" path={mdiHeart}></Icon>
								<p>by</p>
								<a className="footer_tim" href="https://www.creative-tim.com/?_ga=2.156157177.332426986.1645523645-1389730740.1645523645" target="_blank">Creative Tim</a>
								<p>for a better web.</p>
							</div>
						</div>
						<div className="footerRight">
								<ul className="nav_footer">
									<li>
										<a className="nav_navLink" href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>
									</li>
									<li>
										<a className="nav_navLink" href="https://www.creative-tim.com/presentation" target="_blank">About Us</a>
									</li>
									<li>
										<a className="nav_navLink" href="https://www.creative-tim.com/blog?_ga=2.237880642.332426986.1645523645-1389730740.1645523645" target="_blank">Blog</a>
									</li>
									<li>
										<a className="nav_navLink1" href="https://www.creative-tim.com/license" target="_blank">License</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
			</footer> 
		</>
	);
};

export default Footer;