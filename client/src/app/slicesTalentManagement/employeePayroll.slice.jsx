import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee-payroll";

export const employeePayrollSlice = createSlice({
  name: "employeePayroll",
  initialState: [],
  reducers: {
    setEmployeePayroll: (state, action) => {
      return action.payload;
    },
  },
});

export const createEmployeePayrollThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(setEmployeePayroll(res.data.newEmployeePayroll));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getEmployeePayrollByOverallPayrollId =
  (overallPayrollId) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(
        `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee-payroll/overall-payroll/${overallPayrollId}`,
        getConfig()
      )
      .then((res) => {
        dispatch(
          setEmployeePayroll(res.data.employeePayrollByOverallPayrollId)
        );
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

export const updateEmployeePayrollByIdThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee-payroll/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(setEmployeePayroll(res.data.employeePayroll));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteEmployeePayrollByIdThunk =
  (idEmployeePayroll, idOverallPayroll) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .delete(
        `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee-payroll/${idEmployeePayroll}`,
        getConfig()
      )
      .then((res) => {
        dispatch(setEmployeePayroll(res.data.employeePayroll));
        dispatch(getEmployeePayrollByOverallPayrollId(idOverallPayroll));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

export const getEmployeePayrollByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee-payroll/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setEmployeePayroll(res.data.employeePayrollById));
    })

    .finally(() => dispatch(setIsLoading(false)));
};

export const getEmployeePayrollByEmployeeIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee-payroll/detail-payroll/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setEmployeePayroll(res.data.employeePayrollByEmployeeId));
    })

    .finally(() => dispatch(setIsLoading(false)));
};

export const { setEmployeePayroll } = employeePayrollSlice.actions;
export default employeePayrollSlice.reducer;
