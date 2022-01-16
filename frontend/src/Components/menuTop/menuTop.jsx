import React from "react";
import {Link} from "react-router-dom";
import './menuTop.css';
import ShoppingCart from "../shoppingCart/shoppingCart";
import Favorite from "../favorite/favorite";
function MenuTop(){

	return(
		<>
		<div className="col-6 div-navbar">
		<nav className="navbar navbar-expand-lg navbar-dark probootstrap_navbar" id="probootstrap-navbar">
				<div>
					<div className="collapse navbar-collapse" id="probootstrap-menu">
						<ul className="navbar-nav ">
								<li className="nav-item"><Link className="nav-link" to="/">Главная</Link></li>
								<li class="nav-item dropdown">
									<Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="/gifts">Подарочные наборы</Link>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Действие</a>
										<a class="dropdown-item" href="#">Другое действие</a>
										<a class="dropdown-item" href="#">Что-то еще здесь</a>
									</div>
								</li>
								<li className="nav-item dropdown">
									<Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="/wineandalkohol">Вино и алкоголь</Link>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Действие</a>
										<a class="dropdown-item" href="#">Другое действие</a>
										<a class="dropdown-item" href="#">Что-то еще здесь</a>
									</div>
								</li>
								<li className="nav-item dropdown">
									<Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="/delicacies">Деликатесы</Link>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Действие</a>
										<a class="dropdown-item" href="#">Другое действие</a>
										<a class="dropdown-item" href="#">Что-то еще здесь</a>
									</div>
								</li>
								<li className="nav-item dropdown">
									<Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="/glassesandcandles">Бокалы и свечи</Link>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Действие</a>
										<a class="dropdown-item" href="#">Другое действие</a>
										<a class="dropdown-item" href="#">Что-то еще здесь</a>
									</div>
								</li>
								<li className="nav-item"></li>
								
						</ul>
					</div>
				</div>
		</nav>
		</div>
		<Favorite></Favorite>
		<ShoppingCart></ShoppingCart>
		</>
	);

} 
export default MenuTop;