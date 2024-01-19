import Wrapper from '../assets/wrappers/ThemeToggle'
import { useDashboardContext } from '../pages/DashboardLayout'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkMode, toggleIsDarkMode } = useDashboardContext()

  return (
    <Wrapper onClick={toggleIsDarkMode}>
      {isDarkMode ? (
        <BsFillSunFill className='toggle-icon' />
      ) : (
        <BsFillMoonFill className='toggle-icon' />
      )}
    </Wrapper>
  )
}

export default ThemeToggle