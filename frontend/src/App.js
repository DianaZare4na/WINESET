import * as React from "react";
import './Components/body.css';
import './fonts/fonts.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {ProductCard} from "./Components/shop/product/ProductCard/ProductCard";
import {Filter} from "./Components/shop/product/Filter/Filter";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import MenuTop from "./Components/menuTop/menuTop";
import PageHome from "./Components/pages/pageHome/pageHome";
import WineAndAlcohol from "./Components/pages/pageWineAndAlcohol";
import PageGifts from "./Components/pages/pageGifts";
import Delicacies from "./Components/pages/pageDelicacies";
import GlassesAndCandles from "./Components/pages/pageGlassesAndCandles";
import Storage from "./storage";
import {ProductCatalog} from "./Components/shop/products/ProductCatalog";
import {BasketWidget} from "./Components/shop/basket/BasketWidget";
import {BasketAll} from "./Components/shop/basket/BasketAll";
import {Favorite} from "./Components/shop/favorite/favorite";
import PageCheckout from "./Components/pages/pageCheckout/pageCheckout";
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
                  <BasketWidget basket={this.state.basket}></BasketWidget>
                  <BasketAll products={this.state.basket}
                        removeFromBasket={this.removeFromBasket.bind(this)}
                  ></BasketAll>
					</div>

					{/* <Filter></Filter> */}
					<Routes>
						<Route path="/product/:slug/:id" element={<ProductCard/>}/>
						<Route path="/" element={<PageHome/>}/>
						<Route path="/wineandalkohol" element={<WineAndAlcohol/>}/>
						<Route path="/gifts" element={<PageGifts/>}/>
						<Route path="/delicacies" element={<Delicacies/>}/>
						<Route path="/glassesandcandles" element={<GlassesAndCandles/>}/>
                  <Route path="/checkout" element={<PageCheckout/>}/>
                  <Route path="/basket" element={<BasketAll/>}/>
                  
					</Routes>
					{/* <Routes>
                    <PageError error={"404 not found"}></PageError>
              </Routes> */}
              <div>
              
              <hr />
              <ProductCatalog
                  products={this.state.products}
                  putToBasket={this.putToBasket.bind(this)}
              ></ProductCatalog>

             
          </div>
					<footer className="row bagfooter">
						<Footer></Footer>
					</footer>
				</div>
			</BrowserRouter>

		);
	}
}

export default App;
