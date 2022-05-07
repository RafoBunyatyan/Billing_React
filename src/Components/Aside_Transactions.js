import React from "react";
import "../assets/styles/aside_transactions.css";
import Icon, { Stack } from '@mdi/react';
import { mdiCalendarRange, mdiChevronDown, mdiChevronUp, mdiAlertCircleOutline } from '@mdi/js';

function Aside_Transactions() {
	return (
		<>
			<div className="aside_Transactions">
				<div className="aside_CardTransactions">
					<div className="CardTransactions_header">
						<div className="header_Transactions">
							<div className="header_data">
								<h6 className="header_Yourdata">Your Transaction's</h6>
							</div>
							<div className="header_timeData">
								<Icon className="icon_mdiCalendarRange" path={mdiCalendarRange}></Icon>
								<p className="small_time">23 - 30 March 2020</p>
							</div>
						</div>
					</div>
					<div className="CardTransactions_body">
						<h6 className="text_uppercase">Newest</h6>
						<ul className="Transactions_listGrup">
							<li className="Transactions_listItem">
								<div className="Transactions_btnText">
									<button className="Transactions_btn">
										<Icon className="text_LG" path={mdiChevronDown}></Icon>
									</button>
									<div className="Transactions_text">
										<h6 className="Transactions_h6">Netflix</h6>
										<span className="Transactions_span">27 March 2020, at 12:30 PM</span>
									</div>
								</div>
								<div className="Transactions_sum">- $ 2,500</div>
							</li>
							<li className="Transactions_listItem">
								<div className="Transactions_btnText">
									<button className="Transactions_btn1">
										<Icon className="text_LG" path={mdiChevronUp}></Icon>
									</button>
									<div className="Transactions_text">
										<h6 className="Transactions_h6">Apple</h6>
										<span className="Transactions_span">27 March 2020, at 04:30 AM</span>
									</div>
								</div>
								<div className="Transactions_sum1">+ $ 2,000</div>
							</li>
						</ul>
						<h6 className="text_uppercase1">Yesterday</h6>
						<ul className="Transactions_listGrup">
							<li className="Transactions_listItem">
								<div className="Transactions_btnText">
									<button className="Transactions_btn1">
										<Icon className="text_LG" path={mdiChevronUp}></Icon>
									</button>
									<div className="Transactions_text">
										<h6 className="Transactions_h6">Stripe</h6>
										<span className="Transactions_span">26 March 2020, at 13:45 PM</span>
									</div>
								</div>
								<div className="Transactions_sum1">+ $ 750</div>
							</li>
							<li className="Transactions_listItem">
								<div className="Transactions_btnText">
									<button className="Transactions_btn1">
										<Icon className="text_LG" path={mdiChevronUp}></Icon>
									</button>
									<div className="Transactions_text">
										<h6 className="Transactions_h6">HubSpot</h6>
										<span className="Transactions_span">26 March 2020, at 12:30 PM</span>
									</div>
								</div>
								<div className="Transactions_sum1">+ $ 1,000</div>
							</li>
							<li className="Transactions_listItem">
								<div className="Transactions_btnText">
									<button className="Transactions_btn1">
										<Icon className="text_LG" path={mdiChevronUp}></Icon>
									</button>
									<div className="Transactions_text">
										<h6 className="Transactions_h6">Creative Tim</h6>
										<span className="Transactions_span">26 March 2020, at 08:30 AM</span>
									</div>
								</div>
								<div className="Transactions_sum1">+ $ 2,500</div>
							</li>
							<li className="Transactions_listItem">
								<div className="Transactions_btnText">
									<button className="Transactions_btn2">
										<Icon className="text_LG" path={mdiAlertCircleOutline}></Icon>
									</button>
									<div className="Transactions_text">
										<h6 className="Transactions_h6">Webflow</h6>
										<span className="Transactions_span">26 March 2020, at 05:00 AM</span>
									</div>
								</div>
								<div className="Transactions_sum2">Pending</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Aside_Transactions;