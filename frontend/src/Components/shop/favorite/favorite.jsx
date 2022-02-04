import React from "react";
// import {Link} from "react-router-dom";
import hurt from "./img/hurt.png"
import './favorite.css';
export function Favorite({favorite}){

	return(
		<>
		<div className="col-1 offset-2 col-sm-1 offset-sm-3 col-md-1 offset-md-4 col-lg-1 offset-lg-4 col-xl-1 offset-xl-4 col-favorite" data-toggle="modal" data-target="#FavoriteAll">
         <div className="favorite-length">
            {favorite.length ? <span>{favorite.length}</span> : null}
         </div>
         <div className="div-hurt"><img src={hurt}/></div>
      </div>
		</>
	);

} 





