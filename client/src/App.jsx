import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomeLayout, Landing, Login, Register, Profile, AllJob, AddJob, EditJob, DeleteJob, Stats, Admin, Error, DashboardLayout } from "./pages"

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
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />
          },
          {
            path: "all-jobs",
            element: <AllJob />
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
            element: <Admin />
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