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
    // client select future date
    handleClientSelectDayStaff: (state, action) => {
      const getCurrentday = dayjs(action.payload);
      const selectedDay = getCurrentday.format("dddd");
      state.staffSchedules = state.allStaffs.filter((staff) =>
        staff.staffScheduleDtos.some((s) => s.dayOfWeek === selectedDay)
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
    // generate time slot
    handleGenerateTimeSlot: (state) => {
      if (!state.clientSelectDate || !state.clientSelectStaff) {
        console.log("missing date or staff selection");
        return;
      }

      // 🛑 Chuyển ngày khách chọn sang định dạng chuẩn YYYY-MM-DD để so sánh
      const selectedDate = dayjs(state.clientSelectDate).format("YYYY-MM-DD");
      console.log("Selected Date:", selectedDate);

      // 🛑 Tìm ngày làm việc của nhân viên trong staffScheduleDtos
      const checkStaffWorkingDay =
        state.clientSelectStaff.staffScheduleDtos.find(
          (s) => s.dayOfWeek === dayjs(state.clientSelectDate).format("dddd")
        );

      if (!checkStaffWorkingDay) {
        state.StaffTimeSlot = [];
        console.log("No working schedule found for this staff on this date.");
        return;
      }

      // 🛑 Lấy giờ bắt đầu & kết thúc của nhân viên từ staffScheduleDtos
      const startHour = parseInt(
        checkStaffWorkingDay.startTime.split(":")[0],
        10
      );
      const endHour = parseInt(checkStaffWorkingDay.endTime.split(":")[0], 10); // Đổi dấu `;` thành `:`

      // 🛑 Tạo danh sách slot thời gian 15 phút
      let getCurrentTime = dayjs().hour(startHour).minute(0);
      const timeSlot = [];

      while (getCurrentTime.hour() < endHour) {
        timeSlot.push(getCurrentTime.format("HH:mm"));
        getCurrentTime = getCurrentTime.add(15, "minute");
      }

      console.log("Generated Time Slots:", timeSlot);

      // 🛑 **Lọc danh sách booking từ database theo ngày & nhân viên**
      const bookedSlots = state.allBookingTime
        .filter(
          (booking) =>
            dayjs(booking.bookingDate).format("YYYY-MM-DD") === selectedDate &&
            booking.staffId === state.clientSelectStaff.id
        )
        .map((booking) => ({
          startTime: dayjs(booking.startTime, "HH:mm:ss").format("HH:mm"),
          endTime: dayjs(booking.endTime, "HH:mm:ss").format("HH:mm"),
        }));

      console.log("Booked Slots:", bookedSlots);

      // 🛑 **Loại bỏ các slot đã bị đặt trước**
      state.StaffTimeSlot = timeSlot.filter((slot) => {
        return !bookedSlots.some(
          (booked) => slot >= booked.startTime && slot < booked.endTime
        );
      });

      console.log("Available Slots:", state.StaffTimeSlot);
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
} = counterSlice.actions;
export default counterSlice.reducer;
