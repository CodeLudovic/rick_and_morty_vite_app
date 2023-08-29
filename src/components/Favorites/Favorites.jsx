import { connect } from "react-redux";
import Card from "../Card";

export function Favorites({ myFavorites, onClose }) {
	if (myFavorites !== null && myFavorites !== undefined) {
		return (
			<div className="card-list">
				{myFavorites?.map((character, index) => (
					<Card key={index} item={character} onClose={onClose} />
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

export default connect(mapStateToProps, null)(Favorites);
