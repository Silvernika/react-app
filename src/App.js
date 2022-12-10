import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import People from './pages/People'
import Levin from './pages/Levin'
import Zaborsky from './pages/Zaborsky'
import Voinov from "./pages/Voinov"
import Phomin from "./pages/Phomin"
import Ananich from "./pages/Ananich"
import Grigorev from "./pages/Grigorev"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="containers">
      <Routes>
        <Route path={'/'} exact element={<Home/>} />
        <Route path={'/People'} element={<People/>}/>
        <Route path={'/Levin'} element={<Levin/>}/>
        <Route path={'/Zaborsky'} element={<Zaborsky/>}/>
        <Route path={'/Voinov'} element={<Voinov/>}/>
        <Route path={'/Phomin'} element={<Phomin/>}/>
        <Route path={'/Ananich'} element={<Ananich/>}/>
        <Route path={'/Grigorev'} element={<Grigorev/>}/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
