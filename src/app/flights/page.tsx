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
import { SearchResults } from "../../components/SearchResults"; // Ensure this path is correct
import { searchFlights } from "../../lib/api"; // Ensure this function is available in your API library
import toast, { Toaster } from 'react-hot-toast';

const FlightsPage = () => {
    const { register, handleSubmit, setValue, watch } = useForm();
    const [date, setDate] = useState<Date | null>(null);
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        if (!date) {
            toast.error("Please select a date"); // Display error if no date is selected
            return;
        }
        setLoading(true);
        try {
            const searchResults = await searchFlights(
                data.from,
                data.to,
                format(date as Date, "yyyy-MM-dd"), // Ensure date is formatted correctly
            );
            setResults(searchResults);
        } catch (error) {
            // toast.error("Error fetching flights:")

            console.error("Error fetching flights:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-white h-full w-[95%] p-5 gap-5 flex flex-col">
            <div
                className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: "url('assets/images/hotel.png')" }}
            >
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold">Book Your Next Adventure</h1>
                    <p className="mt-4 text-lg">Find the best deals on flights to your dream destinations.</p>
                </div>
            </div>
            <div className="max-w-full flex gap-3 flex-col">
                <div>
                    <h1 className="text-2xl font-bold text-center">Search Flights</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="from">From</Label>
                            <Input id="from" placeholder="Departure city" {...register("from")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="to">To</Label>
                            <Input id="to" placeholder="Destination city" {...register("to")} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Departure Date</Label>
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

                    <Button type="submit" className="w-full bg-[#0D6EFD]" disabled={loading}>
                        {loading ? "Searching..." : "Search Flights"}
                    </Button>
                </form>

                <div >
                    <h2 className="text-xl font-semibold">Search Results</h2>
                    {loading ? (
                        <div className="text-center py-4">Loading...</div>
                    ) : (
                        <SearchResults
                            results={results}
                            type="flights"
                            onSelect={(item) => console.log("Selected flight:", item)}
                        />
                    )}
                </div>
            </div>

        </main>
    );
};

export default FlightsPage;
