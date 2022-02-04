const nodemailer = require('nodemailer');

class MailService {

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: "smtp.ukr.net",
			port: 465,
			secure: true,
			auth: {
				user: "f11_no-replay@ukr.net",
				pass: "iGfUcB7L9RDPCsL8"
			}
		})
	}     


	async sendMail(to, message, useName) {
		await this.transporter.sendMail({
			from: "f11_no-replay@ukr.net",
			to,
			subject: 'Интернет магазин WINE SET',
			text: message,
			html:
				`
					<div>
						<h1>Приветствуем, ${useName}!</h1>
						<p>Спасибо за обращение!</p>
					</div>
				`
		})
	}
}


module.exports = new MailService();