/* eslint-disable react/prop-types */
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa"
import Wrapper from "../assets/wrappers/Job"
import JobInfo from "./JobInfo"
import dayjs from "dayjs"
import { Form, Link } from "react-router-dom"

const Job = ({ _id, position, company, location, type, createdAt, status }) => {
  const date = dayjs(createdAt).format('MMM DD, YYYY')

  return (
    <Wrapper>
      <header>
        <div className="main-icon">
          {company.charAt(0)}
        </div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={location} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={type} />
          <div className={`status ${status}`}>
            {status}
          </div>
        </div>
        <footer className="actions">
          <Link to={`../edit-job/${_id}`} className="btn edit-btn">Edit</Link>
          <Form>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Job