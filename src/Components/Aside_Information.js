import React, { useState } from "react";
import "../assets/styles/aside_information.css";
import Icon, { Stack } from '@mdi/react';
import { mdiDelete, mdiPencil  } from '@mdi/js';

function Aside_Information({ handleDelete, handleClick, onCompleted }) {
	
	return (
		<>
			<div className="aside_information">
				<div className="aside_CardInformation">
					<div className="CardInformation_header">
						<h6 className="Information_h6">Billing Information</h6>
					</div>
					<div className="CardInformation_body">
						<ul className="Information_listGrup">
							<li className="Information_listGrup_item1">
								<div className="Information_list">
									<h6 className="Information_listh6">Oliver Liam</h6>
									<span className="Information_listSpan">Company Name: 
										<span className="Information_Span">Viking Burrito</span>
									</span>
									<span className="Information_listSpan">Email Address: 
										<span className="Information_Span">oliver@burrito.com</span>
									</span>
									<span className="Information_listSpan1">VAT Number: 
										<span className="Information_Span">FRB1235476</span>
									</span>
								</div>
								<div className="listGrup_delete">
									<button className="listGrup_Del_Edit" onClick={handleClick} >
										<Icon className="del_Edit" path={mdiDelete}></Icon>delete
									</button>
									<button className="listGrup_Del_Edit1" >
										<Icon className="del_Edit" path={mdiPencil}>Edit</Icon>Edit
									</button>
								</div>
							</li>
							<li className="Information_listGrup_item">
								<div className="Information_list">
									<h6 className="Information_listh6">Lucas Harper</h6>
									<span className="Information_listSpan">Company Name: 
										<span className="Information_Span">Stone Tech Zone</span>
									</span>
									<span className="Information_listSpan">Email Address: 
										<span className="Information_Span">lucas@stone-tech.com</span>
									</span>
									<span className="Information_listSpan1">VAT Number: 
										<span className="Information_Span">FRB1235476</span>
									</span>
								</div>
								<div className="listGrup_delete">
									<button className="listGrup_Del_Edit" >
										<Icon className="del_Edit" path={mdiDelete}></Icon>delete
									</button>
									<button className="listGrup_Del_Edit1" >
										<Icon className="del_Edit" path={mdiPencil}>Edit</Icon>Edit
									</button>
								</div>
							</li>
							<li className="Information_listGrup_item">
								<div className="Information_list">
									<h6 className="Information_listh6">Ethan James</h6>
									<span className="Information_listSpan">Company Name: 
										<span className="Information_Span">Fiber Notion</span>
									</span>
									<span className="Information_listSpan">Email Address: 
										<span className="Information_Span"> ethan@fiber.com</span>
									</span>
									<span className="Information_listSpan1">VAT Number: 
										<span className="Information_Span">FRB1235476</span>
									</span>
								</div>
								<div className="listGrup_delete">
									<button className="listGrup_Del_Edit" >
										<Icon className="del_Edit" path={mdiDelete}></Icon>delete
									</button>
									<button className="listGrup_Del_Edit1" >
										<Icon className="del_Edit" path={mdiPencil}>Edit</Icon>Edit
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

export default Aside_Information;