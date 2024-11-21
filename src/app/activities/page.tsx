"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { TabsContent } from '@/components/ui/tabs';
import toast from 'react-hot-toast'; // Ensure to import the toast library
import { searchActivities } from "../../lib/api"; // Ensure this function is available in your API library

const Page = () => {
    const { register, handleSubmit, setValue, watch } = useForm();
    const [date, setDate] = useState<Date | null>(null);
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const sampleAttractions = [
        {
            name: "City Museum",
            description: "Discover the art and history of the city.",
            image: "assets/images/museum.jpeg",
        },
        {
            name: "Ice Skating Rink",
            description: "Enjoy a day of fun on the ice.",
            image: "assets/images/skating.jpeg",
        },
        {
            name: "Cinema Complex",
            description: "Watch the latest blockbusters in style.",
            image: "assets/images/cinema.avif",
        },
        {
            name: "Nature Park",
            description: "Relax and explore scenic landscapes.",
            image: "assets/images/nature.jpg",
        },
    ];
    const onSubmit = async (data: any) => {
        if (!date) {
            toast.error("Please select a date"); // Display error if no date is selected
            return;
        }

        setLoading(true);
        try {
            const searchResults = await searchActivities(
                data.location,
                format(date as Date, "yyyy-MM-dd"), // Ensure date is formatted correctly
            );
            setResults(searchResults);
        } catch (error) {
            // toast.error("Error fetching activities");
            console.error("Error fetching activities:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-white h-full w-[95%] p-5 flex flex-col">
            <div className=" relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: "url('assets/images/activities.png')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="text-center px-6 md:px-12 relative ">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Welcome to Your Next Adventure
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                        Discover amazing attractions, plan uNnforgettable experiences, and explore new horizons.
                    </p>
                    <Button
                        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200"
                        onClick={() => console.log("CTA clicked!")}
                    >
                        Get Started
                    </Button>
                </div>


            </div>
            <section className="max-w-6xl mx-auto py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleAttractions.map((dest) => (
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                        id="location"
                        placeholder="Where do you want to explore?"
                        {...register("location")}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date as Date}
                                onSelect={(date: any) => setDate(date)}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <Button type="submit" className="w-full bg-[#0D6EFD]">
                    {loading ? 'Searching...' : 'Search Activities'}
                </Button>
            </form>

            {/* Display results if available */}
            {results.length > 0 && (
                <div>
                    <h2>Activities Found:</h2>
                    <ul>
                        {results.map((activity, index) => (
                            <li key={index}>{activity.name}</li> // Customize based on your data structure
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
};

export default Page;
