import { CardMedia, Grid, Paper, Typography } from '@mui/material'
import Button from '../../UI/Button/Button'
import { Button as MUIButton } from '@mui/material'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'
import axios from '../../../api/axios'
import StyledCard from '../../UI/Card/Card.css'
import ResponsiveAppBar from '../../UI/Navbar/Navbar'

export const HomeLayout = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken'])

    const handleLogout = () => {
        removeCookie('userToken', { path: '/', sameSite: 'none', secure: true })
    }

    const [pictureData, setPictureData] = useState<any>([])

    const [error, setError] = useState(null)

    const fetchPictureData = async () =>
        await axios
            .get('http://localhost:8080/api/saved')
            .then((response) => {
                setPictureData(response.data)
            })
            .catch((error) => {
                setError(error)
                console.log(error)
            })

    useEffect(() => {
        fetchPictureData()
    }, [])

    return (
        <>
            <ResponsiveAppBar />
            <Grid container>
                {pictureData.map((picture: any, index: number) => (
                    <Grid key={index} item container xs={6} md={4} lg={3}>
                        <Grid item m={0.5}>
                            <StyledCard>
                                <CardMedia
                                    component="img"
                                    height="250px"
                                    image={picture.src.toString()}
                                    alt={picture.alt.toString()}
                                ></CardMedia>
                                <MUIButton
                                    variant="contained"
                                    sx={{
                                        borderRadius: '20px',
                                        position: 'absolute',
                                        top: 10,
                                        right: 10,
                                    }}
                                >
                                    save
                                </MUIButton>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {picture.alt.toString()}
                                </Typography>
                            </StyledCard>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
