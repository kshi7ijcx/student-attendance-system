import { SignedIn, UserButton } from "@clerk/nextjs";
import MonthSelector from "./attendance/_components/MonthSelector";
import GradeSelection from "./attendance/_components/GradeSelection";

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedGrade, setSelectedGrade] = useState();

  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <div className="flex items-center gap-4">
          <MonthSelector selectedMonth={setSelectedMonth} />
          <GradeSelection selectedGrade={setSelectedGrade} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
