import secrets from "secrets.js-grempe";
import assert from "assert";
import dotenv from "dotenv";
dotenv.config();

const shares = process.env.SHARES || 3;
const threshold = process.env.THRESHOLD || 2;

const sharesToRecover = [...Array(shares)]
  .map((_, i) => i + 1)
  .map((i) => process.env[`SHARE${i}`])
  .filter((s) => s !== "");

assert(
  sharesToRecover.length >= threshold,
  "env SHARE<#index> is required more than threshold",
);

const recoveredHex = secrets.combine(sharesToRecover);
const recoveredSecret = secrets.hex2str(recoveredHex);

console.log("Recovered Secret:", recoveredSecret);
