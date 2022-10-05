import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Button } from '@mui/material'

export default function ImageCard() {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
            <CardMedia
                component="img"
                height="100%"
                image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
                alt="Coffee"
            ></CardMedia>
            <Button
                variant="contained"
                sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: '20px',
                    position: 'relative',
                    top: -240,
                    left: 160,
                    transform: 'translateX(-50%)'
                }}
            >
                save
            </Button>
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    Coffee
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}
