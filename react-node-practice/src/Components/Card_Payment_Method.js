import React from "react";
import "../assets/styles/card_payment_method.css";
import Mastercard from "../assets/images/mastercard.png";
import Visa from "../assets/images/visa.png";
import Icon, { Stack } from '@mdi/react';
import { mdiPlus, mdiPencil } from '@mdi/js';

function Card_Payment_Method() {
	return (
		<>
			<div className="card_payment_method">
				<div className="payment_method">
					<div className="card_header_method">
						<div className="card_cow">
							<div className="card_headerStart">
								<h6 className="headerStart_h6">Payment Method</h6>
							</div>
							<div className="Card_HeaderStart1">
								<a className="headerStart_grandient" href="#">
									<div className="icon_div">
										<Icon className="icon_mdiPlus" path={mdiPlus}></Icon>Add New Card
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className="card_body_method">
						<div className="card_cowBotton">
							<div className="card_bodyStart">
								<div className="card_bodyPassword">
									<div className="mastercard_div">
										<img className="mastercard" src={Mastercard} alt="logo" />
									</div>
									<h6 className="body_password">****   ****   ****   7852</h6>
									<div className="icon_Pencil">
										<Icon className="icon_mdiPencil" path={mdiPencil} title="Edit Card"></Icon>
									</div>
								</div>
							</div>
							<div className="card_bodyStart1">
								<div className="card_bodyPassword">
									<div className="mastercard_div">
										<img className="mastercard" src={Visa} alt="logo" />
									</div>
									<h6 className="body_password">****   ****   ****   5248</h6>
									<div className="icon_Pencil">
										<Icon className="icon_mdiPencil" path={mdiPencil} title="Edit Card"></Icon>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card_Payment_Method;