"use client";
import { useEffect, useState } from "react";
import AddNewStudent from "./_components/AddNewStudent";
import { getAllStudents } from "@/app/_services/globalAPIs";
import StudentTable from "./_components/StudentTable";

const Page = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    getAllStudents().then((resp) => setStudentList(resp.data));
  }, []);

  return (
    <div className="p-7">
      <div className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddNewStudent setStudentList={setStudentList}/>
      </div>
      <StudentTable studentList={studentList} setStudentList={setStudentList}/>
    </div>
  );
};
export default Page;
