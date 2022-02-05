import React from "react";
import {useState, useEffect} from "react";

import './slider.css';
import './homeStyle.css';

import Slider from "./slider";
import BasketOfDelicacies from "./BasketOfDelicacies";
import Main from "./Main";
import SimpleSlider from "./sliderSlick";
import Delivery from "./Delivery";
import TelegramBot from "../../TelegramBot/TelegramBot";
import SimpleSliderGifts from "./sliderSlickGifts";
//import Age from "../../../age/age";
//import ShowModal from "../../modals/showModal";
function PageHome(){

	const [isLoad, setIsLoad] = useState(true);

   //const [showAlert, setShowAlert] = useState(<Age/>);
	if (!isLoad) return (
		<div className="d-flex justify-content-center">
         <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </div>
	);
	return(
		<>
         {/*<Age/>*/}
			<Slider></Slider>
         <BasketOfDelicacies></BasketOfDelicacies>
         <Main></Main>
			<article className="row no-gutters ">
			<h2 className="main-h2 main-h2-1 col-10 offset-1 col-sm-6 offset-sm-1  col-md-6 offset-md-1 col-lg-6 offset-lg-1 col-xl-6 offset-xl-1">Корпоративным клиентам <br/> и партнерам</h2>
				<SimpleSlider></SimpleSlider>
			</article>
			<article className="row no-gutters article-bg-img">
            <Delivery></Delivery>
				<section className="col-10 offset-1 telegramm-section col-sm-8 offset-sm-2 col-md-10 offset-md-1 col-lg-10 offset-lg-1  col-xl-8 offset-xl-2">
               <TelegramBot></TelegramBot>
            </section>
				<section className="col-12">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.32832621304!2d31.990545815608726!3d46.974885479147886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5c974a868e521%3A0xeae64eafb99934a2!2z0JrQvtC80L_RjNGO0YLQtdGA0L3QsNGPINCQ0LrQsNC00LXQvNC40Y8g0KjQkNCTINCd0LjQutC-0LvQsNC10LI!5e0!3m2!1sru!2sua!4v1641672417245!5m2!1sru!2sua" className="iframe" allowfullscreen="" loading="lazy"></iframe>
				</section>
			</article>
			<article className="row no-gutters ">
			<h2 className="main-h2 main-h2-1 h2-gift col-10 offset-1 col-sm-6 offset-sm-1  col-md-6 offset-md-1 col-lg-6 offset-lg-1 col-xl-6 offset-xl-1">подарочные корзины</h2>
				<SimpleSliderGifts></SimpleSliderGifts>
			</article>
		</>
	)

}
export default PageHome;