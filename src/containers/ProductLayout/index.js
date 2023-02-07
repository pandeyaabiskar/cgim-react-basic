import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

function ProductLayout() {
    // Directly using state
    // const {productData, isLoading, isError} = useFetch("https://fakestoreapi.com/products")
  
    //Context
    const { productData, isLoading, isError } = useContext(ProductContext);

  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {!isLoading && isError && <h1>Error Occured</h1>}
      {!isLoading &&
        !isError &&
        productData.length > 0 &&
        productData.map((product) => {
          return (
            <div>
              <img src={product.image} />
              <br />
              <h2>{product.title}</h2>
              <h5>{product.price}</h5>
            </div>
          );
        })}
    </div>
  );
}

export default ProductLayout;
