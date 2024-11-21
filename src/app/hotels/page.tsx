

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { SearchResults } from "../../components/SearchResults";
import { Hotels } from "../../../types/booking";
import { searchHotels } from "../../lib/api";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Clock } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';
const Page = () => {
    const { register, handleSubmit, setValue, watch } = useForm();
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const sampleDestinations = [
        {
            name: "Paris",
            image: "assets/images/hotel.png",
            description: "The City of Lights awaits you!",
        },
        {
            name: "New York",
            image: "assets/images/hotel.png",
            description: "Experience the bustling Big Apple.",
        },
        {
            name: "Tokyo",
            image: "assets/images/hotel.png",
            description: "Discover the heart of Japan.",
        },
    ];

    const handleSearch = async (searchParams: any) => {
        if (!searchParams.checkIn || !searchParams.checkOut) {
            toast.error("Please select a date"); // Display error if no date is selected
            return;
        }
        setLoading(true);
        try {
            const data = await searchHotels(
                searchParams.location,
                searchParams.dest_id,
                searchParams.checkIn,
                searchParams.checkOut
            );
            setResults(data.data.hotels);

        } catch (error) {
            // toast.error("Hotel search error")
            console.error("Hotel search error:", error);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = (data: any) => {
        const searchParams = {
            location: data.location || "",
            dest_id: "-2092174",
            checkIn: format(data.checkIn, "yyyy-MM-dd"),
            checkOut: format(data.checkOut, "yyyy-MM-dd"),
        };
        handleSearch(searchParams);
    };

    const checkIn = watch("checkIn");
    const checkOut = watch("checkOut");
    const handleSelect = (hotel: any) => {
        // Handle adding hotel to itinerary
        console.log("Selected hotel:", hotel);
    };

    return (
        <main className="bg-white h-full w-[95%] p-5 gap-5 flex flex-col">
            <div
                className=" relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: "url('assets/images/hotel.png')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="text-center relative ">
                    <h1 className="text-5xl font-extrabold">Find Your Dream Hotel</h1>
                    <p className="mt-4 text-lg">Book hotels at the best prices, anywhere in the world.</p>
                </div>
            </div>
            <section className="max-w-6xl mx-auto py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleDestinations.map((dest) => (
                        <div
                            key={dest.name}
                            className="rounded-lg shadow-lg overflow-hidden bg-white transform transition hover:scale-105"
                        >
                            <img src={dest.image} alt={dest.name} className="h-56 w-full object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{dest.name}</h3>
                                <p className="text-gray-600">{dest.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="max-w-full ">
                <h1 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Stay</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            placeholder="Where do you want to stay?"
                            {...register("location")}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Check-in Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start text-left font-normal"
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={checkIn}
                                        onSelect={(date) => setValue("checkIn", date)}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-2">
                            <Label>Check-out Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start text-left font-normal"
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={checkOut}
                                        onSelect={(date) => setValue("checkOut", date)}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    <Button type="submit" className="w-full bg-[#0D6EFD]">
                        Search Hotels
                    </Button>
                </form>
                {loading ? (
                    <div className="text-center py-8">Loading...</div>
                ) : (
                    <div className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {results.map((item) => (
                                <Card key={item.id} className="overflow-hidden">
                                    {item.image && (
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="text-lg">{item.property.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {/* <div className="flex items-center space-x-2 text-gray-600 mb-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{locations[item.id] || "Fetching location..."}</span>
                                        </div> */}
                                        <div className="mt-2 text-lg font-bold">
                                            ${typeof item.price === "number" ? item.price.toLocaleString() : item.price}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full" onClick={() => handleSelect(item)}>
                                            Add to Itinerary
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Page;
