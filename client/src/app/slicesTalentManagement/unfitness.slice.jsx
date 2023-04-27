import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/unfitness";

export const unfitnessSlice = createSlice({
  name: "unfitness",
  initialState: [],
  reducers: {
    setUnfitness: (state, action) => {
      return action.payload;
    },
  },
});

export const getUnfitnessThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setUnfitness(res.data.unfitness));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getUnfitnessByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/unfitness/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setUnfitness(res.data.unfitness));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createUnfitnessThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(getUnfitnessThunk());
      dispatch(setUnfitness(res.data.newUnfitness));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateUnfitnessThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/unfitness/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(getUnfitnessThunk());
      dispatch(setUnfitness(res.data.unfitness));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteUnfitnessByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/unfitness/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setUnfitness(res.data.unfitness));
      dispatch(getUnfitnessThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setUnfitness } = unfitnessSlice.actions;
export default unfitnessSlice.reducer;
