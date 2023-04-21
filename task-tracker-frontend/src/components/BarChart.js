import React from 'react'
import Chart from 'chart.js/auto'
import { VictoryChart, VictoryBar, VictoryLabel, VictoryLegend } from 'victory'

const sampleData = [
    {x: "Feature", y: 10},
    {x: "Bug Fix", y: 3},
    {x: "Refactor", y: 4},
    {x: "Documentation", y: 5},
    {x: "Test", y: 7},
    {x: "Misc", y: 7}
]

function BarChart() {
  return (

    <VictoryChart
        height={200}
        width={450}
    >
        <VictoryBar
        alignment="start"
        categories={{ x: ["Feature", "Refactor", "Bug Fix", "Documentation", "Test", "Misc"] }}
        style={{ data: { fill: "#c43a31" }, labels: { fill: "black" } }}
        data={sampleData}
        labels={({ datum }) => datum.y}
        
        />
    </VictoryChart>
    )
}

export default BarChart