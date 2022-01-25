import React from "react";
// import {Link} from "react-router-dom";
import hurt from "./img/hurt.png"
import './favorite.css';
export function Favorite({favorite}){

	return(
		<>
		<div className="col-1 offset-4 div-hurt">
         <div className="favorite-length">
            {favorite.length}
         </div>
         <img src={hurt}/>
      </div>
		</>
	);

} 





