export interface Flight {
    id: string;
    from: string;
    to: string;
    departureDate: string;
    returnDate?: string;
    price: number;
    airline: string;
}

export interface Hotels {
    id: string;
    name: string;
    location: string;
    checkIn: string;
    checkOut: string;
    price: number;
    rating: number;
    image: string;
}

export interface Activity {
    id: string;
    name: string;
    location: string;
    date: string;
    price: number;
    duration: string;
    image: string;
}

export interface Itinerary {
    flights: Flight[];
    hotels: Hotels[];
    activities: Activity[];
}