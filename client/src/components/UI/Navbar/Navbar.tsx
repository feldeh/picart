import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import PinterestIcon from '@mui/icons-material/Pinterest'
import AddIcon from '@mui/icons-material/Add'
import { useCookies } from 'react-cookie'
import { useNavigate, Link } from 'react-router-dom'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Logout']

const ResponsiveAppBar = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken'])

    const handleLogout = () => {
        removeCookie('userToken', { path: '/', sameSite: 'none', secure: true })
    }

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        console.log('selected')
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = () => {
        console.log('unselected')
        setAnchorElUser(null)
    }

    const navigate = useNavigate()

    const itemClick = (setting: string) => {
        if (setting == 'Logout') {
            handleLogout()
        } else if (setting == 'Profile') {
            navigate('/profile')
        } else if (setting == 'Account') {
            navigate('/account')
        }
    }

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Link to="/">
                        <PinterestIcon
                            fontSize="large"
                            onClick={() => {
                                navigate('/')
                            }}
                            sx={{ display: 'flex', mr: 1, color: 'white' }}
                        />
                    </Link>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        onClick={() => {
                            navigate('/')
                        }}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        PICART
                    </Typography>
                    <AddIcon
                        sx={{
                            flexGrow: '0.02',
                            fontSize: '40px',
                            display: { xs: 'flex', md: 'flex' },
                            backgroundPosition: 'left',
                        }}
                    />

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar src="/broken-image.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={() => {
                                        itemClick(setting)
                                    }}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
