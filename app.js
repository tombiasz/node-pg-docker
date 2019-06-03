require('dotenv').config()
const express = require('express');
const knexFactory = require('knex');

const app = express()

const {
  APP_NAME,
  APP_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
} = process.env;

const knex = knexFactory({
  client: 'pg',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
  },
  debug: true,
});

app.get('/', async (req, res) => {
  await knex.raw('select 1+1 as result');

  res.send(`Hello from ${APP_NAME}!`);
})

app.listen(APP_PORT, () => console.log(`App listening on port ${APP_PORT}!`))
