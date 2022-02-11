import * as React from "react";
import './Components/body.css';
import './fonts/fonts.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PageError from "./Components/pages/pageError";
import { ProductCard } from "./Components/shop/product/ProductCard/ProductCard";
import { Filter } from "./Components/shop/product/Filter/Filter";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import MenuTop from "./Components/menuTop/menuTop";
import PageHome from "./Components/pages/pageHome/pageHome";
import WineAndAlcohol from "./Components/pages/pageWineAndAlcohol";
import PageGifts from "./Components/pages/pageGifts/pageGifts";
import Delicacies from "./Components/pages/pageDelicacies/pageDelicacies";
import GlassesAndCandles from "./Components/pages/pageGlassesAndCandles";
import Storage from "./storage";
import { BasketWidget } from "./Components/shop/basket/BasketWidget";
import { BasketAll } from "./Components/shop/basket/BasketAll";
import { BasketBig } from "./Components/shop/basket/BasketBig";
import { Favorite } from "./Components/shop/favorite/favorite";
import { FavoriteAll } from "./Components/shop/favorite/FavoriteAll";
import PageCheckout from "./Components/pages/pageCheckout/pageCheckout";
import Instagram from "./Components/pages/instagram/Instagram";
import Wine from "./Components/pages/wine/Wine";
import Whiskey from "./Components/pages/whiskey/Whiskey";
import Glass from "./Components/pages/glass/Glass";
import GiftBasket from "./Components/pages/giftBaskets/GiftBasket";
import Candles from "./Components/pages/candles/Candles";
import Jamon from "./Components/pages/jamon/Jamon";
import Cheese from "./Components/pages/cheese/Cheese";
import Chocolate from "./Components/pages/chokolate/Chocolate";
class App extends Storage {

   componentDidMount() {
      this.fetchProducts();
   }
  
   render() {
      return (
         <BrowserRouter>
            <div className="container-fluid">
               <header className="row bag align-items-center">
                  <Header></Header>
               </header>
               
               <div className="row align-items-center row-top-menu">
                  <MenuTop></MenuTop>
                  <Favorite favorite={this.state.favorite}></Favorite>
                  <FavoriteAll products={this.state.favorite}
                     removeFromFavorite={this.removeFromFavorite.bind(this)}

                  ></FavoriteAll>
                  <BasketWidget basket={this.state.basket}></BasketWidget>
                  <BasketAll products={this.state.basket}
                     removeFromBasket={this.removeFromBasket.bind(this)}
                  ></BasketAll>
               </div>
               {/* <Filter></Filter> */}
               <Routes>
                  <Route path="/product/:slug/:id" element={<ProductCard  putToBasket={this.putToBasket.bind(this)}></ProductCard>} />
                  <Route path="/" element={<PageHome />} />
                  <Route path="/wineandalkohol" element={<WineAndAlcohol />} />
                  <Route path="/gifts" element={<PageGifts
                     products={this.state.products}
                     putToBasket={this.putToBasket.bind(this)}
                     putToFavorite={this.putToFavorite.bind(this)} ></PageGifts>} />

                  <Route path="/wineandalkohol/wine" element={<Wine
                       
                        putToBasket={this.putToBasket.bind(this)}
                        putToFavorite={this.putToFavorite.bind(this)}></Wine>} />

                  <Route path="/wineandalkohol/whiskey" element={<Whiskey
                        
                        putToBasket={this.putToBasket.bind(this)}
                        putToFavorite={this.putToFavorite.bind(this)}></Whiskey>} />

                  <Route path="/glassesandcandles/glass" element={<Glass
                       
                        putToBasket={this.putToBasket.bind(this)}
                        putToFavorite={this.putToFavorite.bind(this)}></Glass>} />

                  <Route path="/gifts/Gift" element={<GiftBasket
                        
                        putToBasket={this.putToBasket.bind(this)}
                        putToFavorite={this.putToFavorite.bind(this)}></GiftBasket>} />

                  <Route path="/glassesandcandles/candles" element={<Candles
                        
                        putToBasket={this.putToBasket.bind(this)}
                        putToFavorite={this.putToFavorite.bind(this)}></Candles>} />

                  <Route path="/delicacies/jamon" element={<Jamon
                       
                        putToBasket={this.putToBasket.bind(this)}
                        putToFavorite={this.putToFavorite.bind(this)}></Jamon>} />

                  <Route path="/delicacies/cheese" element={<Cheese
                        
                        putToBasket={this.putToBasket.bind(this)}
                        putToFavorite={this.putToFavorite.bind(this)}></Cheese>} />
                  
                  <Route path="/delicacies/chocolate" element={<Chocolate
                       
                        putToBasket={this.putToBasket.bind(this)}
                        putToFavorite={this.putToFavorite.bind(this)}></Chocolate>} />

                  <Route path="/delicacies" element={<Delicacies />} />
                  <Route path="/glassesandcandles" element={<GlassesAndCandles />} />
                  <Route path="/checkout" element={<PageCheckout />} />
                  <Route path="/basket" element={<BasketBig 
                        products={this.state.basket}
                        removeFromBasket={this.removeFromBasket.bind(this)} />} />
                  <Route path="*" element={<PageError error={"404 not found"}></PageError>}/>
               </Routes>
               <Instagram></Instagram>
               <footer className="row bagfooter">
                  <Footer></Footer>
               </footer>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
