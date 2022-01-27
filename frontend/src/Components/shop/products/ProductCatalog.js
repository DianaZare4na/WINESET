import React, { useEffect } from "react";
import './productCatalog.css';
import {ProductCatalogItem} from "./ProductCatalogItem";

export function ProductCatalog ({products, putToBasket, putToFavorite}) {

    //const products = props.products;

   useEffect(() => {
   }, []);

   return (
      <div className=" col-10 offset-1 product-catalog">
         {products.map((p) => <ProductCatalogItem key={p.id} product={p} putToBasket={putToBasket} putToFavorite={putToFavorite} id="productGifts"/>)}
      </div>
   );
}