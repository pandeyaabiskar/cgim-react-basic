import { useState, useEffect } from "react";

function useFetch(url) {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    //API Call
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setProductData(data);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { productData, isLoading, isError };
}

export { useFetch };
