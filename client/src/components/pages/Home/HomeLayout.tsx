import { Grid, Paper } from '@mui/material'
import ImageCard from '../../UI/ImageCard'
import Button from '../../UI/Button/Button'
import { useCookies } from 'react-cookie'

export const HomeLayout = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken'])

    const handleLogout = () => {
        removeCookie('userToken', { path: '/', sameSite: 'none', secure: true })
    }

    return (
        <>
            <Button btnText="Logout" onClick={handleLogout} />
            <Grid container>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item container xs={6} md={4} lg={3}>
                    <Grid item m={0.5}>
                        <ImageCard />
                    </Grid>
                </Grid>
            </Grid>
            <Paper />
        </>
    )
}
