import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { border } from '@mui/system';
import sh from '../utils/sh';
import axios from 'axios';
import {Link as dom_Link, useNavigate } from "react-router-dom";




const Register = () => {

  // const [data, setData] = useState({
	// 	firstName: "",
	// 	lastName: "",
	// 	email: "",
	// 	password: "",
	// });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]= useState("");


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, {
      email: email,
      password: password,
    });
			 
			console.log(res.message);
		} catch (error : any) {
			if (
     
        
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        console.log(error.message);
				setError(error.response.data.message);
			}
		}
  };

  return (
      <Container component="main" maxWidth="xs" 
      sx={{
        margin: 'auto',
        paddingY: '55px',
        borderRadius: '32px',
        backgroundColor: 'lightgray',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <CssBaseline />
        <Box
          sx={{
            maxWidth: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to Pinterest
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="p" variant="subtitle1" align="left">
                  Email address
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder='Email Address*'
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  sx={{ 
                    div: {
                      borderRadius: '16px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
              <Typography component="p" variant="subtitle1" align="left">
                  Password
                </Typography>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder="Create a password*"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  sx={{
                    div: {
                      borderRadius: '16px',
                    }
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: '20px'}}
            >
              Continue
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" variant="body2" sx={{ fontWeight: 'bold' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default Register