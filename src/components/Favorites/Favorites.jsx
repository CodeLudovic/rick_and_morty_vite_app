import { connect, useSelector } from "react-redux";
import Card from "../Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
/* eslint-disable */
export function Favorites({ myFavorites, onClose, onCloseFav }) {
	const dispatch = useDispatch();
	const selector1 = useSelector((state) => state.myFavorites);
	const selector2 = useSelector((state) => state.allCharacters);
	console.log(selector1);
	console.log(selector2);

	function handlerOrder(e) {
		e.preventDefault();
		dispatch(orderCards(e.target.value));
	}

	function handlerFilter(e) {
		e.preventDefault();
		dispatch(filterCards(e.target.value));
	}

	if (myFavorites !== null && myFavorites !== undefined) {
		return (
			<>
				<div className="order-bar">
					<div>
						<select className="option-bar" onChange={handlerOrder}>
							<option value="A">Ascendente</option>
							<option value="D">Descendente</option>
						</select>
					</div>
					<div>
						<select className="" onChange={handlerFilter}>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Genderless">Genderless</option>
							<option value="unknown">Unknown</option>
						</select>
					</div>
				</div>
				<div className="card-list">
					{myFavorites?.map((character, index) => (
						<Card key={index} item={character} onClose={onClose} />
					))}
				</div>
			</>
		);
	}
}

export function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

export default connect(mapStateToProps, null)(Favorites);
