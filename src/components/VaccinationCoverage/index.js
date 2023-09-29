import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="class">
      <h1 className="head">Vaccination Coverage</h1>
      <ResponsiveContainer width={1000} height={300} className="c">
        <BarChart
          data={last7DaysVaccination}
          margin={{top: 5}}
          width={900}
          height={400}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
              fontFamily: 'Roboto',
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
              fontFamily: 'Roboto',
            }}
          />
          <Bar
            dataKey="dose_1"
            name="Dose 1"
            fill="#5a8dee"
            barSize="20%"
            className="bar"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="dose_2"
            name="Dose 2"
            fill="#f54394"
            radius={[10, 10, 0, 0]}
            barSize="20%"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
