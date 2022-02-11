import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import './productcard.css';
import Star from "./img/Star.png";
import znak1 from "./img/znak1.png";
import znak2 from "./img/znak2.png";
import znak3 from "./img/znak3.png";
import imgbg from "./img/winebgpr.png"
import ShowModal from "../../../modals/showModal"
import ModalBasket from '../../../modals/modalBasket';
export function ProductCard ({putToBasket}){
   const [count, setCount] = useState(1);
   const [showAlert, setShowAlert] = useState(null);
   const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
   };

   const handleDecrement = () => {
      setCount(prevCount => prevCount - 1);
      if(count==0){
         setCount(0);
      }
   };
   
   let params = useParams();

   const [product, setProduct] = useState({});
   const [isLoad, setIsLoad] = useState(false);
   const put = function(){
      putToBasket(product)
      setShowAlert(<ModalBasket product={product}/>);
   }

   const totalPrice = product.price_action ? product.price_action : product.price;
   const final = totalPrice * count;
   console.log(params);
   useEffect( () => {
         fetch("/api/product/byid/" + params.id)
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
   let img =product.image[0];
   let img1 =product.image[1];
   let img2 =product.image[2];
   let img3 =product.image[3];
   return (
		<div className="row row-product">
          {showAlert}
			<div className="col-10 offset-1 col-sm-5 offset-sm-1 col-md-5 offset-md-1 col-lg-5 offset-lg-1 col-xl-5 offset-xl-1"><h2 className="product-name">{product.category} {product.name}</h2></div>
         <div className="col-12"></div>
			<div className="col-1 offset-1 col-thee-img">
            <ul className="ul-thee-left-img">
               <li><img src={img1}/></li>
               <li><img src={img2}/></li>
               <li><img src={img3}/></li>
            </ul>
         </div>
         <div className="col-4 wine-bg-img offset-1 col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-0 col-xl-2 offset-xl-0">
            <div className="div-wine-bg-img"><img src={img}/></div>
         </div>
         <ul className="col-6 kharakter offset-1 col-sm-4 offset-sm-1 col-md-4 offset-md-1 col-lg-4 offset-lg-0 col-xl-4 offset-xl-0">
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
               <ul className="kharakter2">
                  {
                     product.characteristics.map( characteristic =>
                        <li>{characteristic.name}{characteristic.meaning}</li>
                     )
                  }
               </ul>
            </li>
         </ul>
         
         <div className="col-11 col-div-bg-color offset-1 col-sm-4 offset-sm-0 col-md-4 offset-md-0 col-lg-4 offset-lg-0 col-xl-4 offset-xl-0">
            <div className="div-bg-color">
               <p className="p-strike">{product.price ? product.price : product.price_action}</p>
               <div className="div-price">
                  <p className="p-price">{final}грн.</p>
                  <div className="div-action">-15%</div>
               </div>
               <div className="div-count-buttons">
               <div className="div-count card-count">
                  <button className="decrement-increment" onClick={handleDecrement}>-</button>
                 
                  <div className="div-count-input">{count}</div>
                  <button className="decrement-increment" onClick={handleIncrement}>+</button>
               </div>
                  <div><button className="btn btn-put-cart"  onClick={put}>В корзину</button></div>
               </div>
               <div className="div-betters">
                  <ul className="betters">
                     <li>{product.dess}</li>
                     <li>{product.dessOne}</li>
                     <li>{product.dessTwo}</li>
                  </ul>
                  <ul className="betters-2">
                     <li>{product.dessThree}</li>
                     <li>{product.dessFour}</li>
                  </ul>
               </div>
            </div>
            <div className="div-bg-color-img"><img src={imgbg}/></div>
         </div>
		</div>
   )
}