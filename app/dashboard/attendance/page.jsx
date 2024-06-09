import GradeSelection from "./_components/GradeSelection";
import MonthSelector from "./_components/MonthSelector";

const Attendance = () => {
  return (
    <div className="p-7">
      <h2 className="text-2xl fond-bold">Attendance</h2>
      <div>
        <MonthSelector />
        <GradeSelection />
      </div>
    </div>
  );
};
export default Attendance;
