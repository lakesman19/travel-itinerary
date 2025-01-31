import { image } from '@/lib'
import { Clock, StretchVerticalIcon, StarIcon, MapPin, CircleChevronDown, CircleChevronUp, XIcon, ChevronRight, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Activitiescard = () => {
    return (
        <div className='bg-[#0D6EFD]  w-[100%] p-5 flex  flex-col'>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <StretchVerticalIcon className="w-5 h-5 text-white" />
                    <h2 className="text-xl font-semibold text-white">Activities</h2>
                </div>
                <p

                    className="text-[#0D6EFD] rounded-[4px] bg-[white] p-3 flex justify-center items-center hover:text-[#0D6EFD]"
                //   onClick={onAddFlight}
                >
                    Add Activities
                </p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex w-full h-[274px]">
                    <div className="bg-white flex p-4 gap-3 w-[100%] h-full ">
                        <div className="h-full w-[232px] relative">
                            <Image src={image.activities} alt="icon" className='h-full w-full' />
                            <div className="flex justify-between items-center absolute top-[40%] left-0 right-0 p-2">
                                <span className="bg-white p-1 rounded-full">
                                    <ChevronLeft />
                                </span>
                                <span className="bg-white p-1 rounded-full">
                                    <ChevronRight />

                                </span>
                            </div>
                        </div>
                        <div className="w-full flex gap-4 flex-col">
                            <div className="flex justify-between items-center w-full">
                                <div className="w-[70%]">
                                    <h2 className="text-[20px] font-semibold text-[#1D2433]">The Museum of Modern Art</h2>
                                    <p className="text-[16px] text-[#1D2433]">Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant</p>
                                </div>
                                <div className="flex justify-end flex-col w-[30%] text-right">
                                    <p className=' text-[28px] font-[600]'> ₦ 123,450.00</p>
                                    <p className="text-[16px] text-[#1D2433]">10:30 AM on Mar 19</p>
                                </div>
                            </div>
                            <div className="flex gap-6 w-full">
                                <div className="text-[#0D6EFD] flex gap-2">
                                    <MapPin />
                                    <span>Directions</span>
                                </div>
                                <div className=" flex gap-2">
                                    <StarIcon color='#F4B93E' />
                                    <span className='text-[#676E7E]'>4.5 (436)</span>
                                </div>
                                <div className=" flex gap-2">
                                    <Clock color='##676E7E' />
                                    <span className='text-[#676E7E]'>1 Hour </span>
                                </div>
                            </div>
                            <div className="border-b border-t flex justify-between gap-3 items-center py-3">
                                <div className="flex gap-3 items-center">
                                    <div className="text-lg text-[#647995] font-medium">What's Included:</div>
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-2 text-lg text-[#647995] font-medium">

                                            <span>Admission to the Empire State Building</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-lg  font-medium text-[#0D6EFD]">
                                            See more
                                        </div>

                                    </div>
                                </div>
                                <div className="flex gap-2 text-[#647995] text-[18px]">
                                    <div className=" text-sm text-white rounded-[4px] p-1 flex justify-center items-center bg-[#0A369D]">
                                        Day 1 - (2)
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <CircleChevronUp size={"16px"} />
                                        <CircleChevronDown size={"16px"} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center ">
                                <div className="flex gap-6 items-center">
                                    <p className="text-blue-600">
                                        Activities details
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

                    <button className=" text-[#9E0A05] h-full flex w-[46px] items-center justify-center bg-[#FBEAE9]">
                        <XIcon />
                    </button>

                </div>
                <div className="flex w-full h-[274px]">
                    <div className="bg-white flex p-4 gap-3 w-[100%] h-full ">
                        <div className="h-full w-[232px] relative">
                            <Image src={image.activities} alt="icon" className='h-full w-full' />
                            <div className="flex justify-between items-center absolute top-[40%] left-0 right-0 p-2">
                                <span className="bg-white p-1 rounded-full">
                                    <ChevronLeft />
                                </span>
                                <span className="bg-white p-1 rounded-full">
                                    <ChevronRight />

                                </span>
                            </div>
                        </div>
                        <div className="w-full flex gap-4 flex-col">
                            <div className="flex justify-between items-center w-full">
                                <div className="w-[70%]">
                                    <h2 className="text-[20px] font-semibold text-[#1D2433]">The Museum of Modern Art</h2>
                                    <p className="text-[16px] text-[#1D2433]">Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant</p>
                                </div>
                                <div className="flex justify-end flex-col w-[30%] text-right">
                                    <p className=' text-[28px] font-[600]'> ₦ 123,450.00</p>
                                    <p className="text-[16px] text-[#1D2433]">10:30 AM on Mar 19</p>
                                </div>
                            </div>
                            <div className="flex gap-6 w-full">
                                <div className="text-[#0D6EFD] flex gap-2">
                                    <MapPin />
                                    <span>Directions</span>
                                </div>
                                <div className=" flex gap-2">
                                    <StarIcon color='#F4B93E' />
                                    <span className='text-[#676E7E]'>4.5 (436)</span>
                                </div>
                                <div className=" flex gap-2">
                                    <Clock color='##676E7E' />
                                    <span className='text-[#676E7E]'>1 Hour </span>
                                </div>
                            </div>
                            <div className="border-b border-t flex justify-between gap-3 items-center py-3">
                                <div className="flex gap-3 items-center">
                                    <div className="text-lg text-[#647995] font-medium">What's Included:</div>
                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center space-x-2 text-lg text-[#647995] font-medium">

                                            <span>Admission to the Empire State Building</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-lg  font-medium text-[#0D6EFD]">
                                            See more
                                        </div>

                                    </div>
                                </div>
                                <div className="flex gap-2 text-[#647995] text-[18px]">
                                    <div className=" text-sm text-white rounded-[4px] p-1 flex justify-center items-center bg-[#0A369D]">
                                        Day 2
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <CircleChevronUp size={"16px"} />
                                        <CircleChevronDown size={"16px"} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center ">
                                <div className="flex gap-6 items-center">
                                    <p className="text-blue-600">
                                        Activities details
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
                    <button className=" text-[#9E0A05] h-full w-[46px] flex items-center justify-center bg-[#FBEAE9]">
                        <XIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Activitiescard