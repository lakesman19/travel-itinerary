import toast, { Toaster } from "react-hot-toast";

const RAPID_API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY;
const RAPID_API_HOST = "booking-com15.p.rapidapi.com";

if (!RAPID_API_KEY) {
  throw new Error("RAPID_API_KEY is not defined in the environment variables");
}

const headers: Record<string, string> = {
  "X-RapidAPI-Key": RAPID_API_KEY,
  "X-RapidAPI-Host": RAPID_API_HOST,
};

// Function for searching Hotels
export async function searchHotels(
  location: string,
  dest_id: string,
  checkIn: string,
  checkOut: string
) {
  try {
    const response = await fetch(
      `https://${RAPID_API_HOST}/api/v1/hotels/searchHotels?dest_id=${dest_id}&arrival_date=${checkIn}&departure_date=${checkOut}&search_type=${"city"}`,
      { headers }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch hotels");
    }
    return response.json();
  } catch (error:any) {
    toast.error(`Error fetching hotels: ${error.message}`);
    throw error; // Re-throw error to handle it in the caller function
  }
}

// Function for searching Flights
export async function searchFlights(from: string, to: string, date: string) {
  try {
    const response = await fetch(
      `https://${RAPID_API_HOST}/api/v1/flights/searchFlights?origin=${from}&destination=${to}&date=${date}`,
      { headers }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch flights");
    }
    return response.json();
  } catch (error:any) {
    toast.error(`Error fetching flights: ${error.message}`);
    throw error; // Re-throw error to handle it in the caller function
  }
}

// Function for searching Activities
export async function searchActivities(location: string, date: string) {
  try {
    const response = await fetch(
      `https://${RAPID_API_HOST}/api/v1/activities/searchActivities?location=${location}&date=${date}`,
      { headers }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch activities");
    }
    return response.json();
  } catch (error:any) {
    toast.error(`Error fetching activities: ${error.message}`);
    throw error; // Re-throw error to handle it in the caller function
  }
}
