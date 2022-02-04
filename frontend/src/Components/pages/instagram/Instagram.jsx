import React from "react";
import {useState} from "react";
import './instagram.css';
import '../pageHome/homeStyle.css';
import mG from "../pageHome/img/manGlass2.png";
import f from "./img/1.png";
import s from "./img/2.png";
import t from "./img/3.png";
import fr from "./img/4.png";

function Instagram(){

	return(
		<>
			<article className="row no-gutters row-inst">
				<section className="col-12">
					<div className="reletiv-div-man">
					<div className="img-div-man"><img src={mG} alt="..."/></div>
						<div className="bacground-div bacground-div-man">
						<div className="bacground-div-text-man bacground-div-text-man-down">
								<p className="special-offer special-offer-down">Sommelier Choice</p>
								<h2 className="glasses-сandles glasses-сandles-down">НЕ УВЕРЕНЫ В ВЫБОРЕ? <br/> МЫ ГОТОВЫ ПОМОЧЬ!</h2>
								<div className="div-set-wine-down"><a className="set-wine set-wine-down">ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</a></div>
							</div>
						</div>
					</div>
				</section>
			</article>
         <article className="row no-gutters row-instagram">
				<h2 className="col-3 main-h2 instagram-main-h2 offset-1 col-sm-3 offset-sm-1  col-md-3 offset-md-1 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1">instagram</h2>
            <div className="div-delivery instagram-div-delivery col-4 offset-3 col-sm-3 offset-sm-4  col-md-3 offset-md-4 col-lg-2 offset-lg-6 col-xl-2 offset-xl-6">
               <a className="instagram-div-delivery-a a-delivery">подписаться</a>
            </div>
            <section className="col-10 offset-1 instagram-col ">
               <div className="instagram-img-div"><img src={f} alt="" /></div>
               <div className="instagram-img-div"><img src={s} alt="" /></div>
               <div className="instagram-img-div"><img src={t} alt="" /></div>
               <div className="instagram-img-div"><img src={fr} alt="" /></div>
            </section>
			</article>
		</>
	)

}
export default Instagram;