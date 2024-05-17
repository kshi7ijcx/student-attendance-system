import { SignedIn, SignInButton, UserButton, SignedOut } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};
export default Home;
