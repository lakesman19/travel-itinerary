"use client"
import Link from "next/link";
import { Bell, ShoppingCart, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { image, icons } from "@/lib";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="border-b bg-white fixed w-full z-[10] top-0 left-0 h-[90px] border flex justify-center items-center capitalize">
      {/* <p className="text-[red] text-3xl">tdddgd</p> */}
      <div className=" h-16 flex items-center justify-between w-[95%]">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold bg-[#0A6DE4] h-[56px] w-[57px] rounded-[4px] flex justify-center items-center ">
            <Image src={image.logo} alt="logo" />
          </Link>
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-64 bg-[#F0F2F5] px-4 py-2 rounded-lg focus:outline-none focus:ring-0  h-[56px] outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">

          <div className="flex items-center gap-3">
            <div className="text-[#647995] flex justify-center flex-col  items-center text-[16px] hover:text-[#647995]">
              <Button variant="ghost" size="icon">
                <Image src={icons.House} alt="logo" className="h-4 w-4" />

              </Button>
              <span>Home</span>
            </div>
            <div className="text-[#647995] flex justify-center flex-col  items-center text-[16px] hover:text-[#647995]">
              <Button variant="ghost" size="icon">
                <Image src={icons.dashboard} alt="logo" className="h-4 w-4" />
              </Button>
              <span>Dashboard</span>
            </div>
            <div className="text-[#647995] flex justify-center flex-col  items-center text-[16px] hover:text-[#647995]">
              <Button variant="ghost" size="icon">
                <Image src={icons.wallet} alt="logo" className="h-4 w-4" />

              </Button>
              <span>wallets</span>
            </div>
            <div className="text-[#647995] flex justify-center flex-col  items-center text-[16px] hover:text-[#647995]">
              <Button variant="ghost" size="icon" onClick={() => router.push("/")}>
                <Image src={icons.Plan} alt="logo" className="h-4 w-4" />


              </Button>
              <span>plan a trip</span>
            </div>
            <div className="text-[#647995] flex justify-center flex-col  items-center text-[16px] hover:text-[#647995]">
              <Button variant="ghost" size="icon">
                <Image src={icons.commission} alt="logo" className="h-4 w-4" />



              </Button>
              <span>Commission for life</span>
            </div>

          </div>

          <span className="border-r-1 border h-[30px] border-[#98A2B3]"></span>
          <div className="flex items-center gap-3">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
            <div className="text-[#647995] flex justify-center flex-col  items-center text-[16px] hover:text-[#647995]">
              <Button variant="ghost" size="icon">
                <Image src={icons.Bell} alt="logo" className="h-4 w-4" />
              </Button>
              <span>Notification</span>
            </div>
            <div className="text-[#647995] flex justify-center flex-col  items-center text-[16px] hover:text-[#647995]">
              <Button variant="ghost" size="icon">
                <Image src={icons.Basket} alt="logo" className="h-4 w-4" />
              </Button>
              <span>Carts</span>
            </div>
            <div className="text-[#647995] flex justify-center flex-col  items-center text-[16px] hover:text-[#647995]" >
              <Button variant="ghost" size="icon">
                <Image src={icons.Create}
                  alt="logo" className="h-4 w-4" />
              </Button>
              <span>Create</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
