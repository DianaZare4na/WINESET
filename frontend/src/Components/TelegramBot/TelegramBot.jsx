import React, {useState} from "react";
import './TelegrammBot.css';
import wineGlass from "../pages/pageHome/img/winGlass.png";
const TelegramBot = () => {
	const [body, setBody] = useState("");
	const [name, setName] = useState("");
	const [tel, setTel] = useState("");
	
	const send = () => {
		fetch("/api/sendTelegram",
			{
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					body: body,
					name: name,
					tel: tel,
				})
			})
			.then(res=> {
					console.log("Result: ");
					console.log(res);
					return res.json();
			})
			.then(data =>{
				console.log(data);
			})
			.catch(err=>{
			})
	}
	return(<>
			<div className="telegramm-div" >
				<form className="telegramm-form">
				<h2 className="main-h2 telegramm-h2">связаться с нами</h2>
					<div className="telegramm-form-div">
						<div className="telegramm-form-div-div">
							<input type="text" name="name" id="usName" onChange={(el) => {setName(el.target.value)}} placeholder="Введите своe имя..." /> <br/>
							<input type="text" name="tel" id="usTel" onChange={(el) => {setTel(el.target.value)}} placeholder="Введите свой номер телефона..." /> <br/>
							<textarea type="text" name="body" id="usBody" onChange={(el) => {setBody(el.target.value)}} placeholder="Ваше сообщение..."></textarea><br/>
							<button type="button" className="btn btn-primary telegramm-btn" onClick={() =>send() } >Отправить</button>
						</div>
					</div>
				</form>
				<div className="telegramm-div-img"><img src={wineGlass}/></div>
			</div>
			</>
	);

}
export default TelegramBot;