import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { useState } from 'react'

import { useCookies } from 'react-cookie'
import ImageCard from './components/ImageCard'

export const Views = () => {
    const [cookies, setCookie] = useCookies<string>(['userToken'])
    return (
        <Routes>
            <Route
                path="/"
                element={cookies.userToken ? <ImageCard /> : <Login />}
            />
            {/* <Route path='/' element={cookies.userToken ? <Home /> : <Login />} /> */}
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
