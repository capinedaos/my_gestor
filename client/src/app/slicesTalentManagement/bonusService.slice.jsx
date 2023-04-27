import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/bonus-service";

export const bonusServiceSlice = createSlice({
  name: "bonusService",
  initialState: [],
  reducers: {
    setBonusService: (state, action) => {
      return action.payload;
    },
  },
});

export const getBonusServiceThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setBonusService(res.data.bonusService));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createBonusServiceThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(getBonusServiceThunk());
      dispatch(setBonusService(res.data.newBonusService));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateBonusServiceThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/bonus-service/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(getBonusServiceThunk());
      dispatch(setBonusService(res.data.bonusService));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteBonusServiceByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/bonus-service/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setBonusService(res.data.bonusService));
      dispatch(getBonusServiceThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getBonusServiceByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/bonus-service/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setBonusService(res.data.bonusService));
      dispatch(getBonusServiceThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setBonusService } = bonusServiceSlice.actions;
export default bonusServiceSlice.reducer;
