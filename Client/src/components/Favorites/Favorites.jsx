import { useDispatch, useSelector } from "react-redux";
import {
	filterCards,
	orderCards,
	resetCards,
} from "../../redux/actions/actions";
import { optFilter, optOrder } from "../../helpers/data";
import Card from "../Card";

/* eslint-disable */
export function Favorites({}) {
	const dispatch = useDispatch();
	const myFavorites = useSelector((state) => state.myFavorites);
	const characters = useSelector((state) => state.allCharacters);

	function handlerOrder(e) {
		dispatch(orderCards(e.target.value));
	}

	function handlerFilter(e) {
		dispatch(filterCards(e.target.value));
	}

	function handlerReset() {
		dispatch(resetCards());
	}

	console.log(myFavorites);
	console.log(characters);

	return (
		<>
			<div className="order-bar">
				<div>
					<select
						defaultValue="order"
						placeholder="Order by.."
						className="option-bar"
						onChange={handlerOrder}>
						<option value="order">Order by...</option>
						{optOrder.map((order, index) => (
							<option key={index} value={order}>
								{order === "A" ? "Ascendente" : "Descendente"}
							</option>
						))}
					</select>
				</div>
				<div>
					<select
						defaultValue="gender"
						placeholder="Filter by..."
						className=""
						onChange={handlerFilter}>
						<option value="gender" selected>
							Gender
						</option>
						{optFilter.map((filter, index) => (
							<option key={index} value={filter}>
								{filter === "unknown" ? "Unknown" : filter}
							</option>
						))}
					</select>
				</div>
				<div>
					<button onClick={handlerReset}>Reset</button>
				</div>
			</div>
			<div className="card-list">
				{myFavorites?.map((character, index) => (
					<Card key={index} item={character} />
				))}
			</div>
		</>
	);
}

export default Favorites;
