import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    setEmployee: (state, action) => {
      // console.log(action.payload);
      return action.payload;
    },
  },
});

export const createEmployeeThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(setEmployee(res.data.newEmployee));
      dispatch(getEmployeeThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getEmployeeThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setEmployee(res.data.employee));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getEmployeeByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee/${id}`,
      getConfig()
    )
    .then(async (res) => {
      await dispatch(setEmployee(res.data.employeeById));
      console.log(res.data.employeeById);
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateEmployeeThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(getEmployeeThunk());
      dispatch(setEmployee(res.data.employee));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteEmployeeByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/employee/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setEmployee(res.data.employee));
      dispatch(getEmployeeThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
