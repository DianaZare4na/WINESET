import React,{useEffect, useState} from "react";

import {ProductCatalogItem} from "../../shop/products/ProductCatalogItem";
import im from "../cheese/ee.png";
function Jamon({putToBasket, putToFavorite}){
  
   const [product, setProduct] = useState({});
   const [isLoad, setIsLoad] = useState(false);

   useEffect( () => {
         fetch("/api/product/jamon")
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
                <article className="row no-gutters">
                  <section className="col-12">
                     <div className="reletiv-div-man maxht">
                     <div className="page-gifts-img mim"><img src={im} alt="..."/></div>
                        <div className="bacground-div bacground-div-man">
                        <div className="bacground-div-text-man bacground-div-text-man-down">
                              <p className="special-offer special-offer-down">Special offer</p>
                              <h2 className="glasses-сandles glasses-сandles-down">MAXITO’S <br/>HAMON</h2>
                              <a className="set-wine page-gifts-set-wine">ЗАКАЗАТЬ ДЕЛИКАТЕСЫ МАКСИТО</a>
                           </div>
                        </div>
                     </div>
                  </section>
                  </article>
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
export default Jamon;

