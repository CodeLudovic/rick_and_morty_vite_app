import { connect } from "react-redux";
import Card from "./Card";

/* eslint-disable */
function Cards({ characters, onClose, myFavorites }) {
	console.log(myFavorites);
	if (characters !== null && characters !== undefined) {
		return (
			<div className="card-list">
				{characters.map((character, index) => (
					<Card
						key={index}
						item={character}
						onClose={onClose}
						characters={characters}
					/>
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
