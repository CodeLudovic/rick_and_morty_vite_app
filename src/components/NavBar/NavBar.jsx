import React from "react";
import SearchBar from "./SearchBar";
import "./NavBar.module.css";

function NavBar(props) {
	//console.log(props);
	const { onSearch } = props;
	const { onRandomize } = props;
	return (
		<div className="pre-navbar">
			<SearchBar onS={onSearch} onR={onRandomize} />
		</div>
	);
}

export default NavBar;
