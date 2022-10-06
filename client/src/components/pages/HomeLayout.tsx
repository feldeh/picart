import { Grid, Paper } from '@mui/material'
import ImageCard from '../UI/ImageCard'
import LogoutButton from '../UI/Button/LogoutButton'

export const HomeLayout = () => {
    return (
        <>
            <LogoutButton />
            <Grid container mx={'auto'}>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4} lg={3} spacing={10}>
                    <Grid item m={1}>
                        <ImageCard />
                    </Grid>
                </Grid>
            </Grid>
            <Paper />
        </>
    )
}
