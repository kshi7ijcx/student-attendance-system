import { SignedIn, SignInButton, UserButton, SignedOut, SignIn } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignedOut>
        <SignIn forceRedirectUrl="/dashboard"/>
      </SignedOut>
    </div>
  );
};
export default Home;
