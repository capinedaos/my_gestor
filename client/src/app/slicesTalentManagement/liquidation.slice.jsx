import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/liquidation";

export const liquidationSlice = createSlice({
  name: "liquidation",
  initialState: [],
  reducers: {
    setLiquidation: (state, action) => {
      return action.payload;
    },
  },
});

export const getLiquidationThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setLiquidation(res.data.liquidation));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createLiquidationThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(getLiquidationThunk());
      dispatch(setLiquidation(res.data.newLiquidation));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateLiquidationThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/liquidation/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(getLiquidationThunk());
      dispatch(setLiquidation(res.data.liquidation));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteLiquidationByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/liquidation/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setLiquidation(res.data.liquidation));
      dispatch(getLiquidationThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getLiquidationByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/liquidation/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setLiquidation(res.data.liquidation));
      dispatch(getLiquidationThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setLiquidation } = liquidationSlice.actions;
export default liquidationSlice.reducer;
