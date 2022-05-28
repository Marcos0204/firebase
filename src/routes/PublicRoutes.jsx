import React from 'react'
import { Navigate  } from 'react-router-dom'

import { useSelector } from 'react-redux'

const PublicRoutes = ({ children }) => {
    const  { isAuth, user } = useSelector(state => state.auth)
    //console.log(user)
  return !user && !isAuth ?
         children 
      : <Navigate to='/' />
    

}

export default PublicRoutes
