const http = require("http");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;
const data = require("../src/utils/data");

const server = http
	.createServer((req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		if (req.url.includes("/rickandmorty/character")) {
			const params = req.url.split("/");
			const id = parseInt(params[params.length - 1]);
			//getCharById(res, id);
			const character = data.find((character) => character.id === id);
			if (character) {
				res.writeHead(200, { "content-type": "application/json" });
				const response = JSON.stringify(character);
				res.end(response);
				// res.status(200).contentType({ "content-type": "application/json" }).json();
			} else {
				res.writeHead(404, { "content-type": "text/plain" });
				res.end("ID not found");
			}
		}
	})
	.listen(PORT, "localhost");

module.exports = {
	server,
};
