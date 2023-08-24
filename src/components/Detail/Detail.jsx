import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Detail() {
	const [character, setCharacter] = useState({});

	const { id } = useParams(); //

	React.useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${id}`).then(
			({ data }) => {
				if (data.name) {
					//console.log(origin);
					setCharacter(data);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			}
		);
		return setCharacter({});
	}, [id]);

	return (
		<div className="detail-content">
			{character ? (
				<div className="content-info-detail">
					{character.name && <h1 className="title-detail">{character.name}</h1>}
					{character.status && <p>Status | {character.status}</p>}
					{character.species && <p>Species | {character.species}</p>}
					{character.gender && <p>Gender | {character.gender}</p>}
					{character.origin && (
						<p style={{ marginTop: "-5px" }}>
							Origin | {character.origin.name}
						</p>
					)}
				</div>
			) : (
				"Sucedio un problema al cargar el personaje"
			)}
			<div className="detail-image">
				{character.image && (
					<img
						src={character.image}
						width="600px"
						style={{ borderRadius: "50%" }}
					/>
				)}
			</div>
		</div>
	);
}

export default Detail;
