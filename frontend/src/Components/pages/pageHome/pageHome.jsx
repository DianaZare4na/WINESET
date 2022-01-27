import React from "react";
import {useState} from "react";

import './slider.css';
import './homeStyle.css';

import Slider from "./slider";
import BasketOfDelicacies from "./BasketOfDelicacies";
import Main from "./Main";
import SimpleSlider from "./sliderSlick";
import Delivery from "./Delivery";
import TelegramBot from "../../TelegramBot/TelegramBot";
import SimpleSliderGifts from "./sliderSlickGifts";

function PageHome(){

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
			<Slider></Slider>
         <BasketOfDelicacies></BasketOfDelicacies>
         <Main></Main>
			<article className="row no-gutters ">
			<h2 className="main-h2 main-h2-1 col-6 offset-1">Корпоративным клиентам <br/> и партнерам</h2>
				<SimpleSlider></SimpleSlider>
			</article>
			<article className="row no-gutters article-bg-img">
            <Delivery></Delivery>
				<section className="col-12 offset-0 telegramm-section col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2  col-xl-8 offset-xl-2">
               <TelegramBot></TelegramBot>
            </section>
				<section className="col-12">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.32832621304!2d31.990545815608726!3d46.974885479147886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5c974a868e521%3A0xeae64eafb99934a2!2z0JrQvtC80L_RjNGO0YLQtdGA0L3QsNGPINCQ0LrQsNC00LXQvNC40Y8g0KjQkNCTINCd0LjQutC-0LvQsNC10LI!5e0!3m2!1sru!2sua!4v1641672417245!5m2!1sru!2sua" className="iframe" allowfullscreen="" loading="lazy"></iframe>
				</section>
			</article>
			<article className="row no-gutters ">
			<h2 className="main-h2 main-h2-1 col-6 offset-1">подарочные корзины</h2>
				<SimpleSliderGifts></SimpleSliderGifts>
			</article>
		</>
	)

}
export default PageHome;