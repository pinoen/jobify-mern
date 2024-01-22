import { Form, Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components"

export const action = async (data) => {
  console.log(data)
  return null
}

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>

        <FormRow type="text" name="name" defaultValue="Emilio" />
        <FormRow type="text" name="lastName" defaultValue="Pino" labelText="Last name" />
        <FormRow type="text" name="location" defaultValue="Neuquen" />
        <FormRow type="email" name="email" defaultValue="emiliopino@me.com" />
        <FormRow type="password" name="password" defaultValue="123456" />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already have an account? <Link to="/login" className="member-btn">Login</Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Register