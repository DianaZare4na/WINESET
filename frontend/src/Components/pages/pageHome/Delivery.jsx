import React from "react";
import {useState} from "react";

import './homeStyle.css';

import hand from "./img/hend.png";

function Delivery(){

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
            <div className="div-delivery">
               <a className="a-delivery">ПОДРОБНЕЕ О ДОСТАВКЕ</a>
            </div>
         </section>
				
		</>
	)

}
export default Delivery;