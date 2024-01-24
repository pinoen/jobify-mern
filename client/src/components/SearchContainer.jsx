import { Form, Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/DashboardFormPage"
import FormRow from "./FormRow"
import FormRowSelect from "./FormRowSelect"
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from "../../../utils/constants"
import SubmitBtn from "./SubmitBtn"

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search form</h5>
        <div className='form-center'>
          {/* search position */}

          <FormRow type='search' name='search' labelText='Search query' defaultValue='a' />
          <FormRowSelect
            name='status'
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue='all'
          />
          <FormRowSelect
            name='type'
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue='all'
          />
          <FormRowSelect
            name='sort'
            defaultValue='newest'
            list={[...Object.values(JOB_SORT_BY)]}
          />

          <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>
            Reset Search Values
          </Link>
          {/* TEMP!!!! */}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  )
}

export default SearchContainer