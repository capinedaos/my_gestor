import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "https://server-my-gestor-production.up.railway.app/api/v1/users";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const getUserThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setUser(res.data.users));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const createUserThunk = (data) => (dispatch) => {
  console.log(data);
  dispatch(setIsLoading(true));
  return axios
    .post(URL, data)
    .then((res) => {
      dispatch(getUserThunk());
      dispatch(setUser(res.data.users));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
