import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions/actions";

export function Card({ onClose, item, addFav, removeFav, myFavorites }) {
	const [inputValue, setInputValue] = useState("");
	const [isFav, setIsFav] = useState(false);
	/* eslint-disable */
	useEffect(() => {
		// myFavorites.forEach((fav) => {
		// 	if (fav.id === item.id) {
		// 		setIsFav(true);
		// 	}
		// });
		for (let i = 0; i < myFavorites.length; i++) {
			if (myFavorites[i].id === item.id) {
				setIsFav(true);
			}
		}
	}, [myFavorites, item]);

	const maxLength = 25;
	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
	};

	const handleIsFav = (e) => {
		e.preventDefault();
		if (isFav === true) {
			setIsFav(false);
			removeFav(item.id);
		}
		if (isFav === false) {
			setIsFav(true);
			addFav(item);
		}
	};

	// const handleCloseFav = () => {
	// 	if (isFav === true) {
	// 		setIsFav(false);
	// 		removeFav(item.id);
	// 	}
	// };
	//console.log(myFavorites);

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
			{/* {loc.pathname === "/favorites" ? (
				<button className="close-button" onClick={handleCloseFav}>
					X
				</button>
			) : (
			)} */}
			{/* 
			<button className="close-button" onClick={() => onClose(item.id)}>
				X
			</button> */}
			<div className="image-container">
				<img src={item.image} alt="" />
			</div>
			<div
				className={`image-text ${
					inputValue.length > maxLength ? "expanded" : ""
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

/* eslint-disable */
export function mapDispatchToProps(dispatch) {
	return {
		addFav: (character) => dispatch(addFav(character)),
		removeFav: (id) => dispatch(removeFav(id)),
	};
}

export function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
