import Card from "./Card";
import React from "react";
//
function Cards(props) {
	//console.log(props);

	const { onClose } = props;
	const { characters } = props;

	//console.log(onClose);

	return (
		<div className="card-list">
			{characters.map((character, index) => (
				<Card key={index} item={character} id={character.id} func={onClose} />
			))}
		</div>
	);
}

export default Cards;
