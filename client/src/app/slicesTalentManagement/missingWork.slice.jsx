import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/missing-work";

export const missingWorkSlice = createSlice({
  name: "missingwork",
  initialState: [],
  reducers: {
    setMissingWork: (state, action) => {
      return action.payload;
    },
  },
});

export const getMissingWorkThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setMissingWork(res.data.missingWork));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createMissingWorkThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(getMissingWorkThunk());
      dispatch(setMissingWork(res.data.newMissingWork));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateMissingWorkThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/missing-work/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(getMissingWorkThunk());
      dispatch(setMissingWork(res.data.missingWork));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteMissingWorkByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/missing-work/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setMissingWork(res.data.missingWork));
      dispatch(getMissingWorkThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setMissingWork } = missingWorkSlice.actions;
export default missingWorkSlice.reducer;
