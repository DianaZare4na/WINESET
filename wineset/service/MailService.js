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


	async sendMail(to, message) {
		await this.transporter.sendMail({
			from: "f11_no-replay@ukr.net",
			to,
			subject: 'Тест nodemailer',
			text: message,
			html:
				`
					<div>
						<h1>${message}</h1>
						 
					</div>
				`
		})
	}
}


module.exports = new MailService();