import Navbar from './layouts/Navbar';
import Login from './pages/Login';
import Welcome from './pages/Welcome'
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
