const axios = require("axios");
const { BASE_URL } = require("../utils/data1");

const getCharById = (res, id) => {
	axios
		.get(`${BASE_URL}${id}`)
		.then((response) => {
			const { name, gender, species, origin, image, status } = response.data;
			const character = {
				id: id,
				name,
				gender,
				species,
				origin: origin.name,
				image,
				status,
			};
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(character));
		})
		.catch((error) => {
			res.writeHead(500, { "Content-Type": "text/plain" });
			res.end(error.message);
		});
};

module.exports = getCharById;
