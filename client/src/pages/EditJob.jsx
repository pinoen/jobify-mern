import { toast } from "react-toastify"
import customFetch from "../utils/customFetch"
import { Form, redirect, useLoaderData } from "react-router-dom"
import Wrapper from "../assets/wrappers/DashboardFormPage"
import { FormRow, FormRowSelect, SubmitBtn } from "../components"
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants"


export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`)
    return data
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return redirect('../all-jobs')
  }
}

export const action = async ({ request, params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await customFetch.patch(`/jobs/${params.id}`, data)
    toast.success('Job updated successfully')
    return redirect('../all-jobs')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const EditJob = () => {
  const { foundJob } = useLoaderData()

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type='text' name='position' defaultValue={foundJob.position} />
          <FormRow type='text' name='company' defaultValue={foundJob.company} />
          <FormRow type='text' name='location' defaultValue={foundJob.location} />
          <FormRowSelect name='status' defaultValue={foundJob.status} list={Object.values(JOB_STATUS)} />
          <FormRowSelect name='type' defaultValue={foundJob.type} list={Object.values(JOB_TYPE)} />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  )
}

export default EditJob