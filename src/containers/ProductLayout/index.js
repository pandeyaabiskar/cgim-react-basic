import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";

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
              <Link to={`/product/${product.id}`}>
                <img src={product.image} />
                <br />
                <h2>{product.title}</h2>
                <h5>{product.price}</h5>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default ProductLayout;
