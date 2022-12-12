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
        <Route path={'/react-app/'} exact element={<Home/>} />
        <Route path={'/react-app/People'} element={<People/>}/>
        <Route path={'/react-app/Levin'} element={<Levin/>}/>
        <Route path={'/react-app/Zaborsky'} element={<Zaborsky/>}/>
        <Route path={'/react-app/Voinov'} element={<Voinov/>}/>
        <Route path={'/react-app/Phomin'} element={<Phomin/>}/>
        <Route path={'/react-app/Ananich'} element={<Ananich/>}/>
        <Route path={'/react-app/Grigorev'} element={<Grigorev/>}/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
