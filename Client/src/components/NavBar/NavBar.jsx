import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { ABOUT, FAVORITES, HOME } from "../../helpers/routing";

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
				<NavLink to={HOME}>
					<button className="button-home">Home</button>
				</NavLink>
				<NavLink to={ABOUT}>
					<button className="button-about">About</button>
				</NavLink>
				<NavLink to={FAVORITES}>
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
