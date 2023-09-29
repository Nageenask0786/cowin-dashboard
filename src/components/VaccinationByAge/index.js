import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div className="class1">
      <h1 className="head">Vaccination By Age</h1>
      <div className="cccc">
        <ResponsiveContainer width={1000} height={300}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={vaccinationByAge}
              startAngle={0}
              endAngle={360}
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="18-40" fill="#fecba6" />
              <Cell name="40-50" fill="#b3d23f" />
              <Cell name="Above 50" fill="#a44c9e" />
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VaccinationByAge
