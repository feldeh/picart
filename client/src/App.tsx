// App.tsx is our app container

import './App.css'

import Register from './components/Register'
import WovenImageList from './components/Homepage1'
import Header from './components/Navbar1'





const App: React.FunctionComponent = () => {

  return (
    <div>
      {/* <Register /> */}
      {/* <WovenImageList /> */}
      <Header /> 
    </div>
  )
}

export default App
