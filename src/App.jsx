import React from 'react'

import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'
import SignUp from './SignUp'
import LoginPage from './LoginPage'

const router=createBrowserRouter([{
  path:"/",
  element:<HomePage/>
},
{
  path:"/signup",
  element:<SignUp/>
},
{
  path:"loginpage",
  element:<LoginPage/>
  
},

])

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App