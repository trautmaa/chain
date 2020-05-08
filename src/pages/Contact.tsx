import React from 'react';

const Contact = () => {
	const formDefault = {
		name: '',
		email: '',
		message: ''
	};

	const [ formState, setFormState ] = React.useState(formDefault);
	const [ submitted, setSubmitted ] = React.useState(false);
	const [error, setError] = React.useState()

	const onChange = (e: any) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};
	const submitForm = async (e: any) => {
		e.preventDefault();

		try {
			const response = await fetch('/.netlify/functions/send-contact-email', {
				method: 'POST',
				body: JSON.stringify(formState)
			});

			if (!response.ok) {
				//not 200 response
				return;
			}

			// Success
			setFormState(formDefault);
			setSubmitted(true);

		} catch (e) {
			// Error
			setError(e);
		}
	};
	return (
		<div className="text-content">
			{!submitted &&
			<>
				<p style={{ textAlign: 'center' }}>
					Drop us an email with your contact information, and we'll try to get back to you soon.
				</p>
				<label>Name:</label>
				<br />
				<input onChange={onChange} type="text" id="name" name="name" />
				<br />
				<label>Email:</label>
				<br />
				<input onChange={onChange} type="text" id="email" name="email" />
				<br />
				<label>Message:</label>
				<br />
				<textarea onChange={onChange} id="message" name="message" rows={20} />
				<br />
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<button onClick={submitForm}>Send Message</button>
				</div>
			</>
			}
			{error && <p style={{ textAlign: 'center' }}>Oops, something went wrong. Please try again.</p>}
			{submitted && <p>Thank you for your email. We'll try to get back to you soon.</p>}
		</div>
	);
};

export default Contact;
