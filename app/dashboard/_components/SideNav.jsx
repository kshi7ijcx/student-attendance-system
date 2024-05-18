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
    <div className="border shadow-md h-screen p-6">
      <Image src={"/logo.svg"} alt="logo" width={180} height={50} />
      <hr className="my-5" />
      {menuList.map((item, idx) => (
        <h2
          key={idx}
          className="flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-black hover:text-white cursor-pointer rounded-xl my-2"
        >
          <item.icon />
          {item.name}
        </h2>
      ))}
    </div>
  );
};
export default SideNav;
