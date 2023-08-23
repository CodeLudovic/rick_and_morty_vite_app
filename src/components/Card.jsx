import { useState } from "react";

function Card(props) {
	console.log(props);
	const onDestroy = props.func;
	const item = props.item;

	//console.log(item.id);

	const [inputValue, setInputValue] = useState("");

	const maxLength = 25;

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
	};

	return (
		<div className="card">
			<button className="close-button" onClick={() => onDestroy(item.id)}>
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
				{item.name}
			</div>
			<div className="footer">
				<div className="left-content">{item.species}</div>
				<div className="right-content">{item.gender}</div>
			</div>
		</div>
	);
}

export default Card;
