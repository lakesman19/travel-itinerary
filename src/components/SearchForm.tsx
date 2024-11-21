"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plane, Hotel, MapPin } from "lucide-react";

interface SearchFormProps {
    onSearch: (type: "hotels" | "flights" | "activities", data: any) => void;
    defaultTab?: "hotels" | "flights" | "activities";
}

export function SearchForm({ onSearch, defaultTab = "flights" }: SearchFormProps) {
    const [date, setDate] = useState<Date>();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
        onSearch(defaultTab, {
            ...data,
            date: date ? format(date, "yyyy-MM-dd") : undefined,
        });
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <Tabs defaultValue={defaultTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="flights" className="flex items-center gap-2">
                        <Plane className="h-4 w-4" />
                        Flights
                    </TabsTrigger>
                    <TabsTrigger value="hotels" className="flex items-center gap-2">
                        <Hotel className="h-4 w-4" />
                        Hotels
                    </TabsTrigger>
                    <TabsTrigger value="activities" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Activities
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="flights">
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
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <Button type="submit" className="w-full">Search Flights</Button>
                    </form>
                </TabsContent>

                <TabsContent value="hotels">
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
                                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="space-y-2">
                                <Label>Check-out Date</Label>
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
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        <Button type="submit" className="w-full">Search Hotels</Button>
                    </form>
                </TabsContent>

                <TabsContent value="activities">
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
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <Button type="submit" className="w-full">Search Activities</Button>
                    </form>
                </TabsContent>
            </Tabs>
        </div>
    );
}