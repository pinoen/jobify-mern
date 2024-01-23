import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomeLayout, Landing, Login, Register, Profile, AllJobs, AddJob, EditJob, Stats, Admin, Error, DashboardLayout } from "./pages"
import { action as registerAction } from "./pages/Register"
import { action as loginAction } from "./pages/Login"
import { loader as dashboardLoader } from "./pages/DashboardLayout"
import { action as addJobAction } from "./pages/AddJob"
import { loader as allJobsLoader } from "./pages/AllJobs"
import { loader as editJobLoader } from "./pages/EditJob"
import { action as editJobAction } from "./pages/EditJob"
import { action as deleteAction } from "./pages/DeleteJob"
import { loader as adminLoader } from "./pages/Admin"

export const checkDefaultTheme = () => {
  const isDarkMode = localStorage.getItem('isDarkMode') === 'true'
  document.body.classList.toggle('dark-theme', isDarkMode)
  return isDarkMode
}

checkDefaultTheme()

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction
          },
          {
            path: 'delete-job/:id',
            action: deleteAction
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader
          },
          {
            path: "stats",
            element: <Stats />
          },
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader
          }
        ]
      }
    ]
  },
])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App