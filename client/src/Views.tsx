import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'


export const Views = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route index element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
