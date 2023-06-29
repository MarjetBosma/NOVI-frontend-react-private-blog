import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import BlogPost from "./pages/blog-post/BlogPost";
import BlogOverview from "./pages/blog-overview/BlogOverview";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navigation from "./components/Navigation";
import PageNotFound from "./pages/page-not-found/PageNotFound"
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [isAuthenticated, toggleIsAuthenticated] = useState(false);
  console.log(isAuthenticated);

  return (
      <>
          <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
          <Routes>
            <Route
                path="/"
                element={<Home />} />
            <Route
                path="/login"
                element={<Login toggleAuth={toggleIsAuthenticated}/>}
            />
            <Route
                path="/blogposts"
                element={<PrivateRoute
                isAuthenticated={isAuthenticated}><BlogOverview />
                </PrivateRoute>}
            />
            <Route
                path="/blogposts/:blogId"
                element={<PrivateRoute
                isAuthenticated={isAuthenticated}><BlogPost />
                </PrivateRoute>}
              />
          <Route path="*" element={<PageNotFound/>} />
          </Routes>
     </>
  );
}

export default App;

// Oude versie zonder private route component:
{/*<Routes>*/}
{/*    <Route path="/" element={<Home />} />*/}
{/*    <Route path="/login" element={<Login auth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />} />*/}
{/*    <Route path="/blogposts" element={isAuthenticated ? <BlogOverview /> : <Navigate to="/login" />} />*/}
{/*    <Route path="/blogposts/:blogId" element={isAuthenticated ? <BlogPost /> : <Navigate to="/login" />} />*/}
{/*    <Route path="*" element={<PageNotFound/>} />*/}
{/*</Routes>*/}