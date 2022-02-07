import React, { useEffect,useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './productCatalog.css';
import {ProductCatalogItem} from "./ProductCatalogItem";
//import Slider from "react-slick";
export function ProductCatalog ({ products, putToBasket, putToFavorite}) {
  


   useEffect(() => {

   }, []);

   return (
      <>
      <div className=" col-12 offset-0 col-sm-12 offset-sm-0 col-md-12 offset-md-0 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 product-catalog">
         {products.map((p) => <ProductCatalogItem 
         key={p.id} 
         product={p} 
         putToBasket={putToBasket} 
         putToFavorite={putToFavorite} id="productGifts"/>)}
      </div>
      </>
   );
}