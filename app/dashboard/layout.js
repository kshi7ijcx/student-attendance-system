import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

const layout = ({ children }) => {
  return (
    <div>
      <div className="md:w-64 fixed md:block">
        <SideNav />
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
};
export default layout;
