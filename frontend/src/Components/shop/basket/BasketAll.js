import React from "react";
import './basket.css';
import {BasketItem} from "./BasketItem";

export function BasketAll ({products, removeFromBasket}) {
   return (
   
      <div className="modal fade" id="BasketAll" tabindex="-1" aria-labelledby="BasketAll" aria-hidden="true">
      <div className="modal-dialog">
      <div className="modal-content">
         <div className="modal-header">
            <h5 className="modal-title">Ваша корзина</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div className="modal-body" id="productMap">
         <div>
         <div>
               {products.map((p) => <BasketItem key={p.id} product={p} removeFromBasket={removeFromBasket} />)}
         </div>

      </div>
         </div>
         <div className="modal-footer">
            <button type="button" className="btn btn-primary">Оформить заказ</button>
         </div>
      </div>
      </div>
   </div>
   );
}