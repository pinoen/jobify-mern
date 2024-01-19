import Wrapper from "../assets/wrappers/LandingPage"
import { Link } from "react-router-dom"
import main from "../assets/images/main.svg"
import { Logo } from "../components"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>

          <p>
            I am baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>

          <Link to="/register" className="btn register-link">Register</Link>
          <Link to="/register" className="btn">Login / Demo User</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing