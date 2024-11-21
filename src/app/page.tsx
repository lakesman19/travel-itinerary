"use client"
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { TripCard } from "@/components/TripCard";
import Image from "next/image";
import { ArrowLeft, MoreHorizontal, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { image } from "@/lib";
import FlightCard from "@/components/FlightCard";
import { useState } from "react";
import HotelCards from "@/components/HotelCards";
import Activitiescard from "@/components/Activitiescard";
export default function Home() {
  const sampleFlights = [
    {
      id: "AA-829",
      airline: "American Airlines",
      from: "LOS",
      to: "SIN",
      departureDate: "Sun, 20 Aug",
      departureTime: "08:35",
      arrivalDate: "Sun, 20 Aug",
      arrivalTime: "09:55",
      duration: "1h 45m",
      price: 123450,
      class: "First Class" as const,
    },
    {
      id: "AA-830",
      airline: "American Airlines",
      from: "LOS",
      to: "SIN",
      departureDate: "Sun, 20 Aug",
      departureTime: "08:35",
      arrivalDate: "Sun, 20 Aug",
      arrivalTime: "09:55",
      duration: "1h 45m",
      price: 123450,
      class: "First Class" as const,
    },
  ];
  const [flights, setFlights] = useState<any>(sampleFlights);

  const handleAddFlight = () => {
    console.log("Add flight clicked");
  };

  const handleRemoveFlight = (id: string) => {
    setFlights(flights.filter((flight: any) => flight.id !== id));
  };
  return (

    <div className="bg-white h-full  w-[95%] p-5 flex  flex-col gap-6 ">

      <div className="flex justify-between items-start banner mb-6 w-full h-[200px]  " >
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-5 w-5" />
        </Button>

      </div>
      <div className="flex justify-between ">
        <div className="">
          <div className="flex items-center p-2 bg-[#FEF4E6] w-[230px] text-sm text-[#7A4504]">
            <span>{"21 March 2024"}</span>
            <span>→</span>
            <span>{"21 April 2024"}</span>
          </div>
          <h2 className="text-2xl font-bold">{"Bahamas Family Trip"}</h2>
          <p className="text-gray-600">{"New York, United States of America"} · {"Solo Trip"}</p>

        </div>
        <div className="flex flex-col gap-6">
          <div className="flex space-x-2">
            <Button variant="ghost" className="bg-[#E7F0FF] w-[150px] ">
              <User className="h-10 w-10" color="#0D6EFD" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Image src={image.person} alt='logo' className="h-[40px] w-[40px] rounded-full" />

            <span className="border-[#E7F0FF] border-[2px] h-[40px] w-[40px]  flex justify-center items-center rounded-full"><Settings /></span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8 w-[60%]">
        <div className="bg-[#000031] p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-[#FFFFFF]">Activities</h3>
          <p className="text-sm text-[#FFFFFF]">Build, personalize, and optimize your itineraries with our trip planner.</p>
          <Button className="w-full mt-4 bg-[#0D6EFD] hover:bg-[#0D6EFD]">Add Activities</Button>
        </div>
        <div className="bg-[#E7F0FF] p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Hotels</h3>
          <p className="text-sm text-[#1D2433]">Build, personalize, and optimize your itineraries with our trip planner.</p>
          <Button className="w-full mt-4 bg-[#0D6EFD] hover:bg-[#0D6EFD] ">Add Hotels</Button>
        </div>
        <div className="bg-[#0D6EFD] p-4 rounded-lg text-white">
          <h3 className="font-semibold mb-2">Flights</h3>
          <p className="text-sm ">Build, personalize, and optimize your itineraries with our trip planner.</p>
          <Button className="w-full mt-4 bg-white text-[#0D6EFD] hover:bg-white hover:text-[#0D6EFD]">Add Flights</Button>
        </div>
      </div>
      <FlightCard flights={flights}
        onAddFlight={handleAddFlight}
        onRemoveFlight={handleRemoveFlight} />
      <HotelCards />
      <Activitiescard/>
    </div>



  );
}
