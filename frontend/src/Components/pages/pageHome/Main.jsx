import React from "react";
import {useState} from "react";

import './homeStyle.css';

import arrWhite from "./img/arrWhite.png";
import manGlass from "./img/manWithGlass.png";
import aboutSome from "./img/aboutSome.png";
import aboutShop from "./img/aboutShop.png";

function Main(){

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
		</>
	)

}
export default Main;