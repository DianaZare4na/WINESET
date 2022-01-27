import "./OurContactMenu.css";

import arr from "./img/arr.png";
import phone from "./img/phone.png";
import inst from "./img/Vector.png";
import tel from "./img/Vector1.png";
import fac from "./img/Vector3.png";
function OurContactMenu() {


	

	return (
		<>
		<div className="phone"><img src={phone} data-toggle="modal" data-target="#dialogOurContactMenu"/></div>
		<div className="divamy">
			<a href="#" className="my" data-toggle="modal" data-target="#dialogOurContactMenu">Связаться с нами <img src={arr}/></a>
		</div>
      <div className="modal fade" id="dialogOurContactMenu" tabindex="-1" aria-labelledby="dialogOurContactMenuLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-our-contect">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="dialogOurContactMenuLabel">Контакты</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body modal-body-our-contact">
                  <div className="modal-body-our-contact-div">
                     <h3 className="modal-body-our-contact-h3">Адрес: <span>г. Москва, ул. Нарвская, 1а, к.2</span></h3>
                     <h3 className="modal-body-our-contact-h3">Телефон: <span><a href="tel:+380681477386">+380681477386</a></span></h3>
                     <h3 className="modal-body-our-contact-h3">Email: <span><a href="mailto:dianazare4na00@gmail.com">dianazare4na00@gmail.com</a></span></h3>
                  </div>
                  <div>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.32832621304!2d31.990545815608726!3d46.974885479147886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5c974a868e521%3A0xeae64eafb99934a2!2z0JrQvtC80L_RjNGO0YLQtdGA0L3QsNGPINCQ0LrQsNC00LXQvNC40Y8g0KjQkNCTINCd0LjQutC-0LvQsNC10LI!5e0!3m2!1sru!2sua!4v1641672417245!5m2!1sru!2sua" className="iframe-ourcontact" allowfullscreen="" loading="lazy"></iframe>
                  </div>
                  <div className="modal-body-our-contact-social">
                     <a><img src={inst} alt="" /></a>
                     <a><img src={tel} alt="" /></a>
                     <a><img src={fac} alt="" /></a>
                  </div>
               </div>
               <div className="modal-footer modal-body-our-contact-modal-footer">
                  <button type="button" className="btn btn-primary">Узнать больше</button>
               </div>
            </div>
         </div>
      </div>
		</>
	);
}

export default OurContactMenu;