import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const perPage = 4;

axios.defaults.baseURL = "https://66688fc4f53957909ff87f87.mockapi.io/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/advert");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  "contacts/toggleFavorite",
  async (camper, thunkAPI) => {
    try {
      const response = await axios.post(`/advert/${camper._id}`, {
        favorite: !camper.favorite,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
