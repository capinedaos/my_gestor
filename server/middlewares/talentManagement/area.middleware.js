// Models
const { Area } = require("../../models/talentManagement");

// Utils
const { AppError } = require("../../utils/appError.util");
const { catchAsync } = require("../../utils/catchAsync.util");

const areaExists = catchAsync(async (req, res, next) => {
  const { areaId } = req.body;

  const area = await Area.findOne({ where: { id: areaId } });

  if (!area) {
    return next(new AppError("Area no encontrada", 404));
  }

  req.area = area;
  next();
});

module.exports = { areaExists };
