/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável pela chamada da API na aplicação no lado do back-end
 * data: 29/01/2024
 * author: Roger Santos
 */

const express = require("express");

const router = express.Router();

router.get("/api", (request, response) => {
  response.status(200).send({
    success: "true",
    message: "Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure",
    version: "1.0.0"
  });
});

module.exports = router;