import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { optFilter, optOrder } from "../../helpers/data";
import Card from "../Card";

/* eslint-disable */
export function Favorites({ onClose }) {
	const dispatch = useDispatch();
	const myFavorites = useSelector((state) => state.myFavorites);

	function handlerOrder(e) {
		e.preventDefault();
		dispatch(orderCards(e.target.value));
	}

	function handlerFilter(e) {
		e.preventDefault();
		dispatch(filterCards(e.target.value));
	}

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

export default Favorites;
