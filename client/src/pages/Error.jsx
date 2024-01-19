import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from "../assets/images/not-found.svg"

const Error = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <Wrapper className="full-page">
        <div>
          <img src={img} alt="not found" />
          <h3>This page could not be found</h3>
          <p>We can not find the page you are looking for</p>
          <Link to="/dashboard">back to dashboard</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error