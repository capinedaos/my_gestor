import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "http://localhost:4000/api/v1/talent-management/employee-payroll";

export const employeePayrollSlice = createSlice({
  name: "employeePayroll",
  initialState: [],
  reducers: {
    setEmployeePayroll: (state, action) => {
      return action.payload;
    },
  },
});

export const getEmployeePayrollThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setEmployeePayroll(res.data.employeePayroll));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createEmployeePayrollThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(getEmployeePayrollThunk());
      dispatch(setEmployeePayroll(res.data.newEmployeePayroll));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getEmployeePayrollByOverallPayrollId = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `http://localhost:4000/api/v1/talent-management/employee-payroll/overall-payroll${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setEmployeePayroll(res.data.employeePayroll));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteEmployeePayrollByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `http://localhost:4000/api/v1/talent-management/employee-payroll/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setEmployeePayroll(res.data.employeePayroll));
      dispatch(getEmployeePayrollThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setEmployeePayroll } = employeePayrollSlice.actions;
export default employeePayrollSlice.reducer;
