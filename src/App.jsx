import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards";
import Error404 from "./components/error404/Error404";
import Login from "./components/Login/Login";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "./redux/actions/actions";

/* eslint-disable */
function App() {
	let location = useLocation();
	let nav = useNavigate();
	const dispatch = useDispatch();

	const EMAIL = "danielospinar@gmail.com";
	const PASS = "Dor943012";

	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);

	const favs = useSelector((state) => state.myFavorites);

	useEffect(() => {
		!access && nav("/");
	}, [access]);

	function login(userData) {
		if (userData.email === EMAIL && userData.password === PASS) {
			setAccess(true);
			nav("/home");
		}
	}

	//console.log(access);
	function lookUpForState(id) {
		let bool = false;
		for (let i = 0; i < characters.length; i++) {
			if (characters[i].id === parseInt(id)) {
				bool = true;
			}
		}
		return bool;
	}

	function onRandomize(id = 0) {
		id = Math.floor(Math.random() * 826) + 1;
		const rid = id.toString();
		axios(`https://rickandmortyapi.com/api/character/${rid}`)
			.then(({ data }) => {
				if (!lookUpForState(rid)) {
					if (data.name) {
						setCharacters((oldChars) => [...oldChars, data]);
					} else {
						window.alert("¡No hay personajes con este ID!");
					}
				} else {
					window.alert("El personaje ya se encuentra en la vista!");
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 404) {
					window.alert("¡No hay personajes con este ID!");
				} else {
					window.alert("Ocurrio un error al buscar el personaje");
				}
			});
	}

	function onSearch(id) {
		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
				if (!lookUpForState(id)) {
					if (data.name) {
						setCharacters((oldChars) => [...oldChars, data]);
					} else {
						window.alert("¡No hay personajes con este ID!");
					}
				} else {
					window.alert("El personaje ya se encuentra en la vista!");
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 404) {
					window.alert("¡No hay personajes con este ID!");
				} else {
					window.alert("Ocurrio un error al buscar el personaje");
				}
			});
	}

	function onClose(id) {
		// event.preventDefault();
		const result = characters.filter((character) => {
			return character.id !== parseInt(id);
		});
		favs?.map((favo) => {
			if (favo.id === id) {
				dispatch(removeFav(id));
			}
		});
		setCharacters([...result]);
	}

	// function onCloseFav(id) {
	// 	const result2 = favorit.filter((character) => {
	// 		return character.id !== parseInt(id);
	// 	});
	// 	setFavorite([...result2]);
	// }

	function handlerSetAccess(access) {
		setAccess(access);
		nav("/");
	}
	//console.log(characters);
	if (location.pathname === "/") {
		return (
			<div className="App">
				<Login login={login} acc={access} />
			</div>
		);
	}
	return (
		<div className="App">
			<NavBar
				onSearch={onSearch}
				onRandomize={onRandomize}
				access={handlerSetAccess}
				acc={access}
			/>
			<Routes>
				{/* <Home characters={characters} onClosed={onClose} /> */}
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/" element={<Login login={login} access={access} />} />
				<Route path="/favorites" element={<Favorites onClose={onClose} />} />
				<Route path="/about" element={<About />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/error404" element={<Error404 />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Cards />
		</div>
	);
}

export default App;
