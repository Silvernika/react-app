import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import {People} from './pages/People'
import {Navbar} from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="containers">
      <Routes>
        <Route path={'/'} exact element={<Home/>} />
        <Route path={'/People'} element={<People/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
