import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
        {
                name: 'Jan',
                uv: 4000,
                pv: 2400,
                amt: 2400,
        },
        {
                name: 'Feb',
                uv: 3000,
                pv: 1398,
                amt: 2210,
        },
        {
                name: 'Mar',
                uv: 2000,
                pv: 9800,
                amt: 2290,
        },
        {
                name: 'Apr',
                uv: 2780,
                pv: 3908,
                amt: 2000,
        },
        {
                name: 'Jun',
                uv: 1890,
                pv: 4800,
                amt: 2181,
        },
        {
                name: 'July',
                uv: 2390,
                pv: 3800,
                amt: 2500,
        },
        {
                name: 'Aug',
                uv: 3490,
                pv: 4300,
                amt: 2100,
        },
];

const LineGraph = () => {
        return (
                <ResponsiveContainer width="100%" height="90%">
                        <LineChart width={300} height={100} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#1C7690" strokeWidth={2} />
                                <Line type="monotone" dataKey="uv" stroke="#62C7E4" strokeWidth={2} />
                                <XAxis dataKey='name' type='category' />
                        </LineChart>
                </ResponsiveContainer>
        );
};
export default LineGraph