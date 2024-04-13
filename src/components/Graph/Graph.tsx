import './Graph.css';
import React from 'react'

import { Line } from 'react-chartjs-2';
import {
    Chart,
    defaults,
    registerables
} from 'chart.js';

import { useAppSelector } from '../../app/hooks';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

Chart.register(...registerables)

export default function Graph() {
    const { currentProduct } = useAppSelector((state) => state.product);

    const retailSalesData = currentProduct?.sales.map((sale) => sale?.retailSales);
    const wholesaleSalesData = currentProduct?.sales.map((sale) => sale?.wholesaleSales);
    const labels = currentProduct?.sales.map((sale) => sale?.weekEnding);
    
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Retail Sales',
                data: retailSalesData,
                backgroundColor: 'transparent',
                borderColor: '#44a6f6',
                pointBorderColor: '#44a6f6',
                pointStyle: 'line',
                pointRadius: 0,
                fill: false,
                tension: 0.4
            },
            {
                label: 'Wholesale Sales',
                data: wholesaleSalesData,
                backgroundColor: 'transparent',
                borderColor: '#98a3bd',
                pointBorderColor: '#98a3bd',
                pointStyle: 'line',
                pointRadius: 0,
                fill: false,
                tension: 0.4
                }
        ]
    }

    const maxValue = Math.max(...retailSalesData ?? [], ...wholesaleSalesData ?? []);

    const options = {
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                },
            },
            y: {
                display: false,
                min: -maxValue,
                max: maxValue * 2
            },
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                intersect: false,
            }
        },
    }

    return (
        <div id='graph'>
            <h3 id='graph-title'>Retail Sales</h3>
            <div id='graph-container'>
                <Line
                    data={data}
                    options={options}
                />
                <div id='graph-labels'>
                    <ul>
                        <li>JAN</li>
                        <li>FEB</li>
                        <li>MAR</li>
                        <li>APR</li>
                        <li>MAY</li>
                        <li>JUN</li>
                        <li>JUL</li>
                        <li>AUG</li>
                        <li>SEP</li>
                        <li>OCT</li>
                        <li>NOV</li>
                        <li>DEC</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}