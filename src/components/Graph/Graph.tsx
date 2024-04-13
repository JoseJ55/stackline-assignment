import './Graph.css'; // CSS

// Chart JS
import { Line } from 'react-chartjs-2';
import {
    Chart,
    defaults,
    registerables
} from 'chart.js';

// Redux
import { useAppSelector } from '../../app/hooks';

// Chart JS override
defaults.maintainAspectRatio = false;
defaults.responsive = true;

// Chart JS register
// This allow the chart to be rendered.
Chart.register(...registerables)

// The visual chart fo the data for retail sales.
export default function Graph() {
    // Redux Selector
    const { currentProduct } = useAppSelector((state) => state.product);

    const retailSalesData = currentProduct?.sales.map((sale) => sale?.retailSales); // Sales for the current product
    const wholesaleSalesData = currentProduct?.sales.map((sale) => sale?.wholesaleSales); // Wholesales for the current product
    
    // This is for the x axis and where the points will be on the chart.
    const labels = currentProduct?.sales.map((sale) => sale?.weekEnding); // Dates for the current products
    
    // Data object for the chart
    const data = {
        labels: labels,
        datasets: [
            // Settings for both lines
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

    // Variable of the max value of the dataset
    const maxValue = Math.max(...retailSalesData ?? [], ...wholesaleSalesData ?? []);

    // Chart option object
    const options = {
        scales: {
            // Doesn't display grid and labels
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
            // Doesn't show legend
            legend: {
                display: false
            },
            // Make intersect of the pointer
            tooltip: {
                intersect: false,
            }
        },
    }

    // Manually rendering the title and the month labels for the chart
    // Note: Easier to control the styles of the chart and make is both independent from each other.
    return (
        <div id='graph'>
            <h3 id='graph-title'>Retail Sales</h3>

            <div id='graph-container'>
                <div id='graph-chart'>
                    <Line
                        data={data}
                        options={options}
                    />
                </div>

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