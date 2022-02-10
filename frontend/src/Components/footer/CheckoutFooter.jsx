import React from "react";

import NodeMailer from "../NodeMailer/NodeMailer";

function CheckoutFooter() {

	return (
		<>
		<button type="button" className="btn btn-primary down-btn" data-toggle="modal" data-target="#NodeMailer">
      Связаться с нами
      </button>
      <div className="modal fade" id="NodeMailer"  tabIndex={-1} aria-labelledby="NodeMailerLabel" aria-hidden="true">
      <div className="modal-dialog">
         <div className="modal-content">
         <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Связаться с нами</h5>
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

export default CheckoutFooter;