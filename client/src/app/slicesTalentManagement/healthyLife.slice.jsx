import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";


export const healthyLifeSlice = createSlice({
  name: "healthyLife",
  initialState: [],
  reducers: {
    setHealthyLife: (state, action) => {
      return action.payload;
    },
  },
});

export const getHealthyLifeByEmployeeIdThunk = (employeeId) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/healthy-life/employee/${employeeId}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setHealthyLife(res.data.healthyLifeByEmployee));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateHealthyLifeByIdThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/healthy-life/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(setHealthyLife(res.data.healthyLife));
      dispatch(getHealthyLifeByIdThunk(id));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getHealthyLifeByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/healthy-life/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setHealthyLife(res.data.healthyLife));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setHealthyLife } = healthyLifeSlice.actions;
export default healthyLifeSlice.reducer;
