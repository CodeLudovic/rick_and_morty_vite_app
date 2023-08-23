import { useState } from "react";

export default function SearchBar(props) {
	const onRandom = props.onR;
	const onSearch = props.onS;
	let [id, setID] = useState("");

	function handleChange(event) {
		setID(event.target.value);
	}

	//console.log(props);
	return (
		<div className="search-bar">
			<input
				placeholder="id."
				className="input-nav"
				type="search"
				id="inp"
				onChange={handleChange}
			/>
			<button className="button-random" onClick={() => onRandom()}>
				👀
			</button>
			<button className="button-search" onClick={() => onSearch(id)}>
				Agregar
			</button>
		</div>
	);
}
