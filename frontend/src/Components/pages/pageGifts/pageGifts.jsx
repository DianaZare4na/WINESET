import React from "react";
import './pageGifts.css';

import Storage from "../../../storage"
import {ProductCatalog} from "../../shop/products/ProductCatalog";


import gif from "./img/gif.png";
import gif1 from "./img/gif1.png";
import gif2 from "./img/gif2.png";
import gif3 from "./img/gif3.png";
import fir from "./img/fir.png";
//import { Favorite } from "../../shop/favorite/favorite";
//import { FavoriteAll } from "../../shop/favorite/FavoriteAll";
//import { BasketAll } from "../../shop/basket/BasketAll";
//import { BasketWidget } from "../../shop/basket/BasketWidget";

function PageGifts({products, putToBasket, putToFavorite}){
   
   
      return(
         <>
            {/*<Favorite favorite={this.state.favorite}></Favorite>
            <FavoriteAll products={this.state.favorite}
                  removeFromFavorite={this.removeFromFavorite.bind(this)}
            ></FavoriteAll>
            <BasketWidget basket={this.state.basket}></BasketWidget>
            <BasketAll products={this.state.basket}
                  removeFromBasket={this.removeFromBasket.bind(this)}
            ></BasketAll>*/}
            <article className="row no-gutters">
				<section className="col-12">
					<div className="reletiv-div-man">
					<div className="page-gifts-img"><img src={gif} alt="..."/></div>
						<div className="bacground-div bacground-div-man">
						<div className="bacground-div-text-man bacground-div-text-man-down">
								<p className="special-offer special-offer-down">Special offer</p>
								<h2 className="glasses-сandles glasses-сandles-down">glasses <br/>&#38; сandles</h2>
								<a className="set-wine page-gifts-set-wine">СОЗДАЙ СВОЙ ВИННЫЙ СЕТ</a>
							</div>
						</div>
					</div>
				</section>
			   </article>
            <article className="row no-gutters page-gifts-row2">
               <h2 className="main-h2 page-gifts-h2 col-4 offset-1">подарочные корзины</h2>
               <section className="col-2 offset-1">
                  <p className="page-gifts-p">Форма чаши каждого бокала уникальна,
                  благодаря этому вы можете ощутить самые тонкие нюансы вкуса
                  своих любимых напитков.</p>
				   </section>
               <section className="col-2 offset-1">
                  <p className="page-gifts-p">Бокалы вы можете приобрести как отдельно,
                  так и в красивой подарочной упаковке.</p>
				   </section>
               <section className="col-10 offset-1 page-gifts-col-gif">
                  <div className="page-gifts-gif">
                     <div className="page-gifts-gif-div-img">
                        <img src={gif1}/>
                     </div>
                     <p className="page-gifts-gif-div-img-p">С бокалами</p>
                  </div>
                  <div className="page-gifts-gif">
                     <div className="page-gifts-gif-div-img">
                        <img src={gif2}/>
                     </div>
                     <p className="page-gifts-gif-div-img-p">С деликатесами</p>
                  </div>
                  <div className="page-gifts-gif">
                     <div className="page-gifts-gif-div-img">
                        <img src={gif3}/>
                     </div>
                     <p className="page-gifts-gif-div-img-p">Конструктор</p>
                  </div>
               </section>
            </article>
            <article className="row no-gutters page-gifts-row3">
				   <h2 className="col-1 offset-1 main-h2 page-gifts-h2">Свечи</h2>
               <section className="w-100"></section>
               <section className="col-4 offset-1">
                  <div className="page-gifts-gif-div-img">
                     <img src={fir}/>
                  </div>
               </section>
               <section className="col-2 offset-1">
               <p className="page-gifts-p">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.</p>
				   </section>
               <section className="col-2 offset-1">
                  <p className="page-gifts-p">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco labo</p>
                  <div className="div-delivery page-gifts-div-delivery">
                     <a className="a-delivery page-gifts-a-delivery">ПОДРОБНЕЕ О СВЕЧАХ</a>
                  </div>
				   </section>
			   </article>
            <article className="row no-gutters page-gifts-row3">
				   <h2 className="col-4 offset-1 main-h2 page-gifts-h2">Рекомендуемые товары</h2>
			   </article>
            <div className="row">
               <ProductCatalog
                     products={products}
                     putToBasket={putToBasket}
                     putToFavorite={putToFavorite}
               ></ProductCatalog>
            </div>
         </>
      )
   
   }
export default PageGifts;

