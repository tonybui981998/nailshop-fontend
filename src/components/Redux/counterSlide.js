import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllStaff, getMenu } from "../Services/ServiceApi";

// get all menu
export const fetMenu = createAsyncThunk("counter/fetMenu", async () => {
  const getData = await getMenu();
  return getData;
});
// get all staff
export const fetStaff = createAsyncThunk("counter/fetStaff", async () => {
  const getStaff = await getAllStaff();
  return getStaff;
});
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
    error: null,
    allMenu: [],
    clientSelectService: [],
    clientTotalPrice: 0,
    allStaffs: [],
    staffSchedules: [],
    clientSelectStaff: [],
    clientSelectDate: [],
    clientTotalTimeService: [],
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
    handleGetStaffWorkingDay: (state) => {
      const getCurrentday = new Date().toLocaleDateString("en-US", {
        weekday: "long",
      });
      state.staffSchedules = state.allStaffs.filter((staff) =>
        staff.staffScheduleDtos.some((s) => s.dayOfWeek === getCurrentday)
      );
    },
    handleClientSelectStaff: (state, action) => {
      state.clientSelectStaff = action.payload;
    },
    handleClientSelectDate: (state, action) => {
      state.clientSelectDate = action.payload;
    },
    handleClientTotalTimeService: (state) => {
      state.clientTotalTimeService = state.clientSelectService.reduce(
        (total, time) => total + Number(time.duration),
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
      })
      .addCase(fetStaff.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetStaff.fulfilled, (state, action) => {
        state.loading = false;
        state.allStaffs = action.payload;
      })
      .addCase(fetStaff.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  handleSelectService,
  handleGetTotalPrice,
  handleGetStaffWorkingDay,
  handleClientSelectStaff,
  handleClientSelectDate,
  handleClientTotalTimeService,
} = counterSlice.actions;
export default counterSlice.reducer;
