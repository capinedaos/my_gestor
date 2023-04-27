import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

export const familyInformationSlice = createSlice({
  name: "familyInformation",
  initialState: [],
  reducers: {
    setFamilyInformation: (state, action) => {
      return action.payload;
    },
  },
});

export const getFamilyInformationByEmployeeIdThunk =
  (employeeId) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(
        `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/family-information/employee/${employeeId}`,
        getConfig()
      )
      .then((res) => {
        dispatch(setFamilyInformation(res.data.familyInformationByEmployee));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

export const updateFamilyInformationByIdThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/family-information/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(setFamilyInformation(res.data.familyInformation));
      dispatch(getFamilyInformationByIdThunk(id));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getFamilyInformationByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/family-information/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setFamilyInformation(res.data.familyInformation));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setFamilyInformation } = familyInformationSlice.actions;
export default familyInformationSlice.reducer;
