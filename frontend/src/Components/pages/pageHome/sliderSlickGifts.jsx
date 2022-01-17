import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderSlick.css";
import React from "react";
import Slider from "react-slick";
import sliderF from "./img/gifts1.png";
import sliderS from "./img/gifts2.png";
import slidert from "./img/gifts3.png";

export default function SimpleSliderGifts() {
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
      speed: 2500,
      autoplaySpeed: 2500,
		centerMode: true,
		centerPadding: "-60px",
  		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				 slidesToShow: 3,
				 slidesToScroll: 3,
				 infinite: true,
				 dots: true
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
	return (
			<Slider  className="col-11 offset-1 flex-slider article-simple-slider" {...settings}>
			<div>
				<div><img src={sliderF}/></div>
				<h3></h3>
			</div>
			<div>
			<div><img src={sliderS}/></div>
				<h3></h3>
			</div>
			<div>
			<div><img src={slidert}/></div>
				<h3></h3>
			</div>
			<div>
			<div><img src={sliderF}/></div>
				<h3></h3>
			</div>
			<div>
			<div><img src={sliderS}/></div>
				<h3></h3>
			</div>
			<div>
			<div><img src={slidert}/></div>
				<h3></h3>
			</div>
		</Slider>
	);
}