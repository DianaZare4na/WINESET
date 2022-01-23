import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import '../ProductCard/productcard.css';
import Star from "./img/Star.png";
import znak1 from "./img/znak1.png";
import znak2 from "./img/znak2.png";
import znak3 from "./img/znak3.png";
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
                  document.getElementById("iputSearch").value = " "; 
                  document.getElementById("ulautocompletecollection").innerText = " ";
                  setIsLoad(true); 
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
		<div className="row">
			<div className="col-5 offset-1"><h2>{product.name}</h2><div className="col-1 offset-4"></div></div>
			<div className="col-1 offset-1">
            <ul>
               <li><img src={img1}/></li>
               <li><img src={img2}/></li>
               <li><img src={img3}/></li>
            </ul>
         </div>
         <div className="col-3">
            <div><img src={img}/></div>
         </div>
         <ul className="col-3">
            <li>Рейтинг:</li>
            <li>
               <span>4.8</span>
               <div><img src={Star}/></div>
               <div><img src={Star}/></div>
               <div><img src={Star}/></div>
               <div><img src={Star}/></div>
               <div><img src={Star}/></div>
            </li>
            <li>
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
         <div className="col-4">
         <p >{product} <span>-15%</span></p>
         <div>
         <div>
            <button onClick={handleDecrement}>-</button>
            <h5>Count is {count}</h5>
            <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={() => setCount(0)}>Reset</button>
         </div>
      </div>
			</div>
   )
}