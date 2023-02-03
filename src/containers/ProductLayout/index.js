import { useState, useEffect } from 'react';

function ProductLayout() {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        //API Call
        const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                console.log(data)
                setProductData(data)
                setIsLoading(false)
            } catch (err) {
                setIsError(true)
                setIsLoading(false)
            }
        }
        fetchData();
    }, [])

    return <h1>Product Page</h1>
}

export default ProductLayout;