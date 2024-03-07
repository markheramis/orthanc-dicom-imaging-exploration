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
    // Check if token exists
    if (!request_body.hasOwnProperty("token-value")) {
        response_body.granted = false;
        console.log("[FAIL] No token provided!");
        response.send(JSON.stringify(response_body));
        return;
    }
    let token = request_body["token-value"];
    // Remove "bearer " part of the token
    if (token.startsWith("bearer ")) {
        token = token.slice(7);
    }
	// check if token is "demo"
    if (token != "demo") {
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
