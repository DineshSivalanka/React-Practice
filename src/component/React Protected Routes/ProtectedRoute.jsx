import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children,Auth}) => {
    if(!Auth){
        return <Navigate to="/"/>
    }
    return children
}

export default ProtectedRoute