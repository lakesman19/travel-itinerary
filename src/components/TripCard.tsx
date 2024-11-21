"use client";

import { ArrowLeft, MoreHorizontal, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { image } from "@/lib";

interface TripCardProps {
    title: string;
    location: string;
    startDate: string;
    endDate: string;
    tripType: string;
}

export function TripCard({ title, location, startDate, endDate, tripType }: TripCardProps) {
    return (
        <div className=" p-6 rounded-xl">
            <div className="flex justify-between items-start mb-6" >
                <Button variant="ghost" size="icon">
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{startDate}</span>
                    <span>→</span>
                    <span>{endDate}</span>
                </div>

                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-600">{location} · {tripType}</p>

                <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Activities</h3>
                        <p className="text-sm text-gray-600">Build, personalize, and optimize your itineraries with our trip planner.</p>
                        <Button className="w-full mt-4">Add Activities</Button>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Hotels</h3>
                        <p className="text-sm text-gray-600">Build, personalize, and optimize your itineraries with our trip planner.</p>
                        <Button className="w-full mt-4">Add Hotels</Button>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Flights</h3>
                        <p className="text-sm text-gray-600">Build, personalize, and optimize your itineraries with our trip planner.</p>
                        <Button className="w-full mt-4">Add Flights</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}