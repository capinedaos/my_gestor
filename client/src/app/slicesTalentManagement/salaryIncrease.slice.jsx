import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "http://localhost:4000/api/v1/talent-management/salary-increase";

export const salaryIncreaseSlice = createSlice({
  name: "salaryIncrease",
  initialState: [],
  reducers: {
    setSalaryIncrease: (state, action) => {
      return action.payload;
    },
  },
});

export const getSalaryIncreaseByEmployeeIdThunk =
  (employeeId) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(
        `http://localhost:4000/api/v1/talent-management/salary-increase/employee/${employeeId}`,
        getConfig()
      )
      .then((res) => {
        dispatch(setSalaryIncrease(res.data.salaryIncrease));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

export const deleteSalaryIncreaseByIdThunk = (id, employeeId) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `http://localhost:4000/api/v1/talent-management/salary-increase/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setSalaryIncrease(res.data.salaryIncrease));
      dispatch(getSalaryIncreaseByEmployeeIdThunk(employeeId));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createSalaryIncreaseThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(getSalaryIncreaseByEmployeeIdThunk(id));
      dispatch(setSalaryIncrease(res.data.newSalaryIncrease));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setSalaryIncrease } = salaryIncreaseSlice.actions;
export default salaryIncreaseSlice.reducer;
