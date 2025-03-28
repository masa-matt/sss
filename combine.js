import secrets from "secrets.js-grempe";
import dotenv from "dotenv";
dotenv.config();

const share1 = process.env.SHARE1 || "";
const share2 = process.env.SHARE2 || "";
const share3 = process.env.SHARE3 || "";

const sharesToRecover = [share1, share2, share3].filter((s) => s !== "");

const recoveredHex = secrets.combine(sharesToRecover);
const recoveredSecret = secrets.hex2str(recoveredHex);

console.log("Recovered Secret:", recoveredSecret);
