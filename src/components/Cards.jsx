import Card from "./Card";
function Cards({ characters, onClose }) {
	if (characters !== null && characters !== undefined) {
		return (
			<div className="card-list">
				{characters.map((character, index) => (
					<Card key={index} item={character} onClose={onClose} />
				))}
			</div>
		);
	}
}

export default Cards;
