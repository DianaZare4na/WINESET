import React, {useState}from "react";
import './basket.css';
import {Link} from "react-router-dom";
import {BasketItem} from "./BasketItem";

export function BasketAll ({products, removeFromBasket}) {
   //const [isLoad, setIsLoad] = useState(true);
	//if (!isLoad) return (
	//	<div className="d-flex justify-content-center">
   //      <div className="spinner-border" role="status">
   //         <span className="sr-only">Loading...</span>
   //      </div>
   //   </div>
	//);

   const close = () => {
      document.getElementById("BasketAll").style.display = "none";
      document.querySelector(".modal-backdrop").style.display = "none";
   }
   return (
   
      <div className="modal fade" id="BasketAll" tabindex="-1" aria-labelledby="BasketAllLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-basket">
      <div className="modal-content ">
         <div className="modal-header">
            <h5 className="modal-title">Ваша корзина</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
         </div>
         {products.length ? (
            <>
                  <div className="modal-body modal-body-basket" id="productMap">
                  <div>
                     {products.map((p) => <BasketItem key={p.id} product={p} removeFromBasket={removeFromBasket} />)}
                  </div>
               </div>
               <div className="modal-footer modal-futer-div">
                  <hr/>
                  <div className="div-all-price" id="divAllPrice">
                     <div className="prise-flex1">
                        <h3>Итого</h3>
                        <p>Важная и не очень информация по поводу доставки</p>
                     </div>
                     <div className="all-price">
                        9000
                     </div>
                  </div>
                  <div className="basket-btn-div">
                     <button type="button" className="btn btn-primary" id="checkoutBtn" onClick={close}><Link to="/checkout">Оформить заказ</Link></button>
                  </div>
               </div>
               </>
            ) : (
               <div className="basket-aps">
                  <div>
                     <h3>Ваша корзина пуста</h3>
                     <p>Но это никогда не поздно исправить :)</p>
                  </div>
               </div>
            )}
      </div>
      </div>
      </div>
   );
}