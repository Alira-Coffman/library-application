// Import necessary hooks from React
import { useState, useEffect } from "react";

// Define custom hook named useFetch that takes a URL as an argument and returns data
const useFetch = (url = null, options, deps =[]) => {
  // Define state variables using the useState hook
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use the useEffect hook to fetch data from the provided URL when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        
        const res = await fetch(url);
        setIsLoading(true);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        console.log(json)
        // Update state variables with the fetched data and set isLoading to false
        setData(json);
        setIsLoading(false);
      } catch (error) {
        // If an error occurs during the fetch, update error and set isLoading to false
        setError(error);
        setIsLoading(false);
      }
    };

    // Call the fetchData function
    url && fetchData();
  }, deps); // Only refetch data if the URL changes

  // Return an object containing the fetched data, isLoading state, and any errors
  return { data, isLoading, error };
};

// Export the custom hook for use in other components
export default useFetch;
