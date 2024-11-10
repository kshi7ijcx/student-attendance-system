"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import MonthSelector from "./attendance/_components/MonthSelector";
import GradeSelection from "./attendance/_components/GradeSelection";
import { useState } from "react";
import { getAttendanceList } from "../_services/globalAPIs";
import moment from "moment";
import { useEffect } from "react";
import StatusList from "./_components/StatusList";

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  const [attendanceList, setAttendanceList] = useState();

  const getStudentAttendance = () => {
    getAttendanceList(
      selectedGrade,
      moment(selectedMonth).format("MM/yyyy")
    ).then((resp) => {
      setAttendanceList(resp.data);
    });
  };

  useEffect(() => {
    getStudentAttendance();
  }, [selectedMonth, selectedGrade]);

  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <div className="flex items-center gap-4">
          <MonthSelector selectedMonth={(value) => setSelectedMonth(value)} />
          <GradeSelection selectedGrade={(value) => setSelectedGrade(value)} />
        </div>
      </div>
      <StatusList attendanceList={attendanceList} />
    </div>
  );
};
export default Dashboard;
