import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import '../styles/MenuStyles.css';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  } from "@mui/material";
import {addToCart,removeFromCart} from "../components/action";
import { useDispatch } from "react-redux";

const Menu = () => {
  
  const dispatch = useDispatch()

  const addToCartHandler=(menu)=>{
      dispatch(addToCart(menu))
  }
  const removeFromCartHandler=(menu)=>{
    dispatch(removeFromCart(menu))
    
  }
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight:"bold", mb: 2 } }}/>
      <Typography variant="h3" align="center">Our Delicious Menu</Typography>
      <div className="menu">
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "250px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "50px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
                price={menu.price}
              />
              <CardContent>
              <div className="Menu-container">
                <h1>Menu Item:
                  {menu.name}
                </h1>
                <p>{menu.description}</p>
                <p><b>Price:{menu.price}</b></p><br />
                <Button onClick={()=>{addToCartHandler(menu)}}>Add To Cart</Button>
                {/* <Button className="btn2" onClick={()=>{removeFromCartHandler(menu)}}>Remove from Cart</Button> */}
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      </div>
    </Layout>
  );
};

export default Menu;