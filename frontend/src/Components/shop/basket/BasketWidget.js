import React from "react";
import './basket.css';
import cart from "./img/shopping-cart.png";
export  function BasketWidget ({basket}) {

   return (
      
      <>
      <div className="col-1 col-div-cart" data-toggle="modal" data-target="#BasketAll">
      <div className="basket-length">
         {basket.length}
      </div>
      <img src={cart}/>
      </div>
      </>
   );
}


