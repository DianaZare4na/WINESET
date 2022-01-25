import "./OurContactMenu.css";
import arr from "./img/arr.png";
import phone from "./img/phone.png";
function OurContactMenu() {


	

	return (
		<>
		<div className="phone"><img src={phone} data-toggle="modal" data-target="#dialogOurContactMenu"/></div>
		<div className="divamy">
			<a href="#" className="my" data-toggle="modal" data-target="#dialogOurContactMenu">Связаться с нами <img src={arr}/></a>
		</div>
      <div className="modal fade" id="dialogOurContactMenu" tabindex="-1" aria-labelledby="dialogOurContactMenuLabel" aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="dialogOurContactMenuLabel">Заголовок модального окна</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  Hello
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                  <button type="button" className="btn btn-primary">Сохранить изменения</button>
               </div>
            </div>
         </div>
      </div>
		</>
	);
}

export default OurContactMenu;