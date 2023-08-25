import { useState } from "react";
import myImage from "../../assets/img/rick-and-morty-6344804_1280.png";
import { validate } from "../../helpers/validation";
/* eslint-disable */
function Login({ login, access }) {
	//console.log(login);
	const [errors, setErrors] = useState({});
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	function handleChange(event) {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});

		setErrors(
			validate({ ...userData, [event.target.name]: event.target.value })
		);
	}

	function handleSubmit(event) {
		event.preventDefault();
		login(userData);
	}
	//console.log(access);
	console.log(errors);
	return (
		<div className="login-container">
			<form className="form-login" onSubmit={handleSubmit}>
				<img className="form-image" src={myImage}></img>
				<label className="form-email-label">EMAIL</label>
				<input
					placeholder="Email..."
					type="email"
					name="email"
					value={userData.name}
					className="form-inputs"
					onChange={handleChange}
				/>
				{<span className="form-danger">{errors.email}</span>}
				<label style={{ paddingTop: "10px" }}>PASSWORD</label>
				<input
					type="password"
					name="password"
					className="form-inputs"
					value={userData.password}
					onChange={handleChange}
				/>
				{<span className="form-danger">{errors.password}</span>}
				{Object.keys(errors).length === 0 && (
					<button type="submit" className="form-button">
						Submit
					</button>
				)}
			</form>
		</div>
	);
}

export default Login;
