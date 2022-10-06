import { Grid } from '@mui/material'
import ImageCard from '../UI/ImageCard'
import LogoutButton from '../UI/Button/LogoutButton'

export const HomeLayout = () => {
    return (
        <>
            <LogoutButton />
            <Grid container spacing={10}>
                <Grid item m={1}>
                    <ImageCard />
                </Grid>
            </Grid>
            <Grid container spacing={10}>
                <Grid item m={1}>
                    <ImageCard />
                </Grid>
            </Grid>
        </>
    )
}
