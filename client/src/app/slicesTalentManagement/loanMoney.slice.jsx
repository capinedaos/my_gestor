import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "http://localhost:4000/api/v1/talent-management/loan-money";

export const loanMoneySlice = createSlice({
  name: "loanMoney",
  initialState: [],
  reducers: {
    setLoanMoney: (state, action) => {
      return action.payload;
    },
  },
});

export const payLoanByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `http://localhost:4000/api/v1/talent-management/loan-money/pay-loan/${id}`,
      getConfig(),
      console.log(getConfig())
    )
    .then((res) => {
      dispatch(getLoanMoneyThunk());
      dispatch(setLoanMoney(res.data.loanMoney));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getLoanMoneyThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setLoanMoney(res.data.loanMoney));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createLoanMoneyThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(getLoanMoneyThunk());
      dispatch(setLoanMoney(res.data.newLoanMoney));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateLoanMoneyThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `http://localhost:4000/api/v1/talent-management/loan-money/${id}`,
      data,
      getConfig(),
      console.log(getConfig())
    )
    .then((res) => {
      dispatch(getLoanMoneyThunk());
      dispatch(setLoanMoney(res.data.loanMoney));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteLoanMoneyByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `http://localhost:4000/api/v1/talent-management/loan-money/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setLoanMoney(res.data.loanMoney));
      dispatch(getLoanMoneyThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getLoanMoneyByIdThunk = (id) => (dispatch) => {
  console.log(id);
  dispatch(setIsLoading(true));
  return axios
    .get(
      `http://localhost:4000/api/v1/talent-management/loan-money/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setLoanMoney(res.data.loanMoneyById));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setLoanMoney } = loanMoneySlice.actions;
export default loanMoneySlice.reducer;
