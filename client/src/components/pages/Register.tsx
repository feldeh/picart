import * as React from 'react'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import axios from '../../api/axios'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import PinterestIcon from '@mui/icons-material/Pinterest'

export const Register = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [redirect, setRedirect] = useState<boolean>(false)
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios
            .post('/api/register', {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res.data)
                console.log(JSON.stringify(res.data))
                navigate('/')
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
                <PinterestIcon color="primary" fontSize="large" />
                <Typography component="h1" variant="h5">
                    Sign up to see more
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
                                autoComplete="email"
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
                        Continue
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link
                                component={RouterLink}
                                to="/"
                                variant="body2"
                                sx={{ fontWeight: 'bold' }}
                            >
                                Already have an account? Log in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Register
