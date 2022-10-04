// App.tsx is our app container

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Home } from './components/Home'
import { dividerClasses } from '@mui/material'




const App: React.FunctionComponent = () => {

  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='home' element={<Home />} />
      <Route path='*' element={<div>404 not found!</div>} />
    </Routes>
  )
}

export default App
