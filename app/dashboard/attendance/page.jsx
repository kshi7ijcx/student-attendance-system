import { Button } from "@/components/ui/button";
import GradeSelection from "./_components/GradeSelection";
import MonthSelector from "./_components/MonthSelector";

const Attendance = () => {
  return (
    <div className="p-7">
      <h2 className="text-2xl fond-bold">Attendance</h2>
      <div className="flex gap-5 my-5 p-5 border rounded-lg shadow-sm">
        <div className="flex gap-2 items-center">
          <label>Select Month: </label>
          <MonthSelector />
        </div>
        <div className="flex gap-2 items-center">
          <label>Select Grade: </label>
          <GradeSelection />
        </div>
        <Button>Search</Button>
      </div>
    </div>
  );
};
export default Attendance;
