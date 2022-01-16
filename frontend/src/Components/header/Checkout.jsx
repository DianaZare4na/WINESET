import React, { useState, useEffect } from "react";

import "./Checkout.css";

function Checkout() {


	

	return (
		<>
		<button type="button" className="btn btn-primary checkout" data-toggle="modal" data-target="#exampleModal">
		Оформить заказ
		</button>
		
		
		<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalLabel">Заголовок модального окна</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
					<button type="button" className="btn btn-primary">Сохранить изменения</button>
				</div>
			</div>
			</div>
		</div>
		</>
	);
}

export default Checkout;