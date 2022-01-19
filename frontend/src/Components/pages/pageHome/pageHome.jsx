import React from "react";
import {useEffect, useState} from "react";
import './slider.css';
import './homeStyle.css';
import mG from "./img/manGlass2.png";
import frenchwine from "./img/frenchwine.png";
import bascetofdelicacies from "./img/bascetofdelicacies.png";
import tenutaargentiera from "./img/tenutaargentiera.png";
import tenutalogo from "./img/tenutalogo.png";
import arrWhite from "./img/arrWhite.png";
import manGlass from "./img/manWithGlass.png";
import aboutSome from "./img/aboutSome.png";
import aboutShop from "./img/aboutShop.png";
import SimpleSlider from "./sliderSlick";
import SimpleSliderGifts from "./sliderSlickGifts";
import hand from "./img/hend.png";
import TelegramBot from "../../TelegramBot/TelegramBot";
import Slider from "./slider";
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
			<div className="row no-gutters">  
				<div className="col-12 after-slider-col col-sm-12 col-md-4 col-lg-4 col-xl-4"><div><div className="imgafterslider imgafterslidercenter1">
					<img  className="img-bigger" src={bascetofdelicacies}/>
					<div className="basket-of-delicacies-div img-after-slider-absolute">
						<p className="basket-of-delicacies-p">BASKET OF DELICACIES</p>
						<div className="arr-white-div">
							<img className="arr-white" src={arrWhite} alt="" />
						</div>
					</div>
					</div></div></div>
				<div className="col-12 after-slider-col col-sm-12 col-md-4 col-lg-4 col-xl-4"><div><div className="imgafterslider imgafterslidercenter2">
					<img  className="img-bigger" src={frenchwine}/>
					<div className="french-wine-div img-after-slider-absolute">
						<p className="french-wine-p">FRENCH WINE</p>
					</div>
					</div></div></div>
				<div className="col-12 after-slider-col col-sm-12 col-md-4 col-lg-4 col-xl-4"><div><div className="imgafterslider imgafterslidercenter3">
					<img className="img-bigger" id="img-bigger-tenuta" src={tenutaargentiera}/>
					<div className="tenuta-argentiera-div img-after-slider-absolute">
						<p className="tenuta-argentiera-p">TENUTA ARGENTIERA</p>
						<div className="divimg-tenutalogo">
							<img className="tenuta-logo" src={tenutalogo} alt="" />
						</div>
					</div>
					</div></div></div>
			</div>
			<main className="row no-gutters main-bg-img">
				<section className="col-4 offset-1">
					<h2 className="main-h2">Что делает нас особенными?</h2>
					<div className="div-img-main"><img src={manGlass}/>
						<div className="arr-white-div-man">
							<img className="arr-white-man" src={arrWhite} alt="" />
						</div>
					</div>
					<h4><a>Нужна помощь в выборе вина?</a></h4>
				</section>
				<section className="col-2 offset-1">
					<p className="p-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
						ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<div className="div-img-main"><img src={aboutSome}/></div>
					<h4><a>Про сомелье</a></h4>
				</section>
				<section className="col-2 offset-1">
				<p className="p-main p-main-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
						ullamco labo.</p>
					<div className="div-img-main"><img src={aboutShop}/></div>
					<h4><a>Подробнее о магазине</a></h4>
				</section>
			</main>
			<article className="row no-gutters ">
			<h2 className="main-h2 main-h2-1 col-6 offset-1">Корпоративным клиентам <br/> и партнерам</h2>
				<SimpleSlider></SimpleSlider>
			</article>
			<article className="row no-gutters article-bg-img">
				<section className="col-4 offset-1">
					<h2 className="main-h2">доставка</h2>
					<div className="div-img-main"><img src={hand}/></div>
				</section>
				<section className="col-2 offset-1">
					<p className="p-article">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
						velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</section>
				<section className="col-2 offset-1">
					<p className="p-article">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco labo</p>
					<div className="div-delivery"><a className="a-delivery">ПОДРОБНЕЕ О ДОСТАВКЕ</a></div>
				</section>
				<section className="col-12 offset-0 telegramm-section col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2  col-xl-8 offset-xl-2"><TelegramBot></TelegramBot></section>
				<section className="col-12">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.32832621304!2d31.990545815608726!3d46.974885479147886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5c974a868e521%3A0xeae64eafb99934a2!2z0JrQvtC80L_RjNGO0YLQtdGA0L3QsNGPINCQ0LrQsNC00LXQvNC40Y8g0KjQkNCTINCd0LjQutC-0LvQsNC10LI!5e0!3m2!1sru!2sua!4v1641672417245!5m2!1sru!2sua" className="iframe" allowfullscreen="" loading="lazy"></iframe>
				</section>
			</article>
			<article className="row no-gutters ">
			<h2 className="main-h2 main-h2-1 col-6 offset-1">подарочные корзины</h2>
				<SimpleSliderGifts></SimpleSliderGifts>
			</article>
			<article className="row no-gutters">
				<section className="col-12">
					<div className="reletiv-div-man">
					<div className="img-div-man"><img src={mG} alt="..."/></div>
						<div className="bacground-div bacground-div-man">
						<div className="bacground-div-text-man bacground-div-text-man-down">
								<p className="special-offer special-offer-down">Sommelier Choice</p>
								<h2 className="glasses-сandles glasses-сandles-down">НЕ УВЕРЕНЫ В ВЫБОРЕ? <br/> МЫ ГОТОВЫ ПОМОЧЬ!</h2>
								<a className="set-wine set-wine-down">ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</a>
							</div>
						</div>
					</div>
				</section>
			</article>
		</>
	)

}
export default PageHome;