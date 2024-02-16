import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar, Footer } from "./";
const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
