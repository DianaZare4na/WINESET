import React from "react";
import {Link} from "react-router-dom";
export function FavoriteItem ({product, removeFromFavorite}) {
  
    const remove = () => {
      removeFromFavorite(product)
    }
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
   
         <div className="div-basket-item">
         <div className="div-basket-item-img-count">
            <div className="div-basket-item-img"><img src={product.image[0]}/></div>
            <div className="div-product-name-count">
               <Link to={url}><div className="div-product-name">{product.name}</div></Link>
            </div>
         </div>
         <div>
            <div><span className="remove" onClick={remove}>&times;</span></div>
            <div className="p-price-product">
               <p className="all-p">цена: {product.price}грн.</p>
            </div>
            
         </div>
      </div>
      </>
    );
}