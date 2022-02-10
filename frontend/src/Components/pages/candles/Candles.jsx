import React,{useEffect, useState} from "react";
//import "./whiskeyCatalog.css";
import {ProductCatalogItem} from "../../shop/products/ProductCatalogItem";
//import WhiskeyCategory from "./whiskeyCategory";
function Candles({putToBasket, putToFavorite}){
  
   const [product, setProduct] = useState({});
   const [isLoad, setIsLoad] = useState(false);

   useEffect( () => {
         fetch("/api/product/candles")
               .then(res => {
                  console.log(res);
                  return res.json()})
               .then(res => {
                  console.log(res);
                  setProduct(res); 
                  setIsLoad(true); 
               })
               .catch(err =>
                  console.log(err))
      },
      []);
      if (!isLoad) return (
         <div className="spinner-border" role="status">
               <span className="sr-only">Загрузка...</span>
         </div>
   );
   
      return(
         <>
               <div className=" col-12 offset-0 col-sm-12 offset-sm-0 col-md-12 offset-md-0 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 product-catalog">
                 {product.map((product) => <ProductCatalogItem 
                 key={product.id} 
                 product={product}
                 putToBasket={putToBasket} 
                  putToFavorite={putToFavorite}/>)}
               </div>
         </>
      )
   
   }
export default Candles;

