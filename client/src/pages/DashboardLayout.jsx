/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Outlet, redirect, useLoaderData } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSideBar, SmallSideBar, NavBar } from "../components"
import { createContext, useContext, useState } from "react"
import { checkDefaultTheme } from "../App"
import customFetch from "../utils/customFetch"

export const loader = async () => {
  try {
    const { data } = await customFetch.get('users/current-user')
    return data
  } catch (error) {
    return redirect('/')
  }
}

const DashboardContext = createContext()

const DashboardLayout = () => {
  const { user } = useLoaderData()

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
              <Outlet context={user} />
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