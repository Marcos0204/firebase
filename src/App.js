import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { GlobalStyle } from './Styles/GlobalStyles';
import { Home, Login } from './pages';
import PrivateRoutes from './routes/privateRoutes';
import PublicRoutes from './routes/PublicRoutes';

const App = () => {
 
  return (
    <BrowserRouter>
      <GlobalStyle/>
      
      <Routes>
        <Route path="/" element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        } />
        <Route path="login" element={
          <PublicRoutes> 
           <Login />
          </PublicRoutes>      
        } />
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
