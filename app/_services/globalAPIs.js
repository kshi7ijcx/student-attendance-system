import axios from "axios";

export const getAllGrades = () => axios.get("/api/grades");
