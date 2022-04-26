import './App.css'
import { Routes, Route } from 'react-router-dom'
// Views
import Home from './views/Home'
import Crew from './views/Crew'
import Destination from './views/Destination'
import Technology from './views/Technology'
// Components
import Header from './components/UI/Header/Header'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </>
  )
}

export default App
