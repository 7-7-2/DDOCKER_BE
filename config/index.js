// app.js 시작시 env 처리
const { config } = require('dotenv');

if (process.env.NODE_ENV === undefined) {
  config({
    path: `.env.local`
  });
} else {
  config({
    path: `.env.${process.env.NODE_ENV}`
  });
}

const CREDENTIALS = process.env.CREDENTIALS === 'true';

const { NODE_ENV, NODE_MESSAGE, PORT, ORIGIN } = process.env;

module.exports = {
  CREDENTIALS,
  NODE_ENV,
  NODE_MESSAGE,
  PORT,
  ORIGIN
};
