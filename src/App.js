import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { GlobalStyle } from './Styles/GlobalStyles';
import { Login } from './pages';


const App = () => {
 
  return (
    <BrowserRouter>
      <GlobalStyle/>
      
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App