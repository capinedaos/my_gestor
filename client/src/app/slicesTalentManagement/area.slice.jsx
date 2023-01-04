import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "../slices/isLoading.slice";
import getConfig from "../../utils/getConfig";

const URL = "http://localhost:4000/api/v1/talent-management/area";

export const areaSlice = createSlice({
  name: "area",
  initialState: [],
  reducers: {
    setArea: (state, action) => {
      return action.payload;
    },
  },
});

export const getAreaThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setArea(res.data.area));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setArea } = areaSlice.actions;
export default areaSlice.reducer;
