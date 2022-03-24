import React from "react";
import "../assets/styles/nav.css";
import Icon, { Stack } from '@mdi/react';
import { mdiAccount, mdiBell, mdiCog } from '@mdi/js';

function Nav() {
	return (
		<>
			<nav className="navbar_main">
				<div className="conteiner">
					<nav className="navbar_pages">
						<p className="pages">
							<a className="page_href" href="#">Pages </a> /
							<span className="page_billing"> Billing</span>
						</p>
						<h6 className="page_h3">Billing</h6>
					</nav>
					<div className="collapse">
						<div className="collapse_input">
							<input className="input_here" type="text" placeholder="Type here..." />
						</div>
						<ul className="navbar_nav">
							<li className="nav_item">
								<a className="icon_mdiAccount" href="#">
									<div className="icon_user">
										<Icon path={mdiAccount}></Icon>
									</div>
									<span className="icon_signIn">Sign In</span>
								</a>
							</li>
							<li className="nav_item2">
								<a className="icon_mdi" href="#">
									<Icon path={mdiCog}></Icon>
								</a>
							</li>
							<li className="nav_item3">
								<a className="icon_mdi" href="#">
									<Icon path={mdiBell}></Icon>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;