import { useState } from "react";
import { NavLink } from "react-router-dom";

function Card({ onClose, item }) {
	const [inputValue, setInputValue] = useState("");
	const maxLength = 25;
	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
	};

	return (
		<div className="card">
			<button className="close-button" onClick={() => onClose(item.id)}>
				X
			</button>
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

export default Card;
