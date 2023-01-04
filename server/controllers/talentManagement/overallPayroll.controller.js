// Models
const {
  OverallPayroll,
  EmployeePayroll,
} = require("../../models/talentManagement");

// Utils
const { catchAsync } = require("../../utils/catchAsync.util");
const { AppError } = require("../../utils/appError.util");

const createOverallPayroll = catchAsync(async (req, res, next) => {
  const { typeOfSettlement, description, month, year } = req.body;
  let newMonth = "";
  const overallPayroll = await OverallPayroll.findAll();

  const newInitialDate = new Date(overallPayroll.initialDate);
  const newFinalDate = new Date(overallPayroll.finalDate);

  if (overallPayroll) {
    for (let i = 0; i < overallPayroll.length; i++) {
      if (
        new Date(overallPayroll[i].initialDate).getTime() ===
          newInitialDate.getTime() &&
        new Date(overallPayroll[i].finalDate).getTime() ===
          newFinalDate.getTime()
      ) {
        return next(
          new AppError("Ya existe una nómina con la misma fecha", 404)
        );
      }
    }
  }

  if (month === "1") {
    newMonth = "01";
  } else if (month === "2") {
    newMonth = "02";
  } else if (month === "3") {
    newMonth = "03";
  } else if (month === "4") {
    newMonth = "04";
  } else if (month === "5") {
    newMonth = "05";
  } else if (month === "6") {
    newMonth = "06";
  } else if (month === "7") {
    newMonth = "07";
  } else if (month === "8") {
    newMonth = "08";
  } else if (month === "9") {
    newMonth = "09";
  } else {
    newMonth = month;
  }

  let date = "";
  let initialDate = "";
  let finalDate = "";

  if (typeOfSettlement === "mensual") {
    date = `01/${newMonth}/${year} - 30/${newMonth}/${year}`;
    initialDate = new Date(`${year}/${newMonth}/01`);
    finalDate = new Date(`${year}/${newMonth}/30`);
  } else if (typeOfSettlement === "primera quincena") {
    date = `01/${newMonth}/${year} - 15/${newMonth}/${year}`;
    initialDate = new Date(`${year}/${newMonth}/01`);
    finalDate = new Date(`${year}/${newMonth}/15`);
  } else if (typeOfSettlement === "segunda quincena") {
    date = `16/${newMonth}/${year} - 30/${newMonth}/${year}`;
    initialDate = new Date(`${year}/${newMonth}/16`);
    finalDate = new Date(`${year}/${newMonth}/30`);
  }

  const newOverallPayroll = await OverallPayroll.create({
    typeOfSettlement,
    description,
    month: Number(newMonth),
    year,
    paymentPeriod: date,
    initialDate,
    finalDate,
  });

  await newOverallPayroll.update({
    status: "En proceso",
  });

  res.status(201).json({
    status: "success",
    newOverallPayroll,
  });
});

const getAllOverallPayroll = catchAsync(async (req, res, next) => {
  const overallPayroll = await OverallPayroll.findAll();
  res.status(201).json({
    status: "success",
    overallPayroll,
  });
});

const getOverallPayrollById = catchAsync(async (req, res, next) => {
  const { overallPayroll } = req;

  const employeePayroll = await EmployeePayroll.findAll({
    where: {
      initialDate: overallPayroll.initialDate,
      finalDate: overallPayroll.finalDate,
    },
  });

  res.status(201).json({
    status: "success",
    overallPayroll,
    employeePayroll,
  });
});

const updateOverallPayroll = catchAsync(async (req, res, next) => {
  const { overallPayroll } = req;
  const { typeOfSettlement, description, month, year } = req.body;
  // const employeePayroll = await EmployeePayroll.findAll({
  //   where: {
  //     initialDate: overallPayroll.initialDate,
  //     finalDate: overallPayroll.finalDate,
  //   },
  // });

  // const total = employeePayroll.reduce(
  //   (total, employee) => total + employee.netPayable,
  //   0
  // );
  let newMonth = "";
  const overallPayrollDate = await OverallPayroll.findAll();

  const newInitialDate = new Date(overallPayrollDate.initialDate);
  const newFinalDate = new Date(overallPayrollDate.finalDate);

  if (overallPayrollDate) {
    for (let i = 0; i < overallPayrollDate.length; i++) {
      if (
        new Date(overallPayrollDate[i].initialDate).getTime() ===
          newInitialDate.getTime() &&
        new Date(overallPayrollDate[i].finalDate).getTime() ===
          newFinalDate.getTime()
      ) {
        return next(
          new AppError("Ya existe una nómina con la misma fecha", 404)
        );
      }
    }
  }

  if (month === "1") {
    newMonth = "01";
  } else if (month === "2") {
    newMonth = "02";
  } else if (month === "3") {
    newMonth = "03";
  } else if (month === "4") {
    newMonth = "04";
  } else if (month === "5") {
    newMonth = "05";
  } else if (month === "6") {
    newMonth = "06";
  } else if (month === "7") {
    newMonth = "07";
  } else if (month === "8") {
    newMonth = "08";
  } else if (month === "9") {
    newMonth = "09";
  } else {
    newMonth = month;
  }

  let date = "";
  let initialDate = "";
  let finalDate = "";

  if (typeOfSettlement === "mensual") {
    date = `01/${newMonth}/${year} - 30/${newMonth}/${year}`;
    initialDate = new Date(`${year}/${newMonth}/01`);
    finalDate = new Date(`${year}/${newMonth}/30`);
  } else if (typeOfSettlement === "primera quincena") {
    date = `01/${newMonth}/${year} - 15/${newMonth}/${year}`;
    initialDate = new Date(`${year}/${newMonth}/01`);
    finalDate = new Date(`${year}/${newMonth}/15`);
  } else if (typeOfSettlement === "segunda quincena") {
    date = `16/${newMonth}/${year} - 30/${newMonth}/${year}`;
    initialDate = new Date(`${year}/${newMonth}/16`);
    finalDate = new Date(`${year}/${newMonth}/30`);
  }

  await overallPayroll.update({
    typeOfSettlement,
    description,
    month: Number(newMonth),
    year,
    paymentPeriod: date,
    initialDate,
    finalDate,
  });

  res.status(201).json({ status: "success", overallPayroll });
});

const deleteOverallPayroll = catchAsync(async (req, res, next) => {
  const { overallPayroll } = req;
  await overallPayroll.destroy();
  res.status(201).json({ status: "success" });
});

module.exports = {
  createOverallPayroll,
  getAllOverallPayroll,
  getOverallPayrollById,
  updateOverallPayroll,
  deleteOverallPayroll,
};