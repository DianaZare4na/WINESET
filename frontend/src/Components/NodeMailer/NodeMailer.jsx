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
      if (this.state.modal) return this. renderModal();
		return this.renderData();
	}

	renderData() {
		return (
			<>
            <input type="text" name="userName" className="node-mailer-input" onChange={this.onChange.bind(this)} placeholder="Введите ваше имя..." maxlength="20" required/><br/>
				<input type="email" name="mail" className="node-mailer-input" onChange={this.onChange.bind(this)} placeholder="Email" maxlength="50" required/><br/>
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
