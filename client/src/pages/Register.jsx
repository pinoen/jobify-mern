import { Form, Link, redirect } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components"
import customFetch from '../utils/customFetch'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await customFetch.post('/auth/register', data)
    return redirect('/login')
  } catch (error) {
    console.log(error)
    return error
  }
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