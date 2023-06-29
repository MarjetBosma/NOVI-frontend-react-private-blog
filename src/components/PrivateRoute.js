import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute ({ isAuthenticated, children }) {
    if (isAuthenticated) {
        return children  // BlogOverview en BlogPost zijn children van PrivateRoute. Dit is behandeld in de huiswerkklas, en toe heb ik het zo overgenmen, maar eerlijk gezegd begrijp ik net niet helemaal hoe het nu precies zit, maar het werkt wel.
    } else {
        return <Navigate to="/login" replace />  // Replace vervangt de "oude" route
    }
}

export default PrivateRoute;

