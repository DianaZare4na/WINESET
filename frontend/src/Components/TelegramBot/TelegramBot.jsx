import React, {useState, useEffect} from "react";
import './TelegrammBot.css';
import wineGlass from "../pages/pageHome/img/winGlass.png";
//import ShowAlert from "../../Components/shop/basket/ShowAlert";
import ShowModal from "../modals/showModal"
import ModalTelegramm from "../modals/modalTelegramm";

const TelegramBot = () => {
	const [body, setBody] = useState("");
	const [name, setName] = useState("");
	const [tel, setTel] = useState("");
   const [telDirty, setTelDirty] = useState(false);
	const [nameDirty, setNameDirty] = useState(false);
   const [telError, setTelError] = useState("Это поле не может быть пустым");
	const [nameError, setNameError] = useState("Это поле не может быть пустым");
   const [formValid, setformValid] = useState(false);
   const [showAlert, setShowAlert] = useState(null);

   useEffect(() =>{
      if(nameError || telError){
         setformValid(false)
      } else {
         setformValid(true)
      }
   },[nameError, telError])
   const telHandler = (e) =>{
      setTel(e.target.value)
      const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      if(!re.test(Number(e.target.value))){
         setTelError("Некорректный номер")
      } else{
         setTelError("")
      }
   }
   const nameHandler = (e) =>{
      setName(e.target.value)
      if(e.target.value.length < 2 || e.target.value.length > 30){
         setNameError("Имя должно быть больше дву символов и меньше тридцати")
         if(!e.target.value){
            setNameError("Это поле не может быть пустым")
         }
      } else{
         setNameError("")
      }
   }
   const blurHandler = (e) => {
      switch (e.target.name){
         case "name":
            setNameDirty(true)
            break
         case "tel":
            setTelDirty(true)
            break
      }
   }
	 
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
            setShowAlert(<ModalTelegramm/>);
            setBody("")
	         setName("")
	         setTel("")
			})
			.catch(err=>{
			})
	}
   const hideAlert = () => setShowAlert(null);

	return(<>
			<div className="telegramm-div" >
				<form className="telegramm-form">
				<h2 className="main-h2 telegramm-h2">связаться с нами</h2>
					<div className="telegramm-form-div">
						<div className="telegramm-form-div-div">
                     {showAlert && <ShowModal text={showAlert} hideAlert={hideAlert} />}
                     {(nameDirty && nameError) && <div style={{color: "red"}}>{nameError}</div>}
							<input type="text" name="name" id="usName" value={name} onBlur={e => blurHandler(e)} onChange={e => nameHandler(e)}  placeholder="Введите своe имя..."/> <br/>
                     {(telDirty && telError) && <div style={{color: "red"}}>{telError}</div>}
							<input type="text" name="tel" id="usTel" value={tel} onBlur={e => blurHandler(e)} onChange={e => telHandler(e)}  placeholder="Введите свой номер телефона..."/> <br/>
							<textarea type="text" name="body" id="usBody" onChange={el => {setBody(el.target.value)}} placeholder="Ваше сообщение..."></textarea><br/>
							<button disabled={!formValid} type="button" className="btn btn-primary telegramm-btn" onClick={() =>send() } >Отправить</button>
						</div>
					</div>
				</form>
				<div className="telegramm-div-img"><img src={wineGlass}/></div>
			</div>
			</>
	);

}
export default TelegramBot;