#!/usr/bin/env node

const crypto = require("crypto");

function generate(password) {
	const iterations = 120000;
	const keylen = 64;
	const digest = "sha512";
	const salt = crypto.randomBytes(16);
	const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
	return {
		iterations,
		keylen,
		digest,
		salt: salt.toString("hex"),
		hash: hash.toString("hex"),
	};
}

const password = process.argv[2];
if (!password) {
	console.error("Usage: node scripts/generate-admin-hash.js <password>");
	process.exit(1);
}

const result = generate(password);
console.log(JSON.stringify(result, null, 2)); 