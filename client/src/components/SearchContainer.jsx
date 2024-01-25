import { Form, Link, useSubmit } from "react-router-dom"
import Wrapper from "../assets/wrappers/DashboardFormPage"
import FormRow from "./FormRow"
import FormRowSelect from "./FormRowSelect"
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from "../../../utils/constants"
import SubmitBtn from "./SubmitBtn"
import { useAllJobsContext } from "../pages/AllJobs"

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext()
  const { search, status, type, sort } = searchValues
  const submit = useSubmit()

  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search form</h5>
        <div className='form-center'>
          <FormRow type='search' name='search' labelText='Search query' defaultValue={search} onChange={(e) => submit(e.currentTarget.form)} />
          <FormRowSelect
            name='status'
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={status}
            onChange={(e) => submit(e.currentTarget.form)}
          />
          <FormRowSelect
            name='type'
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue={type}
            onChange={(e) => submit(e.currentTarget.form)}
          />
          <FormRowSelect
            name='sort'
            defaultValue={sort}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => submit(e.currentTarget.form)}
          />

          <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>
            Reset Search Values
          </Link>
          {/* TEMP!!!! */}
          {/* <SubmitBtn formBtn /> */}
        </div>
      </Form>
    </Wrapper>
  )
}

export default SearchContainer