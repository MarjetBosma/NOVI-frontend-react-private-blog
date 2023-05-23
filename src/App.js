import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import BlogPost from "./pages/blog-post/BlogPost";
import BlogOverview from "./pages/blog-overview/BlogOverview";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navigation from "./components/Navigation";


function App() {

  return (
      <>
          <Navigation />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/blogposts" element={<BlogOverview/>} />
              <Route path="/blogposts/:blogId" element={<BlogPost/>} />
              {/*<Route path="*" element={<NotFound/>} />*/}
          </Routes>
      </>
  );
}

export default App;