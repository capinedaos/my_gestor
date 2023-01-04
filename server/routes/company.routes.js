const express = require("express");

// Controllers
const {
  createCompany,
  getCompany,
  updateCompany,
} = require("../controllers/company.controller");

// Middlewares
const { createCompanyValidators } = require("../middlewares/talentManagement");
const { protectSession, userAdmin } = require("../middlewares/auth.middleware");

const companyRouter = express.Router();

companyRouter.use(protectSession);

companyRouter.get("/", getCompany);

companyRouter.use(userAdmin);

companyRouter.post("/", createCompanyValidators, createCompany);

companyRouter.patch("/:id", updateCompany);

module.exports = { companyRouter };
