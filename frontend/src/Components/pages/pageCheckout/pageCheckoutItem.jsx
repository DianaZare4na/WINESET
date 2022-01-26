import React from "react";
//import Count from "../product/ProductCard/Count";
export function PageCheckoutItem ({product}) {

   return (
      <div className="div-basket-item">
         <div className="div-basket-item-img-count">
            <div className="div-basket-item-img"><img src={product.image}/></div>
            <div className="div-product-name-count">
               <div className="div-product-name">{product.name}</div>
            </div>
         </div>
         <div>
            
            <p className="p-price-product">{product.price}</p>
         </div>
      </div>
   );
}