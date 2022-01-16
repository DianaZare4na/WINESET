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
			<div className="col-2 logoimg col-sm-5 col-md-3 col-lg-3 col-xl-2">
				<div className="logo">
					<Link to="/"><img src={Logo}/></Link>
				</div>
			</div>
			<div className="col-6 searchbar col-sm-5 col-md-4 col-lg-4 col-xl-4">
				<SearchBar/>
			</div>
			<div className="col-2 colcheckout col-sm-0 col-md-3 col-lg-3 col-xl-2">
				<Checkout/>
			</div>
			<div className="col-2 ourcontactmenunone col-sm-0 col-md-2 col-lg-2  col-xl-2">
				<OurContactMenu/>
			</div>
		</>
	);
}
export default Header;