import './productCatalogItem.css';
import React, {useState} from 'react';
import hurt from "./img/Vector.png";
export function ProductCatalogItem ({product, putToBasket, putToFavorite}) {

   const [isLoad, setIsLoad] = useState(true);

   if (!isLoad) return (
      <div className="spinner-border" role="status">
            <span className="sr-only">Загрузка...</span>
      </div>
   );
   const putFavorite = function () {
      putToFavorite(product)
   }
   const put = function () {
      putToBasket(product)
   }
   

   return (
      <div className="product-catalog-item">
         <div className="product-catalog-item-content">
            <div className="product-catalog-item-bg-im">
               <div>
                  <img src={product.image}/>
               </div>
               <div className="product-catalog-item-khr">
                  {product.fortress}<br/>
                  {product.Value[0]}<br/>
                  {product.country}
               </div>
            </div>
            <h3 className="product-catalog-item-h3">{product.name}</h3>
            <p className="product-catalog-item-p">{product.WineType}</p>
            <p className="product-catalog-item-p product-catalog-item-p2">{product.grape}</p>
            <div className="product-catalog-item-span-p">
               <p className="p-price product-catalog-item-p-price">{product.price}</p>
               <span onClick={putFavorite}><img src={hurt}/></span>
            </div>
            
         </div>
         <button className="btn btn-primary product-catalog-item-btn"  onClick={put}>Купить</button>
      </div>

   )
}