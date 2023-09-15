import { NavLink } from "react-router-dom";
import { ABOUT, FAVORITES, HOME } from "../../helpers/routing";
import style from "./ButtonsNav.module.css";
export const ButtonsNav = ({ acc, onLogOut }) => {
	return (
		<>
			<div className={style.gridButtons}>
				{acc && (
					<button className={style.button_logout} onClick={onLogOut}>
						Log Out
					</button>
				)}
				<div>
					<NavLink to={HOME}>
						<button className={style.button_home}>Home</button>
					</NavLink>
					<NavLink to={ABOUT}>
						<button className={style.button_about}>About</button>
					</NavLink>
					<NavLink to={FAVORITES}>
						<button className={style.button_favorite}>Favorites</button>
					</NavLink>
				</div>
			</div>
		</>
	);
};
