import React from "react";

import "./Checkout.css";
import NodeMailer from "../NodeMailer/NodeMailer";
function Checkout() {


	

	return (
		<>
		<button type="button" className="btn btn-primary checkout" data-toggle="modal" data-target="#exampleModal">
		Оформить заказ
		</button>
		
		
		<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalLabel">Оформить заказ</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body modal-body-mailer">
               <NodeMailer></NodeMailer>
				</div>
			</div>
			</div>
		</div>
		</>
	);
}

export default Checkout;