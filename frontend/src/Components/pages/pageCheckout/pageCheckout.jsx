import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import './pageCheout.css';
import ArrowRight from "./img/ArrowRight.png";
//import {PageCheckoutItem} from "./pageCheckoutItem" ;
function PageCheckout({product}){
	const [isLoad, setIsLoad] = useState(true);
	if (!isLoad) return (
		<div className="d-flex justify-content-center">
         <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </div>
	);
	return(
      <>
         <section className="row">
            <div className="col-10 col-back-to-basket offset-1"><Link to="/basket" className="a-arr" data-toggle="modal" data-target="#BasketAll"><img src={ArrowRight}/>Вернуться в корзину</Link></div>
            <h2 className="col-3 offset-1 main-h2 main-h2-checkout-page">персональные данные</h2>
            <div className="col-12"></div>
            <div className="col-4 offset-1">
               <h4 className="page-checkout-h4">Получатель</h4>
               <form name="formP_1" id="formPageOne">
               <input type="text" placeholder="Имя..." pattern="[А-Яа-яЁё]{,50}" maxlength="20" required/>
               <input type="text" placeholder="Фамилия..." pattern="[А-Яа-яЁё]{,50}" maxlength="36" required/>
               <input className="tel" type="tel" placeholder="Номер телефона..."
                  pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" maxlength="14" required/>
               <input type="email" placeholder="Email.." maxlength="50" required/>
               <hr/>
               <h4 className="page-checkout-h4">Доставка</h4>
               <select name="select" className="page-checkout-select">
                  <option selected disabled>Выберите город</option>
                  <option>Одесса</option>
                  <option>Киев</option>
                  <option>Херсон</option>
                  <option>Днепр</option>
                  <option>Донецк</option>
                  <option>Запорожье</option>
                  <option>Львов</option>
                  <option>Кривой Рог</option>
                  <option>Севастополь</option>
                  <option>Мариуполь</option>
               </select>
               <input type="text" placeholder="адрес..." pattern="[А-Яа-яЁё]{,50}" maxlength="36" required/>
               <hr/>
               <h4 className="page-checkout-h4">Оплата</h4>
               <input type="text" placeholder="город" pattern="[А-Яа-яЁё]{,50}" maxlength="20" required/>
               <input type="text" placeholder="адрес..." pattern="[А-Яа-яЁё]{,50}" maxlength="36" required/>
               <hr/>
               <h4 className="page-checkout-h4">Ваш комментарий</h4>
               <textarea className="page-checkout-textarea" placeholder="Ваше сообщение..."></textarea>
               <hr/>
            </form>
            </div>
            <div className="col-6 offset-1 col-page-checkuot-bg">
               <div className="page-checkuot-bg">
                  <div className="page-checkuot-bg-div-edit">
                     <h3>Bаш заказ</h3>
                     <a>Редактировать</a>
                  </div>
                  <div className="page-checkuot-bg-div-products">
                     <div>
                        {/*<img src={product.image} alt="" />*/}
                     </div>
                     <div>
                        <p>Вино красное сухое</p>
                        {/*<p>{product.name}</p>*/}
                        <p>Артикул</p>
                     </div>
                        {/*<p>{product.price}</p>*/}
                  </div>
                  <hr/>
                  <h4>Товары</h4>
                  <div className="page-checkuot-bg-div-p-p">
                     <p>5 товаров</p>
                     {/*<p>общая сумма: {product.price}</p>*/}
                  </div>
                  <div className="page-checkuot-bg-div-h4-p">
                     <h4>Cкидка</h4>
                     {/*<p className="page-checkuot-bg-div-h4-p-action">Скидка: -{product.price}</p>*/}
                  </div>
                  <hr/>
                  <div className="page-checkuot-bg-div-h3-p">
                     <h3>Итого</h3>
                     <p>20000 грн.</p>
                  </div>
                  <div className="page-checkuot-bg-div-btn">
                     <button className=" btn btn-primary">Оформить</button>
                  </div>
               </div>
            </div>
         </section>
         </>
	)

}
export default PageCheckout;
