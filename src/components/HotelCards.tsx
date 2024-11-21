import { image } from '@/lib'
import { Bed, Building, MapPin, StarIcon, XIcon, Ghost, GlassWater, Calendar1 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HotelCards = () => {
    return (
        <div className='bg-[#344054]  w-[100%] p-5 flex  flex-col'>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <Building className="w-5 h-5 text-white" />
                    <h2 className="text-xl font-semibold text-white">Flights</h2>
                </div>
                <p

                    className="text-[#1D2433] rounded-[4px] bg-[white] p-3 flex justify-center items-center hover:text-[#1D2433]"
                //   onClick={onAddFlight}
                >
                    Add Hotels
                </p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex w-full h-[274px]">
                    <div className="bg-white flex p-4 gap-3 w-[98%] h-full ">
                        <div className="h-full w-[232px]">
                            <Image src={image.hotel} alt="icon" className='h-full w-full' />
                        </div>
                        <div className="w-full flex gap-4 flex-col">
                            <div className="flex justify-between items-center w-full">
                                <div className="w-[70%]">
                                    <h2 className="text-[20px] font-semibold text-[#1D2433]">Riviera Resort, Lekki</h2>
                                    <p className="text-[16px] text-[#1D2433]">18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1</p>
                                </div>
                                <div className="flex justify-end flex-col w-[30%] text-right">
                                    <p className=' text-[28px] font-[600]'> ₦ 123,450.00</p>
                                    <p className="text-[16px] text-[#1D2433]">Total Price: NGN 560,000</p>     <p className="text-[16px] text-[#1D2433]">1 room x 10 nights incl. taxes</p>
                                </div>
                            </div>
                            <div className="flex gap-6 w-full">
                                <div className="text-[#0D6EFD] flex gap-2">
                                    <MapPin />
                                    <span>Show in map</span>
                                </div>
                                <div className=" flex gap-2">
                                    <StarIcon color='#F4B93E' />
                                    <span className='text-[#676E7E]'>8.5 (436)</span>
                                </div>
                                <div className=" flex gap-2">
                                    <Bed color='##676E7E' />
                                    <span className='text-[#676E7E]'>King size room</span>
                                </div>
                            </div>
                            <div className="border-b border-t flex justify-between gap-3 items-center py-3">
                                <div className="flex gap-3 items-center">
                                    <div className="text-sm text-gray-600">Facilities:</div>
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <Ghost className="w-4 h-4" />
                                            <span>Pool</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <GlassWater className="w-4 h-4" />
                                            <span>Bar</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex gap-2 text-[#647995] text-[18px]">
                                    <div className="flex gap-2 items-center">
                                        <Calendar1 />
                                        <span>Check In: 20-04-2024</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <Calendar1 />
                                        <span>Check In: 20-04-2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center ">
                                <div className="flex gap-6 items-center">
                                    <p className="text-blue-600">
                                        Hotel details
                                    </p>
                                    <p className="text-blue-600">
                                        Price details
                                    </p>
                                </div>

                                <p className="text-blue-600">
                                    Edit details
                                </p>
                            </div>
                        </div>

                    </div>
                    <span className='h-full w-[2%] items-center justify-center bg-[#FBEAE9]'>
                        <button className=" text-[#9E0A05] h-full">
                            <XIcon />
                        </button>
                    </span>
                </div>
                <div className="flex w-full h-[274px]">
                    <div className="bg-white flex p-4 gap-3 w-[98%] h-full ">
                        <div className="h-full w-[232px]">
                            <Image src={image.hotel} alt="icon" className='h-full w-full' />
                        </div>
                        <div className="w-full flex gap-4 flex-col">
                            <div className="flex justify-between items-center w-full">
                                <div className="w-[70%]">
                                    <h2 className="text-[20px] font-semibold text-[#1D2433]">Riviera Resort, Lekki</h2>
                                    <p className="text-[16px] text-[#1D2433]">18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1</p>
                                </div>
                                <div className="flex justify-end flex-col w-[30%] text-right">
                                    <p className=' text-[28px] font-[600]'> ₦ 123,450.00</p>
                                    <p className="text-[16px] text-[#1D2433]">Total Price: NGN 560,000</p>     <p className="text-[16px] text-[#1D2433]">1 room x 10 nights incl. taxes</p>
                                </div>
                            </div>
                            <div className="flex gap-6 w-full">
                                <div className="text-[#0D6EFD] flex gap-2">
                                    <MapPin />
                                    <span>Show in map</span>
                                </div>
                                <div className=" flex gap-2">
                                    <StarIcon color='#F4B93E' />
                                    <span className='text-[#676E7E]'>8.5 (436)</span>
                                </div>
                                <div className=" flex gap-2">
                                    <Bed color='##676E7E' />
                                    <span className='text-[#676E7E]'>King size room</span>
                                </div>
                            </div>
                            <div className="border-b border-t flex justify-between gap-3 items-center py-3">
                                <div className="flex gap-3 items-center">
                                    <div className="text-sm text-gray-600">Facilities:</div>
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <Ghost className="w-4 h-4" />
                                            <span>Pool</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <GlassWater className="w-4 h-4" />
                                            <span>Bar</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex gap-2 text-[#647995] text-[18px]">
                                    <div className="flex gap-2 items-center">
                                        <Calendar1 />
                                        <span>Check In: 20-04-2024</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <Calendar1 />
                                        <span>Check In: 20-04-2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center ">
                                <div className="flex gap-6 items-center">
                                    <p className="text-blue-600">
                                        Hotel details
                                    </p>
                                    <p className="text-blue-600">
                                        Price details
                                    </p>
                                </div>

                                <p className="text-blue-600">
                                    Edit details
                                </p>
                            </div>
                        </div>

                    </div>
                    <span className='h-full w-[2%] items-center justify-center bg-[#FBEAE9]'>
                        <button className=" text-[#9E0A05] h-full">
                            <XIcon />
                        </button>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default HotelCards