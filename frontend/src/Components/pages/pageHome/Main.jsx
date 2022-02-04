import React from "react";
import {useState} from "react";

import './homeStyle.css';

import arrWhite from "./img/arrWhite.png";
import manGlass from "./img/manWithGlass.png";
import aboutSome from "./img/aboutSome.png";
import aboutShop from "./img/aboutShop.png";

function Main(){

	return(
		<>
			<main className="row no-gutters main-bg-img">
				<section className="col-10 offset-1 col-sm-5 offset-sm-1  col-md-5 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
					<h2 className="main-h2">Что делает нас особенными?</h2>
					<div className="div-img-main"><img src={manGlass}/>
						<div className="arr-white-div-man">
							<img className="arr-white-man" src={arrWhite} alt="" />
						</div>
					</div>
					<h4><a href="#">Нужна помощь в выборе вина?</a></h4>
				</section>
				<section className="section-p-main1 offset-1 col-10 col-sm-4 offset-sm-1  col-md-4 offset-md-1 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1">
					<p className="p-main p-order1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
						ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<div className="div-order1">
                  <div className="div-img-main"><img src={aboutSome}/></div>
                  <h4><a>Про сомелье</a></h4>
               </div>
				</section>
				<section className=" section-p-main  offset-1 col-10 offset-1 col-sm-10 offset-sm-1  col-md-10 offset-md-1 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1">
				<p className="p-main p-main-2 p-order">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
						ullamco labo.</p>
					<div className="div-order">
                  <div className="div-img-main"><img src={aboutShop}/></div>
					   <h4><a>Подробнее о магазине</a></h4>
               </div>
				</section>
			</main>
		</>
	)

}
export default Main;