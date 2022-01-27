import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderSlick.css";

import React from "react";
import Slider from "react-slick";

import sliderF from "./img/sliderF.png";
import sliderS from "./img/sliderS.png";

export default function SimpleSlider() {
	const settings = {
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
      speed: 3500,
      autoplaySpeed: 3500,
		centerMode: true,
		centerPadding: "-80px",
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				 slidesToShow: 3,
				 slidesToScroll: 3,
			
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 2,
				 initialSlide: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1
			  }
			}
		 ]
		
	};
	return (<>
			<Slider  className="col-11 offset-1 flex-slider article-simple-slider" {...settings}>
			<div>
				<div className="div-img-slider"><img src={sliderF}/></div>
				<h3>Корпоративныч клиентам</h3>
			</div>
			<div>
				<div className="div-img-slider"><img src={sliderS}/></div>
				<h3>Свадебным агенствам</h3>
			</div>
			<div>
				<div className="div-img-slider"><img src={sliderF}/></div>
				<h3>Свадебным агенствам</h3>
			</div>
			<div>
				<div className="div-img-slider"><img src={sliderS}/></div>
				<h3>Корпоративныч клиентам</h3>
			</div>
			<div>
				<div className="div-img-slider"><img src={sliderS}/></div>
				<h3>Свадебным агенствам</h3>
			</div>
			<div>
				<div className="div-img-slider"><img src={sliderS}/></div>
				<h3>Корпоративныч клиентам</h3>
			</div>
		</Slider>
		</>
	);
}