/**
 * arquivo: routes/employee.routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 29/01/2024
 * author: Roger Santos
 */

const router = require("express-promise-router")();
const employeeController = require("../controllers/employeeController");

// ===> rota responsável por criar um novo "Colaborador: (POST): localhost:300/api/employees"
router.post("/employees", employeeController.createEmployee);

// ===> rota responsável por listar todos os "Colaboradores: (GET): localhost:300/api/employees"
router.get("/employees", employeeController.listAllEmployees);

module.exports = router;