import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

export default function ImageCard() {
    return (
        <Card sx={{ maxWidth: '300px', borderRadius: 4, position: 'relative' }}>
            <CardMedia
                component="img"
                height="250px"
                image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
                alt="Coffee"
            ></CardMedia>
            <Button
                variant="contained"
                sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: '20px',
                    position: 'absolute',
                    top: -5,
                    right: -20,
                    transform: 'translateX(-50%)'
                }}
            >
                save
            </Button>
            <Typography variant="body1" color="text.secondary">
                Coffee
            </Typography>
        </Card>
    )
}
