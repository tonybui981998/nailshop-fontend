import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllStaff, getMenu, getBookingTime } from "../Services/ServiceApi";
import dayjs from "dayjs";
import { format } from "date-fns";

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

// get all bookingTime
export const fetBookingTime = createAsyncThunk(
  "counter/fetBookingTime",
  async () => {
    const BookingTimes = await getBookingTime();
    return BookingTimes;
  }
);
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
    clientSelectDate: null,
    clientTotalTimeService: [],
    StaffTimeSlot: [],
    clientPickingStartTime: null,
    serviceEndTime: null,
    allBookingTime: [],
  },
  reducers: {
    handleResetTimeSlot: (state) => {
      state.StaffTimeSlot = [];
    },

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
    handleResetBookiingInfor: (state) => {
      state.clientSelectDate = null;
      state.clientTotalPrice = 0;
      state.clientSelectService = [];
      state.clientPickingStartTime = null;
      state.serviceEndTime = null;
    },
    handleGetStaffWorkingDay: (state) => {
      const getCurrentday = new Date().toLocaleDateString("en-US", {
        weekday: "long",
      });
      const currentDate = new Date().toISOString().split("T")[0];
      state.staffSchedules = state.allStaffs.filter((staff) => {
        if (staff.isActive === "available") {
          const customStaff = staff.customerScheduleDtos?.some(
            (s) => s.date.slice(0, 10) === currentDate && s.isDayOff !== true
          );
          if (customStaff) {
            return true;
          }
          const isDayOf = staff.customerScheduleDtos?.some(
            (s) => s.date.slice(0, 10) === currentDate && s.isDayOff === true
          );
          if (isDayOf) {
            return false;
          }
          const staffSchedule = staff.staffScheduleDtos?.some(
            (s) => s.dayOfWeek === getCurrentday
          );
          return staffSchedule;
        }
      });
    },
    // client select future date
    handleClientSelectDayStaff: (state, action) => {
      const getCurrentday = dayjs(action.payload);
      const selectedDay = getCurrentday.format("dddd");
      const currentDate = getCurrentday.format("YYYY-MM-DD");
      state.staffSchedules = state.allStaffs.filter((staff) => {
        if (staff.isActive === "available") {
          const customStaff = staff.customerScheduleDtos?.some(
            (s) => s.date.slice(0, 10) === currentDate && s.isDayOff !== true
          );
          if (customStaff) {
            return true;
          }
          const hasisdayoff = staff.customerScheduleDtos?.some(
            (s) => s.date.slice(0, 10) === currentDate && s.isDayOff === true
          );
          if (hasisdayoff) {
            return false;
          }
          const staffSchedule = staff.staffScheduleDtos?.some(
            (s) => s.dayOfWeek === selectedDay
          );
          return staffSchedule;
        }
      });
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
    // generate time slot
    handleGenerateTimeSlot: (state) => {
      if (!state.clientSelectDate || !state.clientSelectStaff) return;

      const selectedDate = dayjs(state.clientSelectDate);
      const selectedDateStr = selectedDate.format("YYYY-MM-DD");
      const selectedDayName = selectedDate.format("dddd");
      const staff = state.clientSelectStaff;

      const customSchedule = staff.customerScheduleDtos?.find(
        (s) => s.date.slice(0, 10) === selectedDateStr
      );

      if (customSchedule?.isDayOff === true) {
        state.StaffTimeSlot = [];
        return;
      }

      let startHour, startMinute, endHour, endMinute;

      if (customSchedule && customSchedule.isDayOff === false) {
        startHour = parseInt(customSchedule.startTime.split(":")[0], 10);
        startMinute = parseInt(customSchedule.startTime.split(":")[1], 10);
        endHour = parseInt(customSchedule.endTime.split(":")[0], 10);
        endMinute = parseInt(customSchedule.endTime.split(":")[1], 10);
      } else {
        const defaultSchedule = staff.staffScheduleDtos?.find(
          (s) => s.dayOfWeek === selectedDayName
        );

        if (!defaultSchedule) {
          state.StaffTimeSlot = [];
          return;
        }

        startHour = parseInt(defaultSchedule.startTime.split(":")[0], 10);
        startMinute = parseInt(defaultSchedule.startTime.split(":")[1], 10);
        endHour = parseInt(defaultSchedule.endTime.split(":")[0], 10);
        endMinute = parseInt(defaultSchedule.endTime.split(":")[1], 10);
      }

      const staffEndMinutes = endHour * 60 + endMinute;
      const serviceDuration = state.clientTotalTimeService;

      let getCurrentTime = selectedDate
        .hour(startHour)
        .minute(startMinute)
        .second(0);
      const timeSlot = [];

      while (true) {
        const currentMinutes =
          getCurrentTime.hour() * 60 + getCurrentTime.minute();
        const endingMinutes = currentMinutes + serviceDuration;

        if (endingMinutes > staffEndMinutes) break;

        timeSlot.push(getCurrentTime.format("HH:mm"));
        getCurrentTime = getCurrentTime.add(15, "minute");
      }

      const bookedSlots = state.allBookingTime
        .filter(
          (booking) =>
            dayjs(booking.bookingDate).format("YYYY-MM-DD") ===
              selectedDateStr && booking.staffId === staff.id
        )
        .map((booking) => ({
          startTime: dayjs(booking.startTime, "HH:mm:ss").format("HH:mm"),
          endTime: dayjs(booking.endTime, "HH:mm:ss").format("HH:mm"),
        }));

      state.StaffTimeSlot = timeSlot.filter((slot) => {
        return !bookedSlots.some(
          (booked) => slot >= booked.startTime && slot < booked.endTime
        );
      });
    },

    handleClientPickingTime: (state, action) => {
      state.clientPickingStartTime = action.payload;
      const [hour, minute] = state.clientPickingStartTime
        .split(":")
        .map(Number);
      const startTime = hour * 60 + minute;
      const getEdingTime = startTime + state.clientTotalTimeService;
      const convertTohour = dayjs()
        .startOf("day")
        .add(getEdingTime, "minute")
        .format("HH:mm");

      state.serviceEndTime = convertTohour;
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
      })
      .addCase(fetBookingTime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetBookingTime.fulfilled, (state, action) => {
        state.loading = false;
        state.allBookingTime = action.payload;
      })
      .addCase(fetBookingTime.rejected, (state, action) => {
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
  handleGenerateTimeSlot,
  handleClientSelectDayStaff,
  handleClientPickingTime,
  handleResetBookiingInfor,
  handleResetTimeSlot,
} = counterSlice.actions;
export default counterSlice.reducer;
