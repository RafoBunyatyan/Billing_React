import React from "react";
import "../assets/styles/header_invoices.css";
import Icon, { Stack } from '@mdi/react';
import { mdiFilePdfBox } from '@mdi/js';

function Header_Invoices() {
	return (
		<>
			<div className="header_Invoices">
				<div className="Invoices_div">
					<div className="Invoices_header">
						<div className="header_Div">
							<div className="Invoices_textDiv">
								<h6 className="textDiv">Invoices</h6>
							</div>
							<div className="Invoices_textDiv1">
								<button className="buttonDiv" type="submit">View All</button>
							</div>
						</div>
					</div>
					<div className="Invoices_body">
						<ul className="Invoices_listGrup">
							<li className="list_group_item">
								<div className="itemData">
									<h6 className="itemData_h6">March, 01, 2020</h6>
									<span className="itemData_Span">#MS-415646</span>
								</div>
								<div className="Icon_PDF">
									<p className="Icon_num">$180</p>
									<button className="PDF_IconButton" type="submit">
										<Icon className="PDF_IconSize" path={mdiFilePdfBox}></Icon>PDF
									</button>
								</div>
							</li>
							<li className="list_group_item">
								<div className="itemData">
									<h6 className="itemData_h6">February, 10, 2021</h6>
									<span className="itemData_Span">#RV-126749</span>
								</div>
								<div className="Icon_PDF">
									<p className="Icon_num">$250</p>
									<button className="PDF_IconButton" type="submit">
										<Icon className="PDF_IconSize" path={mdiFilePdfBox}></Icon>PDF
									</button>
								</div>
							</li>
							<li className="list_group_item">
								<div className="itemData">
									<h6 className="itemData_h6">April, 05, 2020</h6>
									<span className="itemData_Span">#FB-212562</span>
								</div>
								<div className="Icon_PDF">
									<p className="Icon_num">$560</p>
									<button className="PDF_IconButton" type="submit">
										<Icon className="PDF_IconSize" path={mdiFilePdfBox}></Icon>PDF
									</button>
								</div>
							</li>
							<li className="list_group_item">
								<div className="itemData">
									<h6 className="itemData_h6">June, 25, 2019</h6>
									<span className="itemData_Span">#QW-103578</span>
								</div>
								<div className="Icon_PDF">
									<p className="Icon_num">$120</p>
									<button className="PDF_IconButton" type="submit">
										<Icon className="PDF_IconSize" path={mdiFilePdfBox}></Icon>PDF
									</button>
								</div>
							</li>
							<li className="list_group_item4">
								<div className="itemData">
									<h6 className="itemData_h6">March, 01, 2019</h6>
									<span className="itemData_Span">#AR-803481</span>
								</div>
								<div className="Icon_PDF">
									<p className="Icon_num">$300</p>
									<button className="PDF_IconButton" type="submit">
										<Icon className="PDF_IconSize" path={mdiFilePdfBox}></Icon>PDF
									</button>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div> 
		</>
	);
};

export default Header_Invoices;