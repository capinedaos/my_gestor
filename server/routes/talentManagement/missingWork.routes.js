const express = require("express");

// Controllers
const {
  createMissingWork,
  getAllMissingWork,
  getMissingWorkById,
  updateMissingWork,
  deleteMissingWork,
} = require("../../controllers/talentManagement/missingWork.controller");

// Middlewares
const {
  createMissingWorkValidators,
  missingWorkExists,
  employeeExists,
} = require("../../middlewares/talentManagement");
const { validateDate } = require("../../middlewares/validateDate.middleware");
const {
  protectSession,
  userAdmin,
} = require("../../middlewares/auth.middleware");

const missingWorkRouter = express.Router();

missingWorkRouter.use(protectSession);

missingWorkRouter.get("/", getAllMissingWork);

missingWorkRouter.use(userAdmin);

missingWorkRouter.post(
  "/",
  createMissingWorkValidators,
  validateDate,
  employeeExists,
  createMissingWork
);

missingWorkRouter
  .use("/:id", missingWorkExists)
  .route("/:id")
  .get(getMissingWorkById)
  .patch(updateMissingWork)
  .delete(deleteMissingWork);

module.exports = { missingWorkRouter };
