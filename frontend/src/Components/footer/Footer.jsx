import '../body.css';
import './Footer.css';
import Logo from "./img/Logo.png";
import {Link} from "react-router-dom";
import f from "./img/facebook.png";
import t from "./img/teleggamm.png";
import i from "./img/instagram.png";
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
						<a><Link to="/"><img src={f}/></Link></a>
						<a><Link to="/"><img src={t}/></Link></a>
						<a><Link to="/"><img src={i}/></Link></a>
					</li>
				</ul>
				<button className="btn">Связаться с нами</button>
			</div>
			<div className="col-12 divfooterlast"><p>&copy; 2022г.</p></div>
		</>
	);
}
export default Footer;