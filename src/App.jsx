import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Admin from './pages/admin'
import './App.css'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path = '/admin' element = {<Admin/>}></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
