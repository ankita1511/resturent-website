import React, { useEffect } from "react";
import {Grid, Paper,Avatar,TextField,Checkbox,Button,Typography,Link} from '@mui/material'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FormControlLabel from "@mui/material/FormControlLabel";
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { Password } from "@mui/icons-material";


const Login=()=>{
    const paperStyle = { padding: "20px", height:'70vh', width: 280, margin: "20px auto" };
    const headerStyle = { margin: 5 };
  const AStyle = { backgroundColor: "green" };
  const marginTop2 = { marginTop: 5 };
  const btnstyle={margin:'8px 0'}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate=useNavigate();
  const loginHandler=(data)=> {
    sessionStorage.setItem("login",true);
     navigate('/');
    // console.log("login Successfully",data);
  };
  
  // useEffect(()=>{
  //   let login=localStorage.getItem('login');
  //   if(login){
  //     navigate('/');
  //   }
  // });
  
    return(
        <Layout>
        <Grid>
            <Paper elevation={20} style={paperStyle}>
            <Grid align="center">
                <Avatar style={AStyle}>
                    <LockOpenOutlinedIcon/>
                </Avatar>
          <h2 style={headerStyle}>Log in </h2>
             </Grid>
        <form onSubmit={handleSubmit(loginHandler)}>
            <TextField type="email" name="email" fullWidth style={marginTop2} 
            placeholder="email" {...register("email",{required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
              })}/>
              {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}

            {/* {errors.email && errors.email.type === "required" && (
             <p>Email is required.</p>
            )} */}

            <TextField type="password" fullWidth style={marginTop2} name="password"
             placeholder="password" {...register("password",{required:"Please enter your password",
              pattern:{
                value:  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                message:"Enter correct password",
              }
             })}/>

              {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}

             {/* {errors.password && errors.password.type==="required" &&(
              <p style={{color:"red"}}>Password is required</p>
            )} */}

            <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Remember me"
          />
          <Button style={btnstyle} type="submit"  fullWidth variant="contained" color="primary">
            Log in
          </Button>
          <Typography style={marginTop2}>
          <Link href="#">Forgot Password ?</Link>
          </Typography>
          <Typography style={marginTop2}>Do you have an account ?
          <Link href="#">Sign Up</Link>
          </Typography> 
          </form>
            </Paper>
        </Grid>
        </Layout>
    )
}

export default Login;