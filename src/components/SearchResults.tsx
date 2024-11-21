"use client";

import { useState } from "react";
import { Hotels, Flight, Activity } from "../../types/booking";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Clock } from "lucide-react";

interface SearchResultsProps {
    results: (any)[];
    type: "hotels" | "flights" | "activities";
    onSelect: (item: any) => void;
}

export function SearchResults({ results, type, onSelect }: SearchResultsProps) {
    if (!results.length) {
        return <div className="text-center py-8">No results found</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                    {"image" in item && (
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="text-lg">
                            {item ? item.property.name : `${item.from} → ${item.to}`}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {"rating" in item && (
                            <div className="flex items-center space-x-1 mb-2">
                                {[...Array(Math.floor(item.property.reviewScore))].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        )}
                        {"location" in item && (
                            <div className="flex items-center space-x-2 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span>{item.property.reviewScore}</span>
                            </div>
                        )}
                        {"duration" in item && (
                            <div className="flex items-center space-x-2 text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span>{item.duration}</span>
                            </div>
                        )}
                        <div className="mt-2 text-lg font-bold">
                            ${typeof item.price === "number" ? item.price.toLocaleString() : item.price}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={() => onSelect(item)}>
                            Add to Itinerary
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}