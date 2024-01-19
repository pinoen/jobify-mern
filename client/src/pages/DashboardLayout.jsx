/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSideBar, SmallSideBar, NavBar } from "../components"
import { createContext, useContext, useState } from "react"
import { checkDefaultTheme } from "../App"

const DashboardContext = createContext()

const DashboardLayout = () => {
  const user = {
    name: 'Sara Smith',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
  }
  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(checkDefaultTheme())

  const toggleIsDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    document.body.classList.toggle('dark-theme', newDarkMode)
    localStorage.setItem('isDarkMode', newDarkMode)
  }
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const logout = async () => {
    console.log("logout user")
  }

  return (
    <DashboardContext.Provider value={{ user, isDarkMode, showSidebar, toggleIsDarkMode, toggleSidebar, logout }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />

          <div>
            <NavBar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  return useContext(DashboardContext)
}
export default DashboardLayout