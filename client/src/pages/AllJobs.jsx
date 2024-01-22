import { toast } from "react-toastify"
import customFetch from "../utils/customFetch"
import { useLoaderData } from "react-router-dom"
import { JobsContainer, SearchContainer } from "../components"


export const loader = async () => {
  try {
    const { data } = await customFetch.get('/jobs')
    return { data }
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const AllJobs = () => {
  const { data } = useLoaderData()
  console.log(data)

  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  )
}

export default AllJobs