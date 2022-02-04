import React from "react";
import {Link} from "react-router-dom";
import './homeStyle.css';

import frenchwine from "./img/frenchwine.png";
import bascetofdelicacies from "./img/bascetofdelicacies.png";
import tenutaargentiera from "./img/tenutaargentiera.png";
import tenutalogo from "./img/tenutalogo.png";
import arrWhite from "./img/arrWhite.png";

function BasketOfDelicacies(){
   
	return(
		<>
			<div className="row no-gutters">  
				<div className="col-12 after-slider-col col-sm-12 col-md-4 col-lg-4 col-xl-4"><div><div className="imgafterslider imgafterslidercenter1">
					<img  className="img-bigger" src={bascetofdelicacies}/>
					<div className="basket-of-delicacies-div img-after-slider-absolute">
						<p className="basket-of-delicacies-p">BASKET OF DELICACIES</p>
						<Link to="/delicacies">
                  <div className="arr-white-div">
							<img className="arr-white" src={arrWhite} alt="" />
						</div>
                  </Link>
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
		</>
	)

}
export default BasketOfDelicacies;