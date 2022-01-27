import React from "react";

import Storage from "../../../storage"
import {ProductCatalog} from "../../shop/products/ProductCatalog";

import gif from "./img/Rectangle2411.png";
class PageGifts extends Storage{
   componentDidMount() {
		this.fetchProducts();
	}
   render(){
      return(
         <>
            <article className="row no-gutters">
				<section className="col-12">
					<div className="reletiv-div-man">
					<div className="img-div-man"><img src={gif} alt="..."/></div>
						<div className="bacground-div bacground-div-man">
						<div className="bacground-div-text-man bacground-div-text-man-down">
								<p className="special-offer special-offer-down">Sommelier Choice</p>
								<h2 className="glasses-сandles glasses-сandles-down">НЕ УВЕРЕНЫ В ВЫБОРЕ? <br/> МЫ ГОТОВЫ ПОМОЧЬ!</h2>
								<a className="set-wine set-wine-down">ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</a>
							</div>
						</div>
					</div>
				</section>
			   </article>
            <div className="row">
               <ProductCatalog
                     products={this.state.products}
                     putToBasket={this.putToBasket.bind(this)}
               ></ProductCatalog>
            </div>
         </>
      )
   
   }
	
}
export default PageGifts;

