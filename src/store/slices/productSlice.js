import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  isLoading: false,
  isError: false,
};

export const fetchAllData = createAsyncThunk(
  "product/fetchAllData",
  async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAllData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productData = action.payload;
    },
    [fetchAllData.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
