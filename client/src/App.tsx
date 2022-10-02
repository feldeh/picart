// App.tsx is our app container

import './App.css'
import {Login} from './components/Login'
import {Register} from './components/Register'




const App: React.FunctionComponent = () => {

  return (
    <div>
      <Register />
      <Login />
    </div>
  )
}

export default App
