import secrets from "secrets.js-grempe";
import assert from "assert";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRET;
assert(secret, "env 'SECRET' is required");

const shares = process.env.SHARES || 3;
const threshold = process.env.THRESHOLD || 2;

const hexSecret = secrets.str2hex(secret);

const split = secrets.share(hexSecret, shares, threshold);

console.log("Generated Shares:");
split.forEach((share, i) => console.log(`Share ${i + 1}: ${share}`));
