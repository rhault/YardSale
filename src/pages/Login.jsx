import React, {useRef} from 'react';
import '@styles/Login.scss';

const Login = () => {
	const form = useRef(null)

	const haddleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);

		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
	}
	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Log in" className="primary-button login-button" onClick={haddleSubmit} />
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button" >Sign up</button>
			</div>
		</div>
	);
}

export default Login;
