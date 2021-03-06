import React from 'react'
import { Navigate  } from 'react-router-dom'

import { useSelector } from 'react-redux'

const PrivateRoutes = ({ children }) => {
    const  { isAuth, user } = useSelector(state => state.auth)
    //console.log(user)
  return !!user && !!isAuth ?
         children 
      : <Navigate to='/login' />
    

}

export default PrivateRoutes
