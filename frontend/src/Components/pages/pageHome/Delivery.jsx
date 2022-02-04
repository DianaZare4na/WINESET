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
            <p className="p-article">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
               ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </section>
         <section className="sectoin-deliv-flex col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1">
            <p className="p-article p-article-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco labo</p>
            <div className="div-delivery">
               <a className="a-delivery">ПОДРОБНЕЕ О ДОСТАВКЕ</a>
            </div>
         </section>
				
		</>
	)

}
export default Delivery;