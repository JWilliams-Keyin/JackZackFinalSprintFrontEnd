import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import './App.css'

function App() {

  return (
    <>
     <Router>
      <Route path = '/' element = {<Home/>}></Route>
     </Router>
    </>
  )
}

export default App
