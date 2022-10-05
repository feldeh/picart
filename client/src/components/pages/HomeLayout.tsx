import { Grid } from '@mui/material'
import ImageCard from '../UI/ImageCard'

export const HomeLayout = () => {
    return (
        <div>
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
        </div>
    )
}
