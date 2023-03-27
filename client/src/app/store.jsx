import { configureStore } from "@reduxjs/toolkit";

// Reducers
import isLoadingSlice from "./slices/isLoading.slice";
import companySlice from "./slices/company.slice";
import userSlice from "./slices/user.slice";
import employeeSlice from "./slicesTalentManagement/employee.slice";
import overallPayrollSlice from "./slicesTalentManagement/overallPayroll.slice";
import employeePayrollSlice from "./slicesTalentManagement/employeePayroll.slice";
import contractSlice from "./slicesTalentManagement/contract.slice";
import socialSecuritySlice from "./slicesTalentManagement/socialSecurity.slice";
import endowmentSlice from "./slicesTalentManagement/endowment.slice";
import familyInformationSlice from "./slicesTalentManagement/familyInformation.slice";
import healthyLifeSlice from "./slicesTalentManagement/healthyLife.slice";
import unfitnessSlice from "./slicesTalentManagement/unfitness.slice";
import missingWorkSlice from "./slicesTalentManagement/missingWork.slice";
import loanMoneySlice from "./slicesTalentManagement/loanMoney.slice";
import payInMoneySlice from "./slicesTalentManagement/payInMoney.slice";
import bonusServiceSlice from "./slicesTalentManagement/bonusService.slice";
import liquidationSlice from "./slicesTalentManagement/liquidation.slice";
import salaryIncreaseSlice from "./slicesTalentManagement/salaryIncrease.slice";
import uiSlice from "./slicesTalentManagement/ui.slice";
import calendarSlice from "./slicesTalentManagement/calendar.slice";

export const store = configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    employee: employeeSlice,
    overallPayroll: overallPayrollSlice,
    employeePayroll: employeePayrollSlice,
    company: companySlice,
    user: userSlice,
    contract: contractSlice,
    socialSecurity: socialSecuritySlice,
    endowment: endowmentSlice,
    familyInformation: familyInformationSlice,
    healthyLife: healthyLifeSlice,
    unfitness: unfitnessSlice,
    missingWork: missingWorkSlice,
    loanMoney: loanMoneySlice,
    payInMoney: payInMoneySlice,
    bonusService: bonusServiceSlice,
    liquidation: liquidationSlice,
    salaryIncrease: salaryIncreaseSlice,
    calendar: calendarSlice,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
