import { Grid, Paper } from '@mui/material'
import ImageCard from '../../UI/ImageCard'
import LogoutButton from '../../UI/Button/LogoutButton'

export const HomeLayout = () => {
    return (
        <>
            <LogoutButton />
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
