import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import '../../pages/pageHome/sliderSlickGifts.css';
import './productCatalog.css';
import {ProductCatalogItem} from "./ProductCatalogItem";
import Slider from "react-slick";
export function ProductCatalog ({products, putToBasket, putToFavorite}) {
   const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
      speed: 3500,
      autoplaySpeed: 3500,
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
				 slidesToShow: 2,
				 slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 2
			  }
			}
		 ]
		
	};

   useEffect(() => {
   }, []);

   return (
      <Slider className=" col-10 offset-1 product-catalog" {...settings}>
         {products.map((p) => 
         <ProductCatalogItem 
            key={p.id} 
            product={p} 
            putToBasket={putToBasket} 
            putToFavorite={putToFavorite} id="productGifts"
         />
         )}
      </Slider>
   );
}