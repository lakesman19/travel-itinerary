import { icons } from '@/lib'
import Image from 'next/image'
import React from 'react'
import { Plane, Utensils, Tv, UsbIcon, Luggage, X, XIcon } from "lucide-react";
interface FlightItineraryProps {
    flights: any;
    onRemoveFlight?: (flightId: string) => void;
    onAddFlight?: () => void;
}
const FlightCard = ({ flights, onRemoveFlight, onAddFlight }: FlightItineraryProps) => {
    return (
        <div className='bg-[#F0F2F5]  w-[100%] p-5 flex rounded-sm  flex-col'>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <Plane className="w-5 h-5" />
                    <h2 className="text-xl font-semibold">Flights</h2>
                </div>
                <p

                    className="text-blue-600 bg-[white] p-3 flex justify-center items-center cursor-pointer hover:text-blue-700 rounded-[4px]"
                    onClick={onAddFlight}
                >
                    Add Flights
                </p>
            </div>
            <div className="flex flex-col gap-6">
                {flights.map((flight: any) => (
                    <div className="flex w-full h-[274px]">
                        <div className="bg-white flex flex-col rounded-sm w-[100%] h-full ">
                            <div className="flex justify-between items-center py-4 px-3">
                                <div className="flex items-center w-[30%]">
                                    <Image src={icons.americalogo} alt='icon' />
                                    <div className="ml-5">
                                        <h2 className="text-[20px] font-semibold text-[#1D2433]">{flight.airline}</h2>
                                        <div className="flex items-center gap-2 ">
                                            <p className="text-[16px] text-[#676E7E]">{flight.id}</p>
                                            <p className="text-sm text-white rounded-[4px] p-2 flex justify-center items-center bg-[#0A369D]">First class</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-[40%] justify-between items-center gap-6">
                                    <div className="w-[20%] text-right ">
                                        <p className="text-2xl font-semibold text-[#1D2433]">12:00</p>
                                        <p className="text-sm text-[#676E7E]">Sun, 20 Aug</p>
                                    </div>
                                    <div className="w-[60%] flex gap-3 flex-col">
                                        <div className="flex justify-between items-center">
                                            <Image src={icons.planeTkeoff} alt='icon' />
                                            <p className="text-sm text-[#676E7E] font-medium">Duration: 1h 45m</p>
                                            <Image src={icons.planeLanding} alt='icon' />

                                        </div>
                                        <div className="h-2 bg-blue-200 rounded flex justify-center items-center">
                                            <div className="h-2 bg-blue-600 rounded w-1/3"></div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className='text-[#1D2433] text-[16px] font-semibold'>LOS</p>
                                            <p className="text-sm text-[#676E7E] font-medium">Direct</p>
                                            <p className='text-[#1D2433] text-[16px] font-semibold'>SIN</p>
                                        </div>
                                    </div>
                                    <div className="w-[20%] text-left">
                                        <p className="text-2xl font-semibold text-[#1D2433]">12:00</p>
                                        <p className="text-sm text-[#676E7E]">Sun, 20 Aug</p>
                                    </div>
                                </div>
                                <p className='w-[30%] flex justify-end text-[28px] font-[600]'> ₦ 123,450.00</p>
                            </div>
                            <div className="border-b border-t  py-4 px-3">
                                <div className="text-sm text-gray-600 mb-2">Facilities:</div>
                                <div className="flex items-center space-x-6 text-[#647995] font-medium">
                                    <div className="flex items-center space-x-2 text-lg ">
                                        <Luggage className="w-4 h-4" color={"#475367"} />
                                        <span>Baggage: 20kg, Cabin Baggage: 8kg</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-lg ">
                                        <Tv className="w-4 h-4" color='#475367' />
                                        <span>In flight entertainment</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-lg ">
                                        <Utensils className="w-4 h-4 " color='#475367' />
                                        <span>In flight meal</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-lg">
                                        <UsbIcon className="w-4 h-4" color='#475367' />
                                        <span>USB Port</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center  py-4 px-3">
                                <div className="flex gap-6 items-center font-medium">
                                    <p className="text-[#0D6EFD] cursor-pointer">
                                        Flight details
                                    </p>
                                    <p className="text-[#0D6EFD] cursor-pointer">
                                        Price details
                                    </p>
                                </div>

                                <p className="text-[#0D6EFD] font-medium cursor-pointer">
                                    Edit details
                                </p>
                            </div>
                        </div>

                        <button className=" text-[#9E0A05] h-full flex w-[46px] items-center justify-center bg-[#FBEAE9]">
                            <XIcon />
                        </button>

                    </div>

                ))}
            </div>

        </div>
    )
}

export default FlightCard