import { SignedIn, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="p-4 shadow-sm border flex justify-between">
      <div>Header</div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
export default Header;
