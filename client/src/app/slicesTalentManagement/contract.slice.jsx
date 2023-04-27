import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "https://server-my-gestor-production.up.railway.app/api/v1/talent-management/contract";

export const contractSlice = createSlice({
  name: "contract",
  initialState: [],
  reducers: {
    setContract: (state, action) => {
      return action.payload;
    },
  },
});

export const getContractThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setContract(res.data.contract));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getContractByEmployeeIdThunk = (employeeId) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/contract/all/${employeeId}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setContract(res.data.contractByEmployeeId));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateContractThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/contract/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(setContract(res.data.contract));
      dispatch(getContractByEmployeeIdThunk(res.data.contract.employeeId));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteContractByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/contract/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setContract(res.data.contract));
      dispatch(getContractThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getContractByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/contract/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setContract(res.data.contract));
      dispatch(getContractThunk());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createContractThunk = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data, getConfig())
    .then((res) => {
      dispatch(getContractThunk());
      dispatch(setContract(res.data.newContract));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setContract } = contractSlice.actions;
export default contractSlice.reducer;
