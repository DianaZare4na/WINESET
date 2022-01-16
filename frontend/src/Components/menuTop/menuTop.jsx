import React from "react";
import {Link} from "react-router-dom";

function MenuTop(){

	return(
		<>
		<nav className="navbar navbar-expand-lg navbar-dark probootstrap_navbar" id="probootstrap-navbar">
				<div className="container">
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
		</>
	);

} 
export default MenuTop;