import axios from "axios";

export const getAllGrades = () => axios.get("/api/grades");
export const addStudent = (data) => axios.post("/api/student", data);
export const getAllStudents = () => axios.get("/api/student");
export const deleteStudent = (id) => axios.delete(`/api/student?id=${id}`);
export const getAttendanceList = (grade, month) =>
  axios.get("/api/attendance?grade=" + grade + "&month=" + month);
export const markAttendance = (data) => axios.post("/api/attendance", data);
export const markAbsent = (studentId, day, date) =>
  axios.delete(
    "/api/attendance?studentId=" + studentId + "&day=" + day + "&date=" + date
  );
export totalPresentCountByDay = (date,grade) => axios.get('api/dashboard')