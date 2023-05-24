import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import BlogPost from "./pages/blog-post/BlogPost";
import BlogOverview from "./pages/blog-overview/BlogOverview";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navigation from "./components/Navigation";
import PageNotFound from "./pages/page-not-found/PageNotFound"

function App() {

  return (
      <>
          <Navigation />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/blogposts" element={<BlogOverview/>} />
              <Route path="/blogposts/:blogId" element={<BlogPost/>} />
              <Route path="*" element={<PageNotFound/>} />
          </Routes>
      </>
  );
}

export default App;