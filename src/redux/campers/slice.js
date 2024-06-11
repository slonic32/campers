import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, toggleFavorite } from "./operations";

function handlePending(state) {
  state.loading = true;
}

function handleRejected(state, action) {
  state.loading = false;
  state.error = action.payload;
}

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //get
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      //toggle favorite
      .addCase(toggleFavorite.pending, handlePending)
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map((obj) =>
          obj._id === action.payload._id
            ? { ...obj, favorite: !obj.favorite }
            : obj
        );
      })
      .addCase(toggleFavorite.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
