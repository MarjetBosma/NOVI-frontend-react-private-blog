import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute ({ isAuthenticated, children }) {
    if (isAuthenticated) {
        return children  // BlogOverview en BlogPost zijn children van PrivateRoute
    } else {
        return <Navigate to="/login" replace />  // Replace vervangt de "oude" route
    }
}

// De manier waarop de private routes zijn geschreven, heb ik overgenomen van een medestudent en de docent tijdens de huiswerkklas

export default PrivateRoute;

