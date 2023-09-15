import { connect } from "react-redux";
import Card from "./Card";
import style from "./Cards.module.css";
/* eslint-disable */
function Cards({ characters, onClose, myFavorites }) {
	if (characters !== null && characters !== undefined) {
		return (
			<div className={style.container}>
				{characters?.map((character, index) => (
					<Card key={character.id} item={character} onClose={onClose} />
				))}
			</div>
		);
	}
}

export function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

export default connect(mapStateToProps, null)(Cards);
