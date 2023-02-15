import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function ProductDetailLayout() {
  const { productID } = useParams();
  const { productData, isLoading, isError } = useFetch(
    `https://fakestoreapi.com/products/${productID}`
  );

  const CustomButton = styled(Button)({
    borderRadius: "10px",
      color: "white",
      width: "200px",
      marginTop: "10px"
  });

  return (
    <Box m={10} p={5} backgroundColor="#e2e2e2" borderRadius={10}>
      <Grid container gap={10}>
        <Grid item xs={2}>
          <img src={productData.image} width="100%" />
        </Grid>
        <Grid item xs={9} container>
          <Grid item xs={12}>
            <Typography variant="h3">{productData.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">{productData.description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{productData.price}</Typography>
            <CustomButton variant="contained" color="secondary">Buy</CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetailLayout;
