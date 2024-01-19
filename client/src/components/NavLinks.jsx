/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import { links } from "../utils/links"
import { useDashboardContext } from "../pages/DashboardLayout"

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = useDashboardContext()

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { path, text, icon } = link
        return (
          <NavLink
            key={text}
            to={path}
            className='nav-link'
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks