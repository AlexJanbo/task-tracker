import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { VictoryPie, VictoryLegend } from 'victory'

const data = {
    labels: ['Completed', 'In Progress', 'Created'],
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
    }]
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    },
    radius: "75%",
    cutout: '40%',
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  const data2 =[
    { x: "High", y: 35 },
    { x: "Medium", y: 40 },
    { x: "Low", y: 55 }
  ]

function DoughnutChart() {
  return (
    // <div style={{ width: "25%", backgroundColor: "blue"}}>
    //     <Doughnut data={data} options={options} style={{ width: "auto"}} />
    // </div>
    <VictoryPie
        padAngle={5}
        innerRadius={20}
        height={400}
        colorScale={["red", "blue", "purple" ]}
        data={data2}
    >
    </VictoryPie>
    )
}

export default DoughnutChart