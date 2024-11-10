import moment from "moment";
import { useState, useEffect } from "react";
import Card from "./Card";
import { GraduationCap, TrendingDown, TrendingUp } from "lucide-react";

const StatusList = ({ attendanceList }) => {
  const [totalStudent, setTotalStudents] = useState(0);
  const [presentPerc, setPresentPerc] = useState(0);

  const getUniqueRecord = (attendanceList) => {
    const uniqueRecord = [];
    const existingUser = new Set();
    attendanceList?.forEach((record) => {
      if (!existingUser.has(record.studentId)) {
        existingUser.add(record.studentId);
        uniqueRecord.push(record);
      }
    });
    return uniqueRecord;
  };

  useEffect(() => {
    if (attendanceList) {
      const totalSt = getUniqueRecord(attendanceList);
      setTotalStudents(totalSt.length);
      const today = moment().format("D");
      const PresentPrec =
        (attendanceList.length / (totalSt.length * Number(today))) * 100;
      setPresentPerc(PresentPrec)
    }
  }, [attendanceList]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
      <Card
        icon={<GraduationCap />}
        title="Total Student"
        value={totalStudent}
      />
      <Card
        icon={<TrendingUp />}
        title="Total Present"
        value={presentPerc.toFixed(1)+"%"}
      />
      <Card
        icon={<TrendingDown />}
        title="Total Absent"
        value={(100 - presentPerc).toFixed(1)+"%"}
      />
    </div>
  );
};
export default StatusList;
