// App.tsx is our app container

import './App.css'

import Register from './components/Register'
import RecipeReviewCard from './components/Header'
import WovenImageList from './components/Homepage1'





const App: React.FunctionComponent = () => {

  return (
    <div>
      {/* <Register /> */}
      {/* <RecipeReviewCard /> */}
      <WovenImageList />
    </div>
  )
}

export default App
