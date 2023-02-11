import React from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  // Treemap,
} from 'recharts';
import './BarChart.css';

export default function Chart() {
  const data = [
    {
      name: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
      value: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    },
  ];

  return (
    <>
      <BarChart width={690} height={740} data={data} className="BarChart">
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          orientation={'top'}
          tickLine={false}
          tick={{ stroke: 'bleak', strokeWidth: 1 }}
          tickMargin={10}
        />
        <YAxis
          dataKey="value"
          hide={false}
          tickCount={11}
          type="number"
          domain={['auto', 'auto']}
          interval={0}
          padding={{ bottom: 1, top: 40 }}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <Tooltip />

        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </>
  );
}
