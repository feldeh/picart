// App.tsx is our app container

import './App.css'

import Register from './components/Register'
import WovenImageList from './components/Homepage1'
import Header from './components/Navbar1'
import Mainboard from './components/Mainboard';
import Pin from './components/Pin';







const App: React.FunctionComponent = () => {

  return (
    <div>
      {/* <Register /> */}
      {/* <WovenImageList /> */}
      <Header /> 
      <Mainboard /> 
      <Pin />
    </div>
  )
}

export default App
