const express = require("express");

// Controllers
const {
  createOverallPayroll,
  getAllOverallPayroll,
  getOverallPayrollById,
  updateOverallPayroll,
  deleteOverallPayroll,
} = require("../../controllers/talentManagement/overallPayroll.controller");

// Middlewares

const {
  createOverallPayrollValidators,
  overallPayrollExists,
} = require("../../middlewares/talentManagement");

const {
  protectSession,
  userAdmin,
} = require("../../middlewares/auth.middleware");

const overallPayrollRouter = express.Router();

overallPayrollRouter.use(protectSession);

overallPayrollRouter.get("/", getAllOverallPayroll);

overallPayrollRouter.use(userAdmin);

overallPayrollRouter.post(
  "/",
  createOverallPayrollValidators,
  createOverallPayroll
);

overallPayrollRouter
  .use("/:id", overallPayrollExists)
  .route("/:id")
  .patch(updateOverallPayroll)
  .get(getOverallPayrollById)
  .delete(deleteOverallPayroll);

module.exports = { overallPayrollRouter };
