import React from "react";
import "../assets/styles/card_transparent.css";
import Mastercard from "../assets/images/mastercard.png";
import pattern from "../assets/images/pattern-tree.svg";
import Icon, { Stack } from '@mdi/react';
import { mdiWifi } from '@mdi/js';

function Card_Transparent() {
	return (
		<>
			<div className="card_holder">
				<div className="card_transparent">
					<img className="card_transparentImg" src={pattern} alt="pattern" />
					<div className="card_Body">
						<div className="card_i">
							<Icon path={mdiWifi}></Icon>
						</div>
						<h5 className="card_number">4562   1122   4594   7852</h5>
						<div className="card_footer">
							<div className="card_username">
								<div className="holder">
									<p className="holder_card">Card Holder</p>
									<h6 className="holder_name">Jack Peterson</h6>
								</div>
								<div>
									<p className="holder_card">Expires</p>
									<h6 className="holder_name">11/22</h6>
								</div>
							</div>
							<div className="card_logo">
								<img id="card_logo" src={Mastercard} alt="logo" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card_Transparent;