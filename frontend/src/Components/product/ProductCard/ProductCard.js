import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import '../ProductCard/productcard.css';
import Star from "./img/Star.png";
import znak1 from "./img/znak1.png";
import znak2 from "./img/znak2.png";
import znak3 from "./img/znak3.png";
import imgbg from "./img/winebgpr.png"
//import ProductInBasket from "./ProductInBasket";
export function ProductCard (){
   let params = useParams();

   const [product, setProduct] = useState({});
   const [isLoad, setIsLoad] = useState(false);

   const [count, setCount] = useState(0);

   const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
   };

   const handleDecrement = () => {
      setCount(prevCount => prevCount - 1);
      if(setCount(0)){
         return;
      }
   };
   console.log(params);
   useEffect( () => {
         fetch("http://localhost:3001/api/product/byid/" + params.id)
               .then(res => {
                  console.log(res);
                  return res.json()})
               .then(res => {
                  console.log(res);
                  setProduct(res); 
                  setIsLoad(true); 
                  document.getElementById("iputSearch").value = " "; 
                  document.getElementById("ulautocompletecollection").innerText = " ";
               })
               .catch(err =>
                  console.log(err))
      },
      [params]);
   if (!isLoad) return (
      <div className="spinner-border" role="status">
            <span className="sr-only">Загрузка...</span>
      </div>
   );
   let img = "http://localhost:3001" + product.image;
   let img1 = "http://localhost:3001" + product.imageOne;
   let img2 = "http://localhost:3001" + product.imageTwo;
   let img3 = "http://localhost:3001" + product.imageThree;
   return (
		<div className="row row-product">
			<div className="col-5 offset-1"><h2 className="product-name">Вино {product.name}</h2></div>
         <div className="col-1 offset-4"></div>
			<div className="col-1 offset-1">
            <ul className="ul-thee-left-img">
               <li><img src={img1}/></li>
               <li><img src={img2}/></li>
               <li><img src={img3}/></li>
            </ul>
         </div>
         <div className="col-3 wine-bg-img">
            <div className="div-wine-bg-img"><img src={img}/></div>
         </div>
         <ul className="col-3 kharakter">
            <li className="raiting">Рейтинг:</li>
            <li className="stars">
               <p>4.8</p>
               <div><img src={Star}/></div>
               <div><img src={Star}/></div>
               <div><img src={Star}/></div>
               <div><img src={Star}/></div>
               <div><img src={Star}/></div>
            </li>
            <li className="znak">
               <div><img src={znak1}/></div>
               <div><img src={znak2}/></div>
               <div><img src={znak3}/></div>
            </li>
            <li>Страна, регион: {product.country}</li>
            <li>Вино: {product.WineType}</li>
            <li>Сахар: {product.sugar}</li>
            <li>Виноград: {product.grape}</li>
            <li>Крепость: {product.fortress}</li>
            <li>Объем: {product.Value[0]}</li>
            <li><a>Смотреть все характеристики</a></li>
         </ul>
         {/*<ProductInBasket></ProductInBasket>*/}
         <div className="col-4 col-div-bg-color">
            <div className="div-bg-color">
               <p className="p-strike">7500грн.</p>
               <div className="div-price">
                  <p className="p-price">{product.price}грн.</p>
                  <div className="div-action">-15%</div>
               </div>
               <div className="div-count-buttons">
                  <div className="div-count">
                     <button className="decrement-increment" onClick={handleDecrement}>-</button>
                     <div className="div-count-h5">{count}</div>
                     <button className="decrement-increment" onClick={handleIncrement}>+</button>
                  </div>
                  <div><button className="btn btn-put-cart">В корзину</button></div>
               </div>
               <div className="div-betters">
                  <ul className="betters">
                     <li>Преимущество 1</li>
                     <li>Преимущество 2</li>
                     <li>Преимущество 3</li>
                  </ul>
                  <ul className="betters-2">
                     <li>Преимущество 4</li>
                     <li>Преимущество 5</li>
                  </ul>
               </div>
            </div>
            <div className="div-bg-color-img"><img src={imgbg}/></div>
         </div>
		</div>
   )
}