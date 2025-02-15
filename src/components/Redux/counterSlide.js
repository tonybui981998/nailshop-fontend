import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMenu } from "../Services/ServiceApi";
export const fetMenu = createAsyncThunk("counter/fetMenu", async () => {
  const getData = await getMenu();
  return getData;
});
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
    error: null,
    allMenu: [],
    clientSelectService: [],
    clientTotalPrice: 0,
  },
  reducers: {
    handleSelectService: (state, action) => {
      const selected = action.payload;
      const checkExist = state.clientSelectService.some(
        (s) => s.name === selected.name
      );
      if (checkExist) {
        state.clientSelectService = state.clientSelectService.filter(
          (s) => s.name !== selected.name
        );
      } else {
        state.clientSelectService.push(selected);
      }
    },
    handleGetTotalPrice: (state) => {
      state.clientTotalPrice = state.clientSelectService.reduce(
        (total, servies) => total + servies.price,
        0
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.allMenu = action.payload;
      })
      .addCase(fetMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { handleSelectService, handleGetTotalPrice } =
  counterSlice.actions;
export default counterSlice.reducer;
