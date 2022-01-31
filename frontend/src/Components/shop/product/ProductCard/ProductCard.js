import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import './productcard.css';
import Star from "./img/Star.png";
import znak1 from "./img/znak1.png";
import znak2 from "./img/znak2.png";
import znak3 from "./img/znak3.png";
import imgbg from "./img/winebgpr.png"
import Count from "./Count";
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
                  document.getElementById("ulautocompletecollection").innerText = "";
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
   let img = "http://localhost:3001" + product.image[0];
   let img1 = "http://localhost:3001" + product.image[1];
   let img2 = "http://localhost:3001" + product.image[2];
   let img3 = "http://localhost:3001" + product.image[3];
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
            <li>
               <ul>
                  {
                     product.characteristics.map( characteristic =>
                        <li>{characteristic.name}{characteristic.meaning}</li>
                     )
                  }
               </ul>
            </li>
         </ul>
         
         <div className="col-4 col-div-bg-color">
            <div className="div-bg-color">
               <p className="p-strike">{product.price ? product.price : product.price_action}</p>
               <div className="div-price">
                  <p className="p-price">{product.price_action ? product.price_action : product.price}грн.</p>
                  <div className="div-action">-15%</div>
               </div>
               <div className="div-count-buttons">
                  <Count count={count}></Count>
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