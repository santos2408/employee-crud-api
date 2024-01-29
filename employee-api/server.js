/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execução do back-end ("Employee")
 * data: 29/01/2024
 * author: Roger Santos
 */

const app = require("./src/app");

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Aplicação sendo executada na porta: ${port}`);
});