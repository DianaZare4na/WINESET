import * as React from "react";
import './Components/body.css';
import './fonts/fonts.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {ProductCard} from "./Components/product/ProductCard/ProductCard";
import {Filter} from "./Components/product/Filter/Filter";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import MenuTop from "./Components/menuTop/menuTop";
import PageHome from "./Components/pages/pageHome/pageHome";
import WineAndAlcohol from "./Components/pages/pageWineAndAlcohol";
import PageGifts from "./Components/pages/pageGifts";
import Delicacies from "./Components/pages/pageDelicacies";
import GlassesAndCandles from "./Components/pages/pageGlassesAndCandles";

function App() {
	return (
		<BrowserRouter>
		<div className="container-fluid">
            <header className="row bag align-items-center"><Header></Header> </header>
				<MenuTop></MenuTop>
				{/* <Filter></Filter> */}
            <Routes>
               <Route path="/product/:slug/:id" element={<ProductCard />} />
           			<Route path="/" element={<PageHome />}/>
             		<Route path="/wineandalkohol" element={<WineAndAlcohol />}/>
              		<Route path="/gifts" element={<PageGifts />}/>
						<Route path="/delicacies" element={<Delicacies />}/>
						<Route path="/glassesandcandles" element={<GlassesAndCandles />}/>
              </Routes>
              {/* <Routes>
                    <PageError error={"404 not found"}></PageError>
              </Routes> */}
				<footer className="row bagfooter"><Footer></Footer></footer>
			</div>
        </BrowserRouter>
		
	);
}

export default App;
