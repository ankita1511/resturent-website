
import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4" align="center">Contact My Resturant</Typography>
              <p align="center"><Typography variant="h4">Pune</Typography>
          Koregaon Park <br />
        Lane No. 5, Opposite to Oxford Properties, Koregaon Park, Pune 411001. <br/>
          +91 75070 11226 <br/><br />
          <Typography variant="h4">Kharadi</Typography>
        Unit number 9 &10 First Floor, Global High Street, Global Precioso Rd, EON Free Zone, Kharadi, Pune 411014. <br/>
        +91 91588 84188</p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "1400px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
            
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
