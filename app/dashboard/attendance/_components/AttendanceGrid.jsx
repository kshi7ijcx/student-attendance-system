import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import moment from "moment";
import { markAbsent, markAttendance } from "@/app/_services/globalAPIs";
import { toast } from "sonner";

const AttendanceGrid = ({ attendanceList, selectedMonth }) => {
  const [rowData, setRowData] = useState();
  const [colDefs, setColDefs] = useState([
    { field: "studentId", filter:true },
    { field: "name", filder:true },
  ]);

  const getUniqueRecord = () => {
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

  const onMarkAttendance = (day, studentId, presentStatus) => {
    const date = moment(selectedMonth).format("MM/YYYY");

    if (presentStatus) {
      const data = {
        day: day,
        studentId: studentId,
        present: presentStatus,
        date: date,
      };
      markAttendance(data).then((resp) => {
        toast(`StudentId: ${studentId}, Marked Present`);
      });
    } else {
      console.log(day, studentId, presentStatus, date);
      markAbsent(studentId, day, date).then((resp) => {
        console.log(studentId, day, date);
        toast(`StudentId: ${studentId}, Marked Absent`);
      });
    }
  };

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const numberOfDays = daysInMonth(
    moment(selectedMonth).format("yyyy"),
    moment(selectedMonth).format("MM")
  );

  const daysArray = Array.from({ length: numberOfDays }, (_, i) => i + 1);

  useEffect(() => {
    if (attendanceList) {
      const userList = getUniqueRecord();
      console.log(userList);
      setRowData(userList);
      daysArray.forEach((date) => {
        setColDefs((prevData) => [
          ...prevData,
          { field: date.toString(), width: 50, editable: true },
        ]);
        userList.forEach((obj) => {
          obj[date] = isPresent(obj.studentId, date);
        });
      });
    }
  }, [attendanceList]);

  const isPresent = (studentId, day) => {
    const result = attendanceList.find(
      (item) => item.day == day && item.studentId == studentId
    );
    return result ? true : false;
  };

  return (
    <div>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          columnDefs={colDefs}
          rowData={rowData}
          onCellValueChanged={(e) =>
            onMarkAttendance(e.colDef.field, e.data.studentId, e.newValue)
          }
        />
      </div>
    </div>
  );
};
export default AttendanceGrid;
