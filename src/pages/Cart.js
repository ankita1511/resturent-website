import { Typography, Grid, Box, Button } from "@mui/material";
import React from "react";
import Layout from "../components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../components/action";
import styled from "@emotion/styled/macro";

const StyledDiv = styled("div")({
  backgroundImage: "url('backgroundimage.jpg')",
  minHeight: "65vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  alignItems: "center",
});
const Cart = () => {
  const cartData = useSelector((state) => state.cartItems.cartData);
  const dispatch = useDispatch();

  const removeFromCartHandler = (menu) => {
    dispatch(removeFromCart(menu));
  };
  const GST_RATE = 0.18;

  const calculateSubtotal = () => {
    return cartData.reduce((total, menu) => total + menu.price, 0);
  };

  const calculateGST = (subtotal) => {
    return subtotal * GST_RATE;
  };

  const calculateFinalAmount = (subtotal, gst) => {
    return subtotal + gst;
  };

  const subtotal = calculateSubtotal();
  const gst = calculateGST(subtotal);
  const finalAmount = calculateFinalAmount(subtotal, gst);

  return (
    <Layout>
      <StyledDiv>
        <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
          <Typography variant="h4" align="center">
            Ordered Items
          </Typography>
        </Box>
        <Grid
          container
          direction="column"
          spacing={2}
          width={700}
          marginLeft={50}
        >
          {cartData.map((menu, id) => (
            <Grid item key={id}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={2}
                border={1}
                borderRadius={2}
              >
                <Box display="flex" alignItems="center">
                  <img
                    src={menu.image}
                    alt="Avatar"
                    style={{ width: 100, marginRight: 16, height: 100 }}
                  />
                  <Box>
                    <Typography variant="h5">
                      <b>{menu.name}</b>
                    </Typography>
                    <Typography variant="h5">
                      <b>{menu.price}</b>
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="containted"
                  color="secondary"
                  onClick={() => removeFromCartHandler(menu)}
                >
                  Remove From cart
                </Button>
              </Box>
            </Grid>
          ))}
          <Box mt={2}>
            <Typography variant="h6">
              Subtotal: ${subtotal.toFixed(2)}
            </Typography>
            <Typography variant="h6">GST (18%): ${gst.toFixed(2)}</Typography>
            <Typography variant="h5" mt={2}>
              Total (including GST): ${finalAmount.toFixed(2)}
            </Typography>
          </Box>
        </Grid>
      </StyledDiv>
    </Layout>
  );
};

export default Cart;
