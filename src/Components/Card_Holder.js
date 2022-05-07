import React from "react";
import "../assets/styles/card_holder.css";
import Icon, { Stack } from '@mdi/react';
import { mdiBank, mdiWallet } from '@mdi/js';

function Card_Holder() {
	return (
		<>	
			<div className="Card_subSalary">
				<div className="cardFlex">
					<div className="card_subSalary1">
						<div className="card_div">
							<div className="card_header">
								<div className="icon_mdiBank">
									<Icon path={mdiBank} className="mdiBank"></Icon>
								</div>
							</div>
							<div className="card_body">
								<h6 className="card_bodyText">Salary</h6>
								<span className="card_bodySpan">Belong Interactive</span>
								<hr className="card_bodyHorizontal"></hr>
								<h5 className="card_bodyNum">+$2000</h5>
							</div>
						</div>
					</div>
					<div className="card_subSalary2">
						<div className="card_div">
							<div className="card_header">
								<div className="icon_mdiBank">
									<Icon className="mdiBank" path={mdiWallet} ></Icon>
								</div>
							</div>
							<div className="card_body">
								<h6 className="card_bodyText">Paypal</h6>
								<span className="card_bodySpan">Freelance Payment</span>
								<hr className="card_bodyHorizontal"></hr>
								<h5 className="card_bodyNum">$455.00</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card_Holder;