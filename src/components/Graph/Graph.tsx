import './Graph.css';
import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { useAppSelector } from '../../app/hooks';

interface salesStructure {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

const transformData = (data: salesStructure[]) => {
    const monthlySales: { [month: string]: number } = {};
    data.forEach(item => {
      const month = item.weekEnding.split('-')[1];
      monthlySales[month] = (monthlySales[month] || 0) + item.retailSales;
    });
  
    return Object.keys(monthlySales).map(month => ({
      name: month,
      retailSales: monthlySales[month]
    }));
};

export default function Graph() {
    const { currentProduct } = useAppSelector((state) => state.product);
    
    // const transformedData = transformData(currentProduct?.sales || []);

    return (
        <div id='graph'>
            <h3 id='graph-title'>Retail Sales</h3>
            <div id='graph-container'>
            {/* <LineChart
                width={100}
                height={400}
                data={transformedData}
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
                <Line type="monotone" dataKey="retailSales" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="retailSales" stroke="#82ca9d" />
            </LineChart> */}
            </div>
        </div>
    )
}