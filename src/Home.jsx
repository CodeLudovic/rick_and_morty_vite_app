import { useState } from "react";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
function Home() {
	const [characters, setCharacters] = useState([]);

	// const character = {

	// 	id: 1,
	// 	name: "Rick Sanchez",
	// 	status: "Alive",
	// 	species: "Human",
	// 	gender: "Male",
	// 	origin: {
	// 		name: "Earth (C-137)",
	// 		url: "https://rickandmortyapi.com/api/location/1",
	// 	},
	// 	image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	// };
	// console.log({ ...characters, character: character });

	//console.log(...characters, character);
	//console.log(characters);
	// useEffect(() => {
	// 	setCharacters([...characters, character]);
	// }, []);

	//console.log(characters);

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
		<div>
			<NavBar onSearch={onSearch} onRandomize={onRandomize} />
			<Cards characters={characters} onClose={onClose} />
		</div>
	);
}

export default Home;
