import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { GlobalStyle } from './Styles/GlobalStyles';
import { Home, Login } from './pages';


const App = () => {
 
  return (
    <BrowserRouter>
      <GlobalStyle/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
