import { useState } from "react";

export default function SearchBar({ onSearch, onRandomize }) {
	let [id, setID] = useState("");

	function handleChange(event) {
		setID(event.target.value);
	}
	return (
		<div className="search-bar">
			<input
				placeholder="id."
				className="input-nav"
				type="search"
				id="inp"
				onChange={handleChange}
			/>
			<button className="button-random" onClick={() => onRandomize()}>
				👀
			</button>
			<button className="button-search" onClick={() => onSearch(id)}>
				Agregar
			</button>
		</div>
	);
}
