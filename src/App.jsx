import React, { useState, useEffect } from 'react';
import Preloader from "./portfolio-01/preloader/Preloader";
import './App.css'
import { createBrowserRouter, createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './portfolio-01/root/Layout';
import Project from './pages/Project';

// import { Lines } from 'react-preloaders';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds delay for demonstration
  }, []);

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/'element={<Home />}></Route>
      <Route path='/contact'element={<Contact />}></Route>
      <Route path='/project'element={<Project />}></Route>
     
    </Route>
  ))

  return (
    <>
      <div>
      {loading ? <Preloader /> : <div>Your main content goes here</div>}
    </div>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
