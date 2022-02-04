import React, {useState} from "react";
import {Link} from "react-router-dom";
import './menuTop.css';

import Sidebar from "./Sidebar/Sidebar";

function MenuTop(){

	return(
		<>
         <div className="col-6 div-navbar">
            <div className="slidebar"><Sidebar/></div>
            <nav className="navbar navbar-expand-lg navbar-dark probootstrap_navbar" id="probootstrap-navbar">
                  <div>
                     <div className="collapse navbar-collapse" id="probootstrap-menu">
                     <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Главная</Link></li>
                        <li className="nav-item dropdown">
                           <div className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" ><Link to="/gifts">Подарочные наборы</Link></div>
                           <div className="dropdown-menu">
                              <Link className="dropdown-item" to="/gifts">Действие</Link>
                              <Link className="dropdown-item" to="/gifts">Действие</Link>
                              <Link className="dropdown-item" to="/gifts">Действие</Link>
                           </div>
                        </li>
                        <li className="nav-item dropdown">
                           <div className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="/wineandalkohol"><Link to="/wineandalkohol">Вино и алкоголь</Link></div>
                           <div className="dropdown-menu">
                              <Link className="dropdown-item" to="/wineandalkohol/wine">Вино</Link>
                              <Link className="dropdown-item" to="/wineandalkohol/wiski">Виски</Link>
                              <Link className="dropdown-item" to="/wineandalkohol/vodka">Водка</Link>
                           </div>
                        </li>
                        <li className="nav-item dropdown">
                           <div className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><Link to="/delicacies">Деликатесы</Link></div>
                           <div className="dropdown-menu">
                              <Link className="dropdown-item" to="/delicacies/jamon">Хомон</Link>
                              <Link className="dropdown-item" to="/delicacies/cheese">Сыр</Link>
                              <Link className="dropdown-item" to="/delicacies/chocolate">Шоколад</Link>
                           </div>
                        </li>
                        <li className="nav-item dropdown">
                           <div className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><Link to="/glassesandcandles">Бокалы и свечи</Link></div>
                           <div className="dropdown-menu">
                              <Link className="dropdown-item" to="/glassesandcandles/candles">Свечи</Link>
                              <Link className="dropdown-item" to="/glassesandcandles/glass">Бокалы</Link>
                           </div>
                        </li>
                     </ul>
                     </div>
                  </div>
            </nav>
         </div>
		</>
	);

} 
export default MenuTop;