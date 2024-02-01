/**
 * arquivo: controllers/employee.routes.js
 * descrição: arquivo responsável pela lógica do CRUS (API - Employee)
 * data: 30/01/2024
 * author: Roger Santos
 */

const database = require("../config/database");

// ==> Método responsável por criar um novo "Employee"
exports.createEmployee = async (request, response) => {
  const { name, job_role, salary, date_of_birth, employee_registration } = request.body;
  const { rows } = await database.query(
    "INSERT INTO employee (name, job_role, salary, date_of_birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
    [name, job_role, salary, date_of_birth, employee_registration]
  );

  response.status(202).send({
    message: "Employee added successfuly!",
    body: {
      employee: {
        name,
        job_role,
        salary,
        date_of_birth,
        employee_registration,
      },
    },
  });
};
