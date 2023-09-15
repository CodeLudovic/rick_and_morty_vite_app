import SearchBar from "./SearchBar";
import style from "./NavBar.module.css";
import { ButtonsNav } from "../ButtonsNav/ButtonsNav";

function NavBar({ onSearch, onRandomize, access, acc }) {
	const handlerLogOut = () => {
		access(false);
	};

	const onLogOut = () => {
		handlerLogOut();
	};

	return (
		<div className={style.container}>
			<div className={style.pre_navbar}>
				<ButtonsNav onLogOut={onLogOut} acc={acc} />
				<SearchBar onSearch={onSearch} onRandomize={onRandomize} />
			</div>
		</div>
	);
}

export default NavBar;
