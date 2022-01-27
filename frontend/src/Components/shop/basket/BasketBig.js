import React, {useState}from "react";
import './basket.css';
//import {Link} from "react-router-dom";
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
            <h2>корзина</h2>
            {products.length ? (
            <div>
               {products.map((p) => <BasketItem key={p.id} product={p} removeFromBasket={removeFromBasket} />)}
            </div>
            ) : (
               <p>Ваша корзина пуста</p>
            )}
         </>
   );
}