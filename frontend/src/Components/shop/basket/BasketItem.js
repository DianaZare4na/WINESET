import React,{useState} from "react";
//import Count from "../product/ProductCard/Count";
import {Link} from "react-router-dom";
export function BasketItem ({ product, removeFromBasket}) {
   const [count, setCount] = useState(1);

   const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);  
   };

   const handleDecrement = () => {
      setCount(prevCount => prevCount - 1);
      if(count==0){
         setCount(0);
      }
   };
   
   const remove = () => {
      removeFromBasket(product)
   }
   const totalPrice = product.price_action ? product.price_action : product.price;
   const final = totalPrice * count;
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
               <div className="count-basket">
               <div className="div-count">
                  <button className="decrement-increment" onClick={handleDecrement}>-</button>
                  <div className="div-count-input">{count}</div>
                  <button className="decrement-increment" onClick={handleIncrement}>+</button>
               </div>
               </div>
            </div>
         </div>
         <div>
            <div><span className="remove" onClick={remove}>&times;</span></div>
            <div className="p-price-product">
               <p className="all-p">Стоимость: {totalPrice}грн.</p>
               <p className="all-p">Сумма:{final}грн.</p>
            </div>
         </div>
      </div>
      </>
   );
}