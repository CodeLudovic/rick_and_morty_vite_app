/*eslint-disable*/

export function validate(userData) {
	const regexEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
	const passTest = /(?=.*?[0-9])/;

	let errors = {};
	if (!regexEmail.test(userData.email)) {
		errors.email = "Debe ser un correo valido";
	}
	if (!userData.email != "") {
		errors.email = "Nombre de usuario no puede estar vacio";
	}
	if (userData.email.length > 35) {
		errors.email = "No puede contener mas de 35 caracteres";
	}
	if (!passTest.test(userData.password)) {
		errors.password = "Password debe contener al menos 1 numero";
	}
	if (userData.password.length < 6 || userData.password.length > 10) {
		errors.password = "Password debe contener entre 6 y 10 caracteres";
	}

	return errors;
	// return console.log(`${regex}`);
}
