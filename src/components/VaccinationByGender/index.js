import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div className="class1">
      <h1 className="head">Vaccination By Gender</h1>
      <div className="cccc">
        <PieChart width={1000} height={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByGender}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#fecba6" />
            <Cell name="Female" fill="#b3d23f" />
            <Cell name="Others" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
        )
      </div>
    </div>
  )
}

export default VaccinationByGender
