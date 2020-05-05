const sgMail = require('@sendgrid/mail');
const { REACT_APP_SENDGRID_API_KEY, REACT_APP_SENDGRID_TO_EMAIL, REACT_APP_SENDGRID_FROM_EMAIL } = process.env;
sgMail.setApiKey(REACT_APP_SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
	const payload = JSON.parse(event.body);

	const body = Object.keys(payload)
		.map((k) => {
			return `${k}: ${payload[k]}`;
		})
		.join('<br><br>');

	const msg = {
		to: REACT_APP_SENDGRID_TO_EMAIL,
		from: REACT_APP_SENDGRID_FROM_EMAIL,
		subject: 'Email from Chain Lightning Website',
		html: body
	};

	try {
		await sgMail.send(msg);

		return {
			statusCode: 200,
			body: 'Message sent'
		};
	} catch (e) {
		return {
			statusCode: e.code,
			body: e.message
		};
	}
};
