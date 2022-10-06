import { Route, Routes } from 'react-router-dom'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { Home } from './components/pages/Home'
import { NotFound } from './components/pages/NotFound'
import { useState } from 'react'

import { useCookies } from 'react-cookie'
import ImageCard from './components/UI/ImageCard'
import { HomeLayout } from './components/pages/HomeLayout'

export const Views = () => {
    const [cookies, setCookie] = useCookies<string>(['userToken'])
    return (
        <Routes>
            <Route
                path="/"
                element={cookies.userToken ? <HomeLayout /> : <Login />}
            />
            {/* <Route
                path="/"
                element={cookies.userToken ? <Home /> : <Login />}
            /> */}
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
