import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards";

function App() {
	const [characters, setCharacters] = useState([]);
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
		const result = characters.filter((character) => {
			return character.id !== parseInt(id);
		});
		console.log(result);
		setCharacters([...result]);
	}

	return (
		<div className="App">
			<NavBar onSearch={onSearch} onRandomize={onRandomize} />
			{/* <Home characters={characters} onClosed={onClose} /> */}
			<Routes>
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
