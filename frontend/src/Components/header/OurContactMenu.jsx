import "./OurContactMenu.css";
import arr from "./img/arr.png";
import phone from "./img/phone.png";
function OurContactMenu() {


	

	return (
		<>
		<div className="phone"><img src={phone} data-toggle="modal" data-target="#exampleModal"/></div>
		<div className="divamy">
			<a href="#" className="my" data-toggle="modal" data-target="#exampleModal">Связаться с нами <img src={arr}/></a>
		</div>
		
		
		<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalLabel">Заголовок модального окна</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					...
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