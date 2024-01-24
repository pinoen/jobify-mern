/* eslint-disable react/prop-types */
import { useState } from "react"
import Wrapper from "../assets/wrappers/ChartsContainer"
import { AreaChart, BarChart } from '../components/index'

const ChartsContainer = ({ data }) => {
  const [isBarChart, setIsBarChart] = useState(true)
  return (
    <Wrapper>
      <h4>monthly applications</h4>
      <button type="button" onClick={() => setIsBarChart(prev => !prev)}>
        {isBarChart ? 'Area chart' : 'Bar chart'}
      </button>
      {isBarChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  )
}

export default ChartsContainer