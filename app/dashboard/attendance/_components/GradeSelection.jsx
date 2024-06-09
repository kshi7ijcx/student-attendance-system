'use client'
import { getAllGrades } from "@/app/_services/globalAPIs";
import { useState,useEffect } from "react";

const GradeSelection = ({selectedGrade}) => {
  const [grades, setGrades] = useState([]);

  const getGradesList = () => {
    getAllGrades().then((resp) => setGrades(resp.data));
  };

  useEffect(() => {
    getGradesList();
  }, []);

  return (
    <div>
      <select className="p-2 border rounded-lg" onChange={(e)=>selectedGrade(e.target.value)}>
        {grades.map((grade, idx) => (
          <option key={idx} value={grade.grade}>
            {grade.grade}
          </option>
        ))}
      </select>
    </div>
  );
};
export default GradeSelection;
