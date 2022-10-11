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
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import { useCookies } from 'react-cookie'
import PinterestIcon from '@mui/icons-material/Pinterest'
export const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [redirect, setRedirect] = useState<boolean>(false)
    const [cookies, setCookie] = useCookies<string>(['userToken'])
    const [login, setLogin] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios
            .post(
                '/api/auth',
                {
                    email: email,
                    password: password,
                },
                { withCredentials: true }
            )

            .then((res) => {
                console.log(res.data)
                console.log(res.data.message)
                setCookie('userToken', res.data.accessToken, {
                    path: '/',
                    sameSite: 'none',
                    secure: true,
                    maxAge: 3600,
                })
                navigate('/')
            })
            .catch((err) => {
                if (err.res) {
                    console.log(err.res.data)
                    console.log(err.res.status)
                    console.log(err.res.headers)
                    console.log(err.toJSON())
                } else if (err.request) {
                    console.log(err.request.response)
                } else {
                    console.log('Error', err.message)
                }
            })
    }

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                margin: 'auto',
                paddingY: '55px',
                borderRadius: '32px',
                backgroundColor: 'lightgray',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
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
                <PinterestIcon
                    color="primary"
                    fontSize="large"
                    sx={{
                        display: {
                            xs: 'flex',
                            md: 'none',
                        },
                        mr: 1,
                    }}
                />
                <Typography component="h1" variant="h5">
                    Log in to see more
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                component="p"
                                variant="subtitle1"
                                align="left"
                            >
                                Email address
                            </Typography>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                placeholder="Email Address*"
                                name="email"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    div: {
                                        borderRadius: '16px',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                component="p"
                                variant="subtitle1"
                                align="left"
                            >
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
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{
                                    div: {
                                        borderRadius: '16px',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, borderRadius: '20px' }}
                    >
                        Log in
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link
                                component={RouterLink}
                                to="/register"
                                variant="body2"
                                sx={{ fontWeight: 'bold' }}
                            >
                                Not on Picart yet? Sign up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
