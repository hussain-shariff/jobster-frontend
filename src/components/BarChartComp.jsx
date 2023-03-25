import React, { PureComponent } from 'react'
import {
    BarChart,
    Bar,
    Cell, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
    } from 'recharts';
import data from '../data';

const BarChartComp = () => {
    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width="100"
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#6520a4" />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default BarChartComp;
