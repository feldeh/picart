import * as React from 'react'
import { useState } from 'react'
import {
        Avatar,
        Button,
        CssBaseline,
        TextField,
        Link,
        Grid,
        Box,
        Typography,
        Container,
} from '@mui/material'
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import axios from '../api/axios'




export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError]= useState("")


  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post('/api/auth', {
            email: email,
            password: password,
        })
        .then((res) => {
          console.log(res.data)
          console.log(res.data.message)
          if (res.data.accessToken) {
            localStorage.setItem("user", res.data.accessToken)
          }
  
        })
        .catch((err) => {
          if (err.res) {
              console.log(err.res.data)
              console.log(err.res.status)
              console.log(err.res.headers)
              console.log(err.toJSON())
  
          } else if (err.request) {
              // console.log(err.request)
              console.log(err.request.response)
          } else {
              console.log('Error', err.message)
          }
          // console.log(err.config)
      
      })
    }

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
                  autoComplete="off"
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
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" variant="body2" sx={{ fontWeight: 'bold' }}>
                  Not on Pinterest yet? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  )
}
