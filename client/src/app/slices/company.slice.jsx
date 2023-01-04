import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "http://localhost:4000/api/v1/company";

export const companySlice = createSlice({
  name: "company",
  initialState: [],
  reducers: {
    setCompany: (state, action) => {
      return action.payload;
    },
  },
});

export const getCompanyThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setCompany(res.data.company));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createCompanyThunk = (data) => (dispatch) => {
  console.log(data);
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(getCompanyThunk());
      dispatch(setCompany(res.data.company));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setCompany } = companySlice.actions;
export default companySlice.reducer;
