import Button from './Button.styles'
import { useCookies } from 'react-cookie'

const LogoutButton = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken'])

    const handleLogout = () => {
        removeCookie('userToken', { path: '/', sameSite: 'none', secure: true })
    }
    return (
        <Button variant="contained" onClick={handleLogout}>
            Logout
        </Button>
    )
}

export default LogoutButton
