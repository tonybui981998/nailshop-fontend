import React from "react";
import SelectStaffHeader from "../../Booking/SelectStaff/SelectStaffHeader/SelectStaffHeader";
import SlectTImeHeader from "../../Booking/SelectTime/SelectTimeHeader/SlectTImeHeader";
import SelectTimeTable from "../../Booking/SelectTime/SelectTimeTable/SelectTimeTable";

const SelectTimePage = () => {
  return (
    <>
      <SlectTImeHeader />
      <SelectTimeTable />
    </>
  );
};

export default SelectTimePage;
