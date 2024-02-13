import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from "./";
const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}

export default App
