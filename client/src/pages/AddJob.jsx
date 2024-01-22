import { Form, useNavigation, useOutletContext } from "react-router-dom"
import Wrapper from "../assets/wrappers/DashboardFormPage"
import { FormRow, FormRowSelect } from "../components"
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';

const AddJob = () => {
  const { user } = useOutletContext()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

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
          <button type="submit" className="btn btn-block form-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting' : 'Submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  )
}

export default AddJob