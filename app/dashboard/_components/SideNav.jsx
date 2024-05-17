import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";
import Image from "next/image";
const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutIcon,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendence",
      icon: Hand,
      path: "/dashboard/attendence",
    },
    {
      id: 4,
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="border shadow-md h-screen">
      <div className="flex justify-evenly items-center p-4 mx-auto">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={40}
          height={40}
        />
        <h2 className='text-xl font-bold'>Welcome!</h2>
      </div>
      <hr className="mb-5"/>
    </div>
  );
};
export default SideNav;
