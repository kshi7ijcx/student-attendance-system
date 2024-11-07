import axios from "axios";

export const getAllGrades = () => axios.get("/api/grades");
export const addStudent = (data) => axios.post("/api/student", data);
export const getAllStudents = () => axios.get("/api/student");
export const deleteStudent = (id) => axios.delete(`/api/student?id=${id}`);
export const getAttendanceList = (grade, month) =>
  axios.get("/api/attendance?grade=" + grade + "&month=" + month);
export const markAttendance = (data) => axios.post("/api/attendance", data);
