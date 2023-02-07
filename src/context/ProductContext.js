import { createContext } from 'react';
import { useFetch } from '../hooks';

export const ProductContext = createContext({});

function ProductProvider(props) {
    const {productData, isLoading, isError} = useFetch("https://fakestoreapi.com/products")
    
    return (
        <ProductContext.Provider value={{ productData, isLoading, isError }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;
