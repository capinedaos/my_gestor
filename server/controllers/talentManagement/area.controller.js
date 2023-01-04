// Models
const { Area } = require("../../models/talentManagement");

// Utils
const { catchAsync } = require("../../utils/catchAsync.util");

const createArea = catchAsync(async (req, res, next) => {
  const { nameArea } = req.body;

  const newArea = await Area.create({
    nameArea,
  });

  res.status(201).json({
    status: "success",
    newArea,
  });
});

const getAllArea = catchAsync(async (req, res, next) => {
  const area = await Area.findAll();
  res.status(201).json({
    status: "success",
    area,
  });
});

const deleteArea = catchAsync(async (req, res, next) => {
  const { area } = req.params;

  await area.destroy();
  res.status(201).json({ status: "success" });
});

module.exports = {
  createArea,
  getAllArea,
  deleteArea,
};
