import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Mycontext from './components/Mycontext';
import productsData from "../src/data/productsData.json"
import Cart from './components/Cart';
const App = () => {
   const[cartCount, setCartCount]=useState(0);
   const [addedProducts,setAddedProducts]=useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />

    },
    {
      path:"/cart",
      element:<Cart />
    }
  ]);

  return (
    <>
      <Mycontext.Provider value={{productsData,cartCount,setCartCount,addedProducts,setAddedProducts}}>
        <RouterProvider router={router} />
      </Mycontext.Provider>
    </>
  )
}

export default App