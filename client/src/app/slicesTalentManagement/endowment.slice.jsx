import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

export const endowmentSlice = createSlice({
  name: "endowment",
  initialState: [],
  reducers: {
    setEndowment: (state, action) => {
      return action.payload;
    },
  },
});

export const getEndowmentByEmployeeIdThunk = (employeeId) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/endowment/employee/${employeeId}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setEndowment(res.data.endowmentByEmployee));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateEndowmentByIdThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/endowment/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(setEndowment(res.data.endowment));
      dispatch(getEndowmentByIdThunk(id));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getEndowmentByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/endowment/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setEndowment(res.data.endowment));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setEndowment } = endowmentSlice.actions;
export default endowmentSlice.reducer;
