import AddNewStudent from "./_components/AddNewStudent";

const page = () => {
  return (
    <div className="p-7">
      <div className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddNewStudent />
      </div>
    </div>
  );
};
export default page;
