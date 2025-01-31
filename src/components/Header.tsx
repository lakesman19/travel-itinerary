"use client";

import Link from "next/link";
import { Bell, ShoppingCart, Plus, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { image, icons } from "@/lib";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="border-b bg-white fixed w-full z-[10] top-0 left-0 h-[90px] border flex justify-center items-center capitalize">
      <div className=" h-16 flex items-center justify-between w-[95%]">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold bg-[#0A6DE4] h-[56px] w-[57px] rounded-[4px] flex justify-center items-center hover:opacity-90">
            <Image src={image.logo} alt="logo" />
          </Link>
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-[400px] bg-[#F0F2F5] px-4 py-2 rounded-lg focus:outline-none focus:ring-0  h-[56px] outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Link href="/home" className="text-[#647995] flex justify-center gap-2 flex-col items-center text-[16px] hover:opacity-90" onClick={() => router.push("/home")}>
              <Image src={icons.House} alt="logo" className="h-4 w-4" />
              <span>Home</span>
            </Link>

            <Link href="/dashboard" className="text-[#647995] flex justify-center gap-2 flex-col items-center text-[16px] hover:opacity-90" onClick={() => router.push("/dashboard")}>
              <Image src={icons.dashboard} alt="logo" className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>

            <Link href="/wallets" className="text-[#647995] flex justify-center gap-2 flex-col items-center text-[16px] hover:opacity-90" onClick={() => router.push("/wallets")}>
              <Image src={icons.wallet} alt="logo" className="h-4 w-4" />
              <span>Wallets</span>
            </Link>

            <Link href="/" className="text-[#647995] flex justify-center flex-col gap-2 items-center text-[16px] hover:opacity-90" onClick={() => router.push("/")}>
              <Image src={icons.Plan} alt="logo" className="h-4 w-4" />
              <span>Plan a Trip</span>
            </Link>

            <Link href="/commission" className="text-[#647995] flex justify-center gap-2 flex-col items-center text-[16px] hover:opacity-90" onClick={() => router.push("/commission")}>
              <Image src={icons.commission} alt="logo" className="h-4 w-4" />
              <span>Commission for Life</span>
            </Link>
          </div>
          <span className="border-r-1 border h-[30px] border-[#98A2B3]"></span>
          <div className="flex items-center gap-3">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>

            <Link href="/notifications" className="text-[#647995] flex justify-center gap-2 flex-col items-center text-[16px] hover:opacity-90" onClick={() => router.push("/notifications")}>
              <Image src={icons.Bell} alt="notification" className="h-4 w-4" />
              <span>Notification</span>
            </Link>

            <Link href="/carts" className="text-[#647995] flex justify-center gap-2 flex-col items-center text-[16px] hover:opacity-90" onClick={() => router.push("/carts")}>
              <Image src={icons.Basket} alt="carts" className="h-4 w-4" />
              <span>Carts</span>
            </Link>

            <Link href="/create" className="text-[#647995] flex justify-center gap-2 flex-col items-center text-[16px] hover:opacity-90" onClick={() => router.push("/create")}>
              <Image src={icons.Create} alt="create" className="h-4 w-4" />
              <span>Create</span>
            </Link>
            <span className="flex items-center gap-2">
              <Image src={image.person} alt="logo" className="h-[40px] w-[40px] rounded-full" />
              <ChevronDown size={16} color="#667185" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
