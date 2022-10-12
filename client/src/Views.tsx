import { Route, Routes } from 'react-router-dom'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { NotFound } from './components/pages/NotFound'
import { useCookies } from 'react-cookie'
import { HomeLayout } from './components/pages/Home/HomeLayout'
import { Test } from './components/pages/Home/Test'

export const Views = () => {
    const [cookies, setCookie] = useCookies<string>(['userToken'])
    return (
        <Routes>
            <Route
                path="/"
                element={cookies.userToken ? <HomeLayout /> : <Login />}
            />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
