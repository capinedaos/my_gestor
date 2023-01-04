const express = require("express");

// Controllers
const {
  createArea,
  getAllArea,
  deleteArea,
} = require("../../controllers/talentManagement/area.controller");

// Middlewares
const {
  areaExists,
} = require("../../middlewares/talentManagement/area.middleware");

const {
  protectSession,
  userAdmin,
} = require("../../middlewares/auth.middleware");

const areaRouter = express.Router();

areaRouter.use(protectSession);

areaRouter.get("/", getAllArea);

areaRouter.use(userAdmin);

areaRouter.post("/", createArea);

areaRouter.delete("/:id", areaExists, deleteArea);

module.exports = { areaRouter };
