"use client"
import React from "react";
import { icons } from "../lib";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
Link;
const SideBar = () => {
  const sidebarLinks = [
    {
      href: "/activities",
      icon: icons.Road,
      label: "Activities",
    },
    {
      href: "/hotels",
      icon: icons.Buildings,
      label: "Hotels",
    },
    {
      href: "/flights",
      icon: icons.Airplane,
      label: "Flights",
    },
    {
      href: "/study",
      icon: icons.study,
      label: "Study",
    },
    {
      href: "/visa",
      icon: icons.visa,
      label: "Visa",
    },
    {
      href: "/medical",
      icon: icons.medical,
      label: "Medical",
    },
    {
      href: "/packages",
      icon: icons.packages,
      label: "Vacation Packages",
    },
  ];
  const pathname = usePathname()
  return (
    <div className="w-64 bg-white border  flex fixed flex-col justify-between border-r h-[calc(100vh-90px)] p-4 top-[100px] pb-16">
      <nav className="space-y-2">
        {sidebarLinks.map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`${pathname === href ? "flex items-center text-[16px] font-[500] text-[#647995] space-x-3 px-3 py-2 rounded-lg bg-gray-100" : "flex items-center text-[16px] font-[500] text-[#647995] space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100"}`}
          >
            <Image src={icon} alt="icons" className="h-4 w-4" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-8 p-4 bg-[#F0F2F5] rounded-lg">
        <div className="flex items-center space-x-2">
          <span className="text-white text-[16px] font-[500] h-[50px] flex justify-center items-center p-2 w-[50px] bg-[#0D6EFD] rounded-[4px]">Go</span>
          <span className="text-gray-600 text-[14px] font-[500]">Personal Account</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
