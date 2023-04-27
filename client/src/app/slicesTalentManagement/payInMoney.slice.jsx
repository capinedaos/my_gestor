import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

export const payInMoneySlice = createSlice({
  name: "payInMoney",
  initialState: [],
  reducers: {
    setPayInMoney: (state, action) => {
      return action.payload;
    },
  },
});

export const getPayInMoneyByLoanMoneyIdThunk = (loanMoneyId) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/pay-in-money/${loanMoneyId}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setPayInMoney(res.data.payInMoney));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setPayInMoney } = payInMoneySlice.actions;
export default payInMoneySlice.reducer;
