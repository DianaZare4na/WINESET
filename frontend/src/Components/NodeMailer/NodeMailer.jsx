import React, { Component } from 'react'

import './NodeMailer.css';

export default class NodeMailer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: true,
         modal: false,
        
			mailer_body: {
				mail: "",
            userName: "",
				message: "",
			}
		}
	}

	onChange(el) {
		// тут формируется оперативная реакция системы на ввод пользователя
		const mailer_body = this.state.mailer_body;
		mailer_body[el.target.name] = el.target.value;
		this.setState({ mailer_body });
      
	}

	send() {
      if (this.state.mailer_body.mail.length == 0) {
			const mail = document.getElementById("email");
			mail.style.border = "1px solid red";
			mail.value = "Пожалуйста введите почту";
			return;
		  } 
        if (this.state.mailer_body.mail.length > 2) {
			const mail = document.getElementById("email");
			mail.style.border = "1px solid green";
		  } 
		if(this.state.mailer_body.name == 0) {
			const name = document.getElementById("name");
			name.style.border = "1px solid red";
			name.value = "Пожалуйста введите имя";
			return;
		 } 
       if(this.state.mailer_body.name > 2) {
			const name = document.getElementById("name");
			name.style.border = "1px solid green";
		 } 
	  
		this.setState({ isLoaded: false })
		fetch("/api/sendmail/",
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(this.state.mailer_body)
			}
		)
			.then(res => {
				console.log("Result:", res);
				return res.json();
			})
			.then(data => {
				console.log(data);
				this.setState({ isLoaded: true, modal: true })
			})
			.catch(err => {
				this.setState({ error: err, isLoaded: true })
			})
	}

	render() {
		if (this.state.error) return this.renderError();
		if (!this.state.isLoaded) return this.renderLoading();
      if (this.state.modal) return this.renderModal();
		return this.renderData();
	}

	renderData() {
		return (
			<>
            <input  type="text" id="name" name="userName" className="node-mailer-input" onChange={this.onChange.bind(this)} placeholder="Введите ваше имя..." maxLength="20" required/><br/>
				<input  type="email" id="email" name="mail" className="node-mailer-input" onChange={this.onChange.bind(this)} placeholder="Email" maxLength="50" required/><br/>
				<textarea type="text" name="message" className="page-checkout-textarea" onChange={this.onChange.bind(this)} placeholder="Введите ваше сообщение"></textarea><br/>
				<div className="btn-node-mailer">
               <button type="button" className="btn  btn-node-mailer" onClick={this.send.bind(this)}>Отправить</button>
            </div>
			</>
		);
	}

	renderLoading() {
		return (
			<div className="d-flex justify-content-center">
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		)
	}
   renderModal(){
      return(
         <>
         <div className='render-modal'>
            <p>Сообщение отправлено!</p>
            <h3>Спасибо за обращение!</h3>
         </div>
         </>

      );
   }
	renderError() {
		return (
			<div className="alert alert-danger" role="alert">
				Error: {this.state.error.message}
			</div>
		);
	}
}
