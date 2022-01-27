import React from "react";
// import {Link} from "react-router-dom";
import hurt from "./img/hurt.png"
import './favorite.css';
export function Favorite({favorite}){

	return(
		<>
		<div className="col-1 offset-4 div-hurt" data-toggle="modal" data-target="#FavoriteAll">
         <div className="favorite-length">
            {/*{favorite.length}*/}
            {favorite.length ? <span>{favorite.length}</span> : null}
         </div>
         <img src={hurt}/>
      </div>
		</>
	);

} 





