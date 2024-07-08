import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box,Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my: 15,
        textAlign:"center",
        p:2,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"center"
        },
        "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"2rem",
            },
        },
      }}>
        <Typography variant="h4">Welcome to my resturant</Typography>
        <p>Founded in 1997 by the couple - Praful and Cheeru Chandawarkar, Malaka Spice has established itself as an inspired 
          Southeast Asian Restaurant, located in the picturesque by lanes of Koregaon Park, Pune.
            Malaka Spice is not just a restaurant; it's a story of passion, dedication, and a dream that became a reality.
            Praful had recently quit his successful career as an investment banker, and along with Cheeru 
            his wife and a talented chef they decided to embark on their dream of opening up their own restaurant.
            They traveled extensively across Southeast Asia and picked the best aspects of each region and 
            tossed them together into a set of carefully developed recipes.</p><br></br>
            <p>
            Today, Malaka Spice has multiple outlets across India and is known for its inspired Southeast 
            Asian cuisine, warm ambience, and exceptional service. Praful and Cheeru's dream has become a 
            reality, and their passion for food continues to inspire and delight their customers every day.
            Their dedication to creating a unique dining experience for their customers is what sets Malaka 
            Spice apart from the rest. It's not just about the food, it's about the journey and the experience that comes with it.</p>
      </Box>
    </Layout>
  )
}

export default About
