import crypto from "crypto";

const ts = new Date().getTime().toString();

const publicKey = process.env.MARVEL_PUBLIC_KEY;
const privateKey = process.env.MARVEL_PRIVATE_KEY;

const toHash = ts + privateKey + publicKey;

const hash = crypto.createHash('md5').update(toHash).digest('hex');

const environment = {
  ts,
  hash,
  apikey: publicKey
};

export default environment;