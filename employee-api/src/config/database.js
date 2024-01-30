/**
 * arquivo: config/database.js
 * descrição: arquivo responsável pelas 'connectionStrings'
 * data: 29/01/2024
 * author: Roger Santos
 */

const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

// ==> Conexão com base de dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on("error", (error, client) => {
  process.exit(-1);
});

pool.on("connect", (client) => {
  console.log(client);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}