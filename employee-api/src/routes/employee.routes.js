/**
 * arquivo: routes/employee.routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 29/01/2024
 * author: Roger Santos
 */

const router = require("express-promise-router")();
const employeeController = require("../controllers/employeeController");

router.post("/employees", employeeController.createEmployee);

module.exports = router;