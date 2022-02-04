import React from "react";
import './basket.css';
import cart from "./img/shopping-cart.png";
export  function BasketWidget ({basket}) {

   return (
      
      <>
      <div className="col-1 col-div-cart">
         <div data-toggle="modal" data-target="#BasketAll">
            <div className="basket-length">
                  {basket.length ? <span>{basket.length}</span> : null}
               </div>
               <div className=""></div><img src={cart}/>
            </div>
         </div>
      </>
   );
}


