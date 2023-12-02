#!/usr/bin/env node

const https = require('https');

https.get('https://adventofcode.com/2023/day/1/input', (resp) => {
	let data = '';

	// A chunk of data has been recieved.
	resp.on('data', (chunk) => {
		data += chunk;
	});

	// The whole response has been recieved. Print out the result.
	resp.on('end', () => {
		console.log(data);
	});
}).on("error", (err) => {
	console.log("Error: " + err.message)
});
