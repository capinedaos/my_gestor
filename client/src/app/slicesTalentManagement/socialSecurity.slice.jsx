import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

export const socialSecuritySlice = createSlice({
  name: "socialSecurity",
  initialState: [],
  reducers: {
    setSocialSecurity: (state, action) => {
      return action.payload;
    },
  },
});

export const getSocialSecurityByEmployeeIdThunk =
  (employeeId) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(
        `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/social-security/employee/${employeeId}`,
        getConfig()
      )
      .then((res) => {
        dispatch(setSocialSecurity(res.data.socialSecurityEmployee));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

export const updateSocialSecurityByIdThunk = (data, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/social-security/${id}`,
      data,
      getConfig()
    )
    .then((res) => {
      dispatch(setSocialSecurity(res.data.socialSecurity));
      dispatch(getSocialSecurityByIdThunk(id));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const getSocialSecurityByIdThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://server-my-gestor-production.up.railway.app/api/v1/talent-management/social-security/${id}`,
      getConfig()
    )
    .then((res) => {
      dispatch(setSocialSecurity(res.data.socialSecurity));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setSocialSecurity } = socialSecuritySlice.actions;
export default socialSecuritySlice.reducer;
