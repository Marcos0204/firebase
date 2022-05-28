import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { GlobalStyle } from './Styles/GlobalStyles';
import { Home, Login } from './pages';
import privateRoutes from './routes/privateRoutes';

const App = () => {
 
  return (
    <BrowserRouter>
      <GlobalStyle/>

      <privateRoutes />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
