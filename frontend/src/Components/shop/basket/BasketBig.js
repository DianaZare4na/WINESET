import React, {useState}from "react";
import './basket.css';
import {Link} from "react-router-dom";
import {BasketItem} from "./BasketItem";

export function BasketBig ({products, removeFromBasket}) {
   const [isLoad, setIsLoad] = useState(true);
	if (!isLoad) return (
		<div className="d-flex justify-content-center">
         <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </div>
	);

   return (
         <>
         <div className="col-10 offset-1">
            <h2>корзина</h2>
            {products.length ? (
            <>
               <div>
               <div>
                  {products.map((p) => <BasketItem key={p.id} product={p} removeFromBasket={removeFromBasket}/>)}
               </div>
            </div>
            <div >
               <hr/>
               <div>
                  <div className="prise-flex1">
                     <h3>Итого</h3>
                     <p>Важная и не очень информация по поводу доставки</p>
                  </div>
                  <div className="all-price">
                     850грн.
                  </div>
               </div>
               <div className="basket-btn-div">
                  <button type="button" className="btn btn-primary" id="checkoutBtn"><Link to="/checkout">Оформить заказ</Link></button>
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
         </>
   );
}