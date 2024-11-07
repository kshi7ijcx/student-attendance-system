"use client";

import { Button } from "@/components/ui/button";
import GradeSelection from "./_components/GradeSelection";
import MonthSelector from "./_components/MonthSelector";
import { useState } from "react";
import { getAttendanceList } from "@/app/_services/globalAPIs";
import moment from "moment";
import AttendanceGrid from "./_components/AttendanceGrid";

const Attendance = () => {
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  const [attendanceList, setAttendanceList] = useState();

  const searchData = () => {
    const month = moment(selectedMonth).format("MM/YYYY");
    getAttendanceList(selectedGrade, month).then((resp) => {
      setAttendanceList(resp.data);
    });
  };

  return (
    <div className="p-7">
      <h2 className="text-2xl fond-bold">Attendance</h2>
      <div className="flex gap-5 my-5 p-5 border rounded-lg shadow-sm">
        <div className="flex gap-2 items-center">
          <label>Select Month: </label>
          <MonthSelector selectedMonth={(value) => setSelectedMonth(value)} />
        </div>
        <div className="flex gap-2 items-center">
          <label>Select Grade: </label>
          <GradeSelection selectedGrade={(value) => setSelectedGrade(value)} />
        </div>
        <Button onClick={() => searchData()}>Search</Button>
      </div>
      <AttendanceGrid
        attendanceList={attendanceList}
        selectedMonth={selectedMonth}
      />
    </div>
  );
};
export default Attendance;
