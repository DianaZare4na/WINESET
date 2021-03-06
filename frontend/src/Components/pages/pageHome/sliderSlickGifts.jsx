import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderSlickGifts.css";
import React from "react";
import Slider from "react-slick";
import sliderF from "./img/gifts1.png";
import sliderS from "./img/gifts2.png";
import slidert from "./img/gifts3.png";

export default function SimpleSliderGifts() {
	const settings = {
		arrows: true,
		dots: true,
		infinite: true,
		speed: 2500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
      autoplaySpeed: 2500,
		centerMode: true,
		centerPadding: "-100px",
  		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				 slidesToShow: 3,
				 slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				 slidesToShow: 3,
				 slidesToScroll: 1,

			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 1
			  }
			}
		 ]
		
	};
	return (
			<Slider  className="col-11 offset-1 flex-slider article-simple-slider slider-gifts" {...settings}>
			<div>
				<div className="slider-gifts-div-img"><img src={sliderF}/></div>
				<div>
				<h4 className="h4-slider-gifts">Подарочный набор Sassicaia</h4>
				<p className="p-slider-gifts">Состав:</p>
						<ul className="ul-slider-gifts">
							<li>Вино Primitivo, Feudi di San Gregorio 0,750</li>
							<li>Сыр Montanari Gruzza 16 мес. выдержки 250г</li>
							<li>Чатни к сыру 300г, Mrs Bridges</li>
							<li>Печенье вафельное 200г, Belgian Butters</li>
						</ul>
				</div>
			</div>
			<div>
			<div className="slider-gifts-div-img"><img src={sliderS}/></div>
			<div>
				<h4 className="h4-slider-gifts">Подарочный набор Juve Camps</h4>
					<p className="p-slider-gifts">Состав:</p>
						<ul className="ul-slider-gifts">
							<li>Вино Primitivo, Feudi di San Gregorio 0,750</li>
							<li>Сыр Montanari Gruzza 16 мес. выдержки 250г</li>
							<li>Чатни к сыру 300г, Mrs Bridges</li>
							<li>Печенье вафельное 200г, Belgian Butters</li>
						</ul>
				</div>
			</div>
			<div>
			<div className="slider-gifts-div-img"><img src={slidert}/></div>
			<div>
				<h4 className="h4-slider-gifts">Подарочный набор Cesari</h4>
					<p className="p-slider-gifts">Состав:</p>
						<ul className="ul-slider-gifts">
							<li>Вино Primitivo, Feudi di San Gregorio 0,750</li>
							<li>Сыр Montanari Gruzza 16 мес. выдержки 250г</li>
							<li>Чатни к сыру 300г, Mrs Bridges</li>
							<li>Печенье вафельное 200г, Belgian Butters</li>
						</ul>
				</div>
			</div>
			<div>
			<div className="slider-gifts-div-img"><img src={sliderF}/></div>
			<div>
				<h4 className="h4-slider-gifts">Подарочный набор P.V. Restituta</h4>
					<p className="p-slider-gifts">Состав:</p>
						<ul className="ul-slider-gifts">
							<li>Вино Primitivo, Feudi di San Gregorio 0,750</li>
							<li>Сыр Montanari Gruzza 16 мес. выдержки 250г</li>
							<li>Чатни к сыру 300г, Mrs Bridges</li>
							<li>Печенье вафельное 200г, Belgian Butters</li>
						</ul>
				</div>
			</div>
			<div>
			<div className="slider-gifts-div-img"><img src={sliderS}/></div>
			<div>
				<h4 className="h4-slider-gifts">Подарочный набор Juve Camps</h4>
					<p className="p-slider-gifts">Состав:</p>
						<ul className="ul-slider-gifts">
							<li>Вино Primitivo, Feudi di San Gregorio 0,750</li>
							<li>Сыр Montanari Gruzza 16 мес. выдержки 250г</li>
							<li>Чатни к сыру 300г, Mrs Bridges</li>
							<li>Печенье вафельное 200г, Belgian Butters</li>
						</ul>
				</div>
			</div>
		</Slider>
	);
}