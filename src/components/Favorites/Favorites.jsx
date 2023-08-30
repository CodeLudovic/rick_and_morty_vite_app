import { connect, useSelector } from "react-redux";
import Card from "../Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
/* eslint-disable */
export function Favorites({ myFavorites, onClose }) {
	const dispatch = useDispatch();
	const selector1 = useSelector((state) => state.myFavorites);
	const selector2 = useSelector((state) => state.allCharacters);

	function handlerOrder(e) {
		e.preventDefault();
		dispatch(orderCards(e.target.value));
	}

	function handlerFilter(e) {
		e.preventDefault();
		dispatch(filterCards(e.target.value));
	}
	const optFilter = ["All", "Male", "Female", "Genderless", "unknown"];
	const optOrder = ["A", "D"];

	if (myFavorites !== null && myFavorites !== undefined) {
		return (
			<>
				<div className="order-bar">
					<div>
						<select
							placeholder="Order by.."
							className="option-bar"
							onChange={handlerOrder}>
							{optOrder.map((order, index) => (
								<option key={index} value={order}>
									{order === "A" ? "Ascendente" : "Descendente"}
								</option>
							))}
						</select>
					</div>
					<div>
						<select
							placeholder="Filter by..."
							className=""
							onChange={handlerFilter}>
							{optFilter.map((filter, index) => (
								<option key={index} value={filter}>
									{filter === "unknown" ? "Unknown" : filter}
								</option>
							))}
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
