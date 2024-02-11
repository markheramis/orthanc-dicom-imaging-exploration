"use strict";
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
// parse application/json
app.use(bodyParser.json());
// Constants
const PORT = 8080;
const HOST = "0.0.0.0";
app.post("/auth", (request, response) => {
	const request_body = request.body;
	const response_body = {
		granted: true,
		validity: 0,
	};
	// TODO: use dicom-uid or parse data from uri and restrict user access
	if (request_body["token-value"] != "demo") {
		response_body.granted = false;
		console.log("[FAIL] operation not allowed!");
	} else {
		console.log("[OK] operation allowed!");
		console.log("\n --------------------------- \n");
	}
	response.send(JSON.stringify(response_body));
});
app.listen(PORT, HOST, () => {
	console.log(`[OK] Running on http://${HOST}:${PORT}`);
});
