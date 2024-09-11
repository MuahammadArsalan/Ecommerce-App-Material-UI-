import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './assets/Components/Navbar'
import ResponsiveAppBar from './assets/Components/Navbar'

function Layout() {



  return (<>
    

    <ResponsiveAppBar/>  
    <Outlet/>  
    </>
)
}

export default Layout