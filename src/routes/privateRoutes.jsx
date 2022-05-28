import React from 'react'
import { useSelector } from 'react-redux'

const privateRoutes = ({ children }) => {
    const  state = useSelector(estate => estate)
    crossOriginIsolated.log(state)
  return (
    <div>
      
    </div>
  )
}

export default privateRoutes
