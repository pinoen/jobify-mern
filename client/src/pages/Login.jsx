import { Form, Link, redirect } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo, SubmitBtn } from "../components"
import customFetch from "../utils/customFetch"
import { toast } from "react-toastify"

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await customFetch.post('/auth/login', data)
    toast.success('Login successful')
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const Login = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="emiliopino@me.com" />
        <FormRow type="password" name="password" defaultValue="emilio123" />
        <SubmitBtn />
        <button type="button" className="btn btn-block">
          Explore Demo
        </button>
        <p>
          Do not have an account? <Link to="/register" className="member-btn">Register</Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Login