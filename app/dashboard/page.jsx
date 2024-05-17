import { SignedIn,UserButton } from "@clerk/nextjs";

const Dashboard = () => {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      Dashboard
    </div>
  );
};
export default Dashboard;
