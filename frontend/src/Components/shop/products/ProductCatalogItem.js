import './productCatalogItem.css';
import {Link} from "react-router-dom";
import React, {useState} from 'react';
import hurt from "./img/Vector.png";
import Modalfavorite from '../../modals/modalfavorite';
import ShowModal from "../../modals/showModal"
import ModalBasket from '../../modals/modalBasket';
export function ProductCatalogItem ({ product, putToBasket, putToFavorite}) {

   const [showAlert, setShowAlert] = useState(null);
   const [showModalFavorite, setShowModalfavorite] = useState(null);

   const putFavoritre = function(){
      putToFavorite(product)
      setShowModalfavorite(<Modalfavorite product={product}/>)
   };  
   const put = function(){
      putToBasket(product)
      setShowAlert(<ModalBasket product={product}/>);
   }
   const hideAlert = () => setShowModalfavorite(null);
   let slug;
    if (product.slug !== undefined && product.slug !== null)
        slug = product.slug;
    else {
        slug = encodeURI(product.name +"_"+ product.vendor);
    }

    // Построенная ссылка
    let url = "/product/" + slug + "/" + product._id;

   
   return (
      <>

      {showAlert}
      {showModalFavorite && <ShowModal text={showModalFavorite} hideAlert={hideAlert} />}
      <div className="product-catalog-item">
         <div className="product-catalog-item-content">
         <Link to={url}>
            <div className="product-catalog-item-bg-im">
               <div>
                  <img src={product.image[0]}/>
               </div>
               <div className="product-catalog-item-khr">
                  {product.desstwo}<br/>
                  {product.dess}<br/>
                  {product.dessOne}
               </div>
            </div>
            <h3 className="product-catalog-item-h3">{product.name}</h3>
            <p className="product-catalog-item-p">{product.dessThree}</p>
            <p className="product-catalog-item-p product-catalog-item-p2">{product.dessFour}</p></Link>
            <div className="product-catalog-item-span-p">
               <p className="p-price product-catalog-item-p-price">{product.price}</p>
               <span onClick={putFavoritre}><img src={hurt}/></span>
            </div>
         </div>
         <button type="button" className="btn btn-primary product-catalog-item-btn"  onClick={put}>Купить</button>
      </div>
   </>
   )
}