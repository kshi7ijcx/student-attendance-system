import axios from "axios";

export const getAllGrades = () => axios.get("/api/grades");
export const addStudent = (data) => axios.post("/api/student",data);