import React from "react";
import {useState} from "react";

import './homeStyle.css';

import hand from "./img/hend.png";

function Delivery(){

	return(
		<>
         <section className="col-10 offset-1 col-sm-10 offset-sm-1 col-md-6 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
            <h2 className="main-h2 diliv-h2">доставка</h2>
            <div className="div-img-main"><img src={hand}/></div>
         </section>
         <section className="col-10 offset-1 col-sm-10 offset-sm-1 col-md-3 offset-md-1 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1">
            <p className="p-article">
               Доставка выбранного Вами товара осуществляется по всей территории 
               Украины курьерской службой «Нова Пошта» в течении 2-3 рабочих дней.
               Возможен самовывоз товара со склада «Нової Пошти» либо адресная курьерская
                доставка по городу. Адреса отделений в Вашем городе Вы можете посмотреть 
                на официальном сайте компании «Нова Пошта».В зависимости от выбранного 
                Вами варианта доставки, цена услуги может меняться.</p>
               
         </section>
         <section className="sectoin-deliv-flex col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1">
            <p className="p-article p-article-2">
               При заказе от 2000 грн. и больше– доставка бесплатная.
                Адресная курьерская доставка: при заказе до 3000 грн. 
                цена доставки 130 грн, при заказе от 3000 грн. доставка
                 бесплатная.</p>
                
            <div className="div-delivery">
               <a className="a-delivery">ПОДРОБНЕЕ О ДОСТАВКЕ</a>
            </div>
         </section>
				
		</>
	)

}
export default Delivery;