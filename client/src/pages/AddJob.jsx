import { Form, redirect, useOutletContext } from "react-router-dom"
import Wrapper from "../assets/wrappers/DashboardFormPage"
import { FormRow, FormRowSelect, SubmitBtn } from "../components"
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await customFetch.post('/jobs', data)
    toast.success('Job created successfully')
    return redirect('/dashboard/all-jobs')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const AddJob = () => {
  const { user } = useOutletContext()


  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow type='text' name='position' />
          <FormRow type='text' name='company' />
          <FormRow type='text' name='location' defaultValue={user.location} />
          <FormRowSelect name='status' list={Object.values(JOB_STATUS)} defaultValue={JOB_STATUS.PENDING} />
          <FormRowSelect name='type' list={(Object.values(JOB_TYPE))} defaultValue={JOB_TYPE.FULL_TIME} />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  )
}

export default AddJob