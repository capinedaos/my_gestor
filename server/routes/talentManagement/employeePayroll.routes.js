const express = require("express");

// Controllers
const {
  createEmployeePayroll,
  getAllEmployeePayroll,
  getEmployeePayrollById,
  updateEmployeePayroll,
  deleteEmployeePayroll,
  getEmployeePayrollByOverallPayrollId,
} = require("../../controllers/talentManagement/employeePayroll.controller");

// Middlewares
const {
  createEmployeePayrollValidators,
  employeePayrollExists,
  employeeExists,
  contractExists,
  overallPayrollExists,
} = require("../../middlewares/talentManagement");
const {
  protectSession,
  userAdmin,
} = require("../../middlewares/auth.middleware");

const employeePayrollRouter = express.Router();

employeePayrollRouter.use(protectSession);

employeePayrollRouter.get("/", getAllEmployeePayroll);

employeePayrollRouter.get(
  "/overall-payroll/:id",
  getEmployeePayrollByOverallPayrollId
);

employeePayrollRouter.use(userAdmin);

employeePayrollRouter.post(
  "/",
  createEmployeePayrollValidators,
  employeeExists,
  contractExists,
  overallPayrollExists,
  createEmployeePayroll
);

employeePayrollRouter
  .use("/:id", employeePayrollExists)
  .route("/:id")
  .get(getEmployeePayrollById)
  .patch(updateEmployeePayroll)
  .delete(deleteEmployeePayroll);

module.exports = { employeePayrollRouter };
