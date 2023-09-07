/* eslint-disable */
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "./redux/actions/actions";
import axios from "axios";

import "./App.css";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards";
import Error404 from "./components/error404/Error404";
import Login from "./components/Login/Login";
import Favorites from "./components/Favorites/Favorites";
import { lookUpForState } from "./helpers/validation";
import { BASEURL, BASEURL_LOC, APIKEY, EMAIL, PASS } from "./helpers/data";
// dsd
import {
	DETAILID,
	FAVORITES,
	BASE_URL,
	DEFAULT,
	ABOUT,
	ERROR404,
	HOME,
} from "./helpers/routing";

function App() {
	const location = useLocation();
	const nav = useNavigate();
	const dispatch = useDispatch();
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

	function onRandomize(id = 0) {
		id = Math.floor(Math.random() * 827) + 1;
		const rid = id.toString();
		// axios(`${BASEURL}${id}${APIKEY}`)
		axios(`${BASEURL_LOC}${rid}`)
			.then(({ data }) => {
				if (!lookUpForState(rid, characters)) {
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
		// axios(`${BASEURL}${id}${APIKEY}`)
		axios(`${BASEURL_LOC}${id}`)
			.then(({ data }) => {
				if (!lookUpForState(id, characters)) {
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

	function handlerSetAccess(access) {
		setAccess(access);
		nav("/");
	}
	if (location.pathname === BASE_URL) {
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
				<Route
					path={HOME}
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route
					path={BASEURL}
					element={<Login login={login} access={access} />}
				/>
				<Route path={FAVORITES} element={<Favorites onClose={onClose} />} />
				<Route path={ABOUT} element={<About />} />
				<Route path={DETAILID} element={<Detail />} />
				<Route path={ERROR404} element={<Error404 />} />
				<Route path={DEFAULT} element={<Error404 />} />
			</Routes>
			<Cards />
		</div>
	);
}

export default App;
