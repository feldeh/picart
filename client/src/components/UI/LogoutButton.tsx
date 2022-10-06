import { Button } from '@mui/material'
import { useCookies } from 'react-cookie'

const LogoutButton = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken'])

    const handleLogout = () => {
        removeCookie('userToken', { path: '/', sameSite: 'none', secure: true })
    }
    return (
        <Button
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: '20px' }}
            onClick={handleLogout}
        >
            Logout
        </Button>
    )
}

export default LogoutButton
