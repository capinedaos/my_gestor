import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/overall-payroll";

export const overallPayrollSlice = createSlice({
  name: "overallPayroll",
  initialState: [],
  reducers: {
    setOverallPayroll: (state, action) => {
      return action.payload;
    },
  },
});

export const getOverallPayrollThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setOverallPayroll(res.data.overallPayroll));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createOverallPayrollThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(setOverallPayroll(res.data.newOverallPayroll));
      dispatch(getOverallPayrollThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateOverallPayrollThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/overall-payroll/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(getOverallPayrollThunk());
      dispatch(setOverallPayroll(res.data.overallPayroll));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const finishPayrollThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/overall-payroll/finish-payroll/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(getOverallPayrollThunk());
      dispatch(setOverallPayroll(res.data.overallPayroll));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getOverallPayrollByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/overall-payroll/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setOverallPayroll(res.data.overallPayroll));
      dispatch(getOverallPayrollThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteOverallPayrollByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/overall-payroll/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setOverallPayroll(res.data.overallPayroll));
      dispatch(getOverallPayrollThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setOverallPayroll } = overallPayrollSlice.actions;
export default overallPayrollSlice.reducer;
