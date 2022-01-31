import '../body.css';
import './Footer.css';

import Logo from "./img/Logo.png";
import {Link} from "react-router-dom";
import f from "./img/facebook.png";
import t from "./img/teleggamm.png";
import i from "./img/instagram.png";
import tel from "./img/Vector.png";
import loc from "./img/MapPin.png";

function Footer(){

	return(
		<>
			<div className="logoimgfooter col-8 offset-2 col-sm-5 offset-sm-1 col-md-3 offset-md-0 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1">
				<div className="logo">
					<Link to="/"><img src={Logo}/></Link>
				</div>
			</div>
			<div className="divulfooterfirst divfooter col-10 offset-1 col-sm-5 offset-sm-1 col-md-3  offset-md-0 col-lg-3 offset-lg-0 col-xl-3 offset-xl-0">
				<ul>
					<li>Подарочные наборы</li>
					<li>Вино и алкоголь</li>
					<li>Деликатесы</li>
					<li>Бокалы и свечи</li>
				</ul>
			</div>
			<div className="divulfootersecond col-10 offset-1 col-sm-5  offset-sm-1  col-md-3 offset-md-0 col-lg-3 offset-lg-0 col-xl-3 offset-xl-0">
				<ul>
					<li>Политика приватности</li>
					<li>Пользовательское соглашение</li>
				</ul>
			</div>
			<div className="divulfooterthird col-10 offset-1 col-sm-5 offset-sm-1  col-md-3 offset-md-0 col-lg-3 offset-lg-0 col-xl-3 offset-xl-0">
				<ul>
					<li><a href="tel:+380681477386"><img src={tel} alt="tel"/>+380681477386</a></li>
					<li><a href="#"><img  src={loc} alt="loc"/> Николаев, ул. Лягина 1</a>​</li>
					<li className="footer-social">
						<a href="https://www.facebook.com/diana.zariechnaya"><img src={f} alt="fecebook"/></a>
						<a href="https://t.me/DianaZariechna"><img src={t} alt="telegramm"/></a>
						<a href="https://www.instagram.com/dianazarechnaia/"><img src={i} alt="instagram"/></a>
					</li>
               <li><button className="btn btn-primary telegramm-btn">Связаться с нами</button></li>
				</ul>
				
			</div>
			<div className="col-12 divfooterlast"><p>&copy; 2022г.</p></div>
		</>
	);
}
export default Footer;