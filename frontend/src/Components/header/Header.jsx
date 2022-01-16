import '../body.css';
import './headerStyle.css';
import Logo from "./img/Logo.png";
import SearchBar from './SearchBar';
import Checkout from './Checkout';
import OurContactMenu from './OurContactMenu';
import {Link} from "react-router-dom";
function Header(){

	return(
		<>
			<div className="col-4 logoimg col-sm-4 col-md-3 col-lg-3 col-xl-2">
				<div className="logo">
					<Link to="/"><img src={Logo}/></Link>
				</div>
			</div>
			<div className="col-8 searchbar col-sm-6 col-md-5 col-lg-5 col-xl-4">
				<SearchBar/>
			</div>
			<div className="col-0 colcheckout col-sm-0 col-md-3  col-lg-2  col-xl-2">
				<Checkout/>
			</div>
			<div className="col-0 ourcontactmenu col-sm-2 col-md-1 col-lg-2  col-xl-2">
				<OurContactMenu/>
			</div>
		</>
	);
}
export default Header;