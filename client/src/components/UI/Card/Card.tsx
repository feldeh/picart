import StyledCard from './Card.css'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

export default function ImageCard() {
    return (
        <StyledCard>
            <CardMedia
                component="img"
                height="250px"
                image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
                alt="Coffee"
            ></CardMedia>
            <Button
                variant="contained"
                sx={{
                    borderRadius: '20px',
                    position: 'absolute',
                    top: 10,
                    right: 10,
                }}
            >
                save
            </Button>
            <Typography variant="body1" color="text.secondary">
                Coffee
            </Typography>
        </StyledCard>
    )
}
