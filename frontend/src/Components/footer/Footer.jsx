import '../body.css';
import './Footer.css';
import Logo from "./img/Logo.png";
import {Link} from "react-router-dom";
function Footer(){

	return(
		<>
			<div className="col-2 logoimgfooter col-sm-2 col-md-3 col-lg-3 col-xl-3">
				<div className="logo">
					<Link to="/"><img src={Logo}/></Link>
				</div>
			</div>
			<div className="col-2 divulfooterfirst divfooter col-sm-2 col-md-2 col-lg-2 col-xl-2">
				<ul>
					<li>Подарочные наборы</li>
					<li>Вино и алкоголь</li>
					<li>Деликатесы</li>
					<li>Бокалы и свечи</li>
				</ul>
			</div>
			<div className="col-2 divulfootersecond divfooter col-sm-2 col-md-3 col-lg-2 col-xl-2">
				<ul>
					<li>Политика приватности</li>
					<li>Пользовательское соглашение</li>
				</ul>
			</div>
			<div className="col-2 divulfooterthird col-sm-2 col-md-3 col-lg-5  col-xl-5">
				<ul>
					<li><a>1235123123, 15121231231</a></li>
					<li><a>Москва, проспект Василия Порика, 13</a>​</li>
					<li>
						<a></a>
						<a></a>
						<a></a>
					</li>
				</ul>
				<button className="btn">Связаться с нами</button>
			</div>
			<div className="col-12 divfooterlast"><p>сегодня у нас купили 21 товар!</p></div>
		</>
	);
}
export default Footer;