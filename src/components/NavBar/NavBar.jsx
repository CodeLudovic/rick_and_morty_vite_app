import SearchBar from "./SearchBar";
// import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar({ onSearch, onRandomize, access, acc }) {
	const handlerLogOut = () => {
		access(false);
	};

	const onLogOut = () => {
		handlerLogOut();
	};

	return (
		<div className="pre-navbar">
			<div className="buttons-nav">
				{acc && (
					<button className="button-logout" onClick={onLogOut}>
						Log Out
					</button>
				)}
				<NavLink to={"/home"}>
					<button className="button-home">Home</button>
				</NavLink>
				<NavLink to={"/about"}>
					<button className="button-about">About</button>
				</NavLink>
				<NavLink to={"/favorites"}>
					<button className="button-favorite">Favorites</button>
				</NavLink>
			</div>
			<div>
				<SearchBar onSearch={onSearch} onRandomize={onRandomize} />
			</div>
		</div>
	);
}

export default NavBar;

// {({ isActive }) =>isActive ? "button-home active" : "button-home"}
