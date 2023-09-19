import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RoutesManage = ({ isAllowed, children, destination = "/login" }) => {
    if (!isAllowed) return <Navigate to={destination} replace />

    return children ? children : <Outlet />
}


export default RoutesManage
