import React from 'react';
import './slider.css';
import glass from "./img/glasSlider.png";
import arrRight from "./img/arrright.png";
import arrleft from "./img/arrleft.png";

export default function Slider(){
	
		return (
			<div>
				<div id="carouselExampleIndicators" className="row carousel slide" data-ride="carousel">
				<ul className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ul>
				<div className="carousel-inner">
					<div className="carousel-item active carusel-reletiv-div">
						<img src={glass} className="d-block w-100" alt="..."/>
						<div className="bacground-div">
							<div className="bacground-div-text">
								<p className="special-offer">Special offer</p>
								<h2 className="glasses-сandles">glasses <br/>&#38; сandles</h2>
								<p className="set-wine">СОЗДАЙ СВОЙ ВИННЫЙ СЕТ</p>
							</div>
						</div>
					</div>
					<div className="carousel-item carusel-reletiv-div">
						<img src={glass} className="d-block w-100" alt="..."/>
						<div className="bacground-div">
						<div className="bacground-div-text">
								<p className="special-offer">Special offer</p>
								<h2 className="glasses-сandles">glasses <br/>	&#38; сandles</h2>
								<p className="set-wine">СОЗДАЙ СВОЙ ВИННЫЙ СЕТ</p>
							</div>
						</div>
					</div>
					<div className="carousel-item carusel-reletiv-div">
						<img src={glass} className="d-block w-100" alt="..."/>
						<div className="bacground-div">
							<div className="bacground-div-text">
								<p className="special-offer">Special offer</p>
								<h2 className="glasses-сandles">glasses <br/>	&#38; сandles</h2>
								<p className="set-wine">СОЗДАЙ СВОЙ ВИННЫЙ СЕТ</p>
							</div>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<div className="arr-div"><img src={arrleft}/></div>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<div className="arr-div"><img src={arrRight}/></div>
				</a>
			</div>
			</div>
		);
}

