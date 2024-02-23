import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const yearlyEarnings = [
  { month: 'Janeiro', value: 1500 },
  { month: 'Fevereiro', value: 1800 },
  { month: 'Março', value: 2000 },
  { month: 'Abril', value: 1700 },
  { month: 'Maio', value: 2200 },
  { month: 'Junho', value: 2500 },
  { month: 'Julho', value: 2300 },
  { month: 'Agosto', value: 2100 },
  { month: 'Setembro', value: 2400 },
  { month: 'Outubro', value: 2600 },
  { month: 'Novembro', value: 2800 },
  { month: 'Dezembro', value: 3000 }
]

export const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={yearlyEarnings}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C5FF07" stopOpacity={1} />
            <stop offset="95%" stopColor="#00FFA5" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Bar dataKey="value" fill="url(#colorUv)" />
      </BarChart>
    </ResponsiveContainer>
  )
}
