import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions/actions";
import { MAXLENGTH } from "../helpers/data";

export function Card({ onClose, item }) {
	const [inputValue, setInputValue] = useState("");
	const [isFav, setIsFav] = useState(false);
	const dispatch = useDispatch();
	const myFavorites = useSelector((state) => state.myFavorites);

	/* eslint-disable */
	useEffect(() => {
		for (let i = 0; i < myFavorites.length; i++) {
			if (myFavorites[i].id === item.id) {
				setIsFav(true);
			}
		}
	}, [myFavorites, item]);

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
	};

	const handleIsFav = (e) => {
		e.preventDefault();
		if (isFav === true) {
			setIsFav(false);
			dispatch(removeFav(item.id));
		}
		if (isFav === false) {
			setIsFav(true);
			dispatch(addFav(item));
		}
	};
	return (
		<div className="card">
			{isFav ? (
				<button className="fav-button" onClick={handleIsFav}>
					❤️
				</button>
			) : (
				<button className="fav-button" onClick={handleIsFav}>
					🤍
				</button>
			)}
			<button
				className="close-button"
				onClick={(event) => {
					event.preventDefault();
					onClose(item.id);
				}}>
				X
			</button>
			<div className="image-container">
				<img src={item.image} alt="" />
			</div>
			<div
				className={`image-text ${
					item.name.length > MAXLENGTH ? "expanded" : ""
				}`}
				onChange={handleInputChange}
				value={inputValue}>
				<NavLink to={`/detail/${item.id}`} className="link-cards">
					{item.name}
				</NavLink>
			</div>
			<div className="footer">
				<div className="left-content">{item.species}</div>
				<div className="right-content">{item.gender}</div>
			</div>
		</div>
	);
}

export default Card;
