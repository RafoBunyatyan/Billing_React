import React from "react";
import "../assets/styles/billing.css"; 
import Nav from "./Nav";
import Card_Transparent from "./Card_Transparent";
import Card_Payment_Method from "./Card_Payment_Method";
import Card_Holder from "./Card_Holder";
import Header_Invoices from "./Header_Invoices";
import Aside_Information from "./Aside_Information";
import Aside_Transactions from "./Aside_Transactions";
import Footer from "./Footer";


function Billing() {
    return (
        <>
			<Nav />
			<div className="container_fluid">
				<div className="header">	
					<div className="header_card">
						<div className="header_row">
							<Card_Transparent />
							<Card_Holder />
							<Card_Payment_Method />
						</div>
					</div>
					<Header_Invoices />
				</div>
				<div className="aside">
					<Aside_Information />
					<Aside_Transactions />
				</div>
				<Footer />
			</div>
        </>
    );
};

export default Billing;