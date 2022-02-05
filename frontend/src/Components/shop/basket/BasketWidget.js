import React from "react";
import './basket.css';
import cart from "./img/shopping-cart.png";
export  function BasketWidget ({basket}) {

   return (
      
      <>
      <div className="col-1">
         <div data-toggle="modal" data-target="#BasketAll">
            <div className="cart">
               <img src={cart}/>
               <div className="basket-length">
               {basket.length ? <span>{basket.length}</span> : null}
            </div>
            </div>
         </div>
      </div>
      </>
   );
}


