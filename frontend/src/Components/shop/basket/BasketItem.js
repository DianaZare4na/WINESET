import React from "react";
import Count from "../product/ProductCard/Count";
export function BasketItem ({product, removeFromBasket}) {

   const remove = () => {
      removeFromBasket(product)
   }


   return (
      <div className="div-basket-item">
         <div className="div-basket-item-img-count">
            <div className="div-basket-item-img"><img src={product.image}/></div>
            <div className="div-product-name-count">
               <div className="div-product-name">{product.name}</div>
               <div className="count-basket"><Count></Count></div>
            </div>
         </div>
         <div>
            <div><span className="remove" onClick={remove}>&times;</span></div>
            <p className="p-price-product">{product.price}</p>
         </div>
      </div>
   );
}