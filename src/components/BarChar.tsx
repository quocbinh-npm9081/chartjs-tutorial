import React from 'react'
import styled from 'styled-components';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Country } from '../type';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
interface Props {
    countries: Country[]
}
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};




const ChartWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;
`

const BarChar: React.FC<Props> = ({ countries }) => {

    const generaterChartData = () => {
        const data: number[] = [];
        const labels: string[] = [];
        countries.forEach((country) => {
            data.push(country.NewConfirmed);
            labels.push(country.Country)
        })


        const chart = {
            labels,
            datasets: [
                {
                    label: 'New COmfirmed',
                    data: data,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },

            ],
        }

        return chart;
    }

    return (
        <ChartWrapper>
            <Bar data={generaterChartData()} options={options}>BarChar</Bar>
        </ChartWrapper>
    )
}

export default BarChar