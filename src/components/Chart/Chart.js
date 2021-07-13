import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  const chartBarDataValue = props.chartBarData.map(dataPoint => dataPoint.value);
  const maxExpenseValue = Math.max(...chartBarDataValue);

  return <div className="chart">
    {props.chartBarData.map(chartBarData =>
      <ChartBar
        key={chartBarData.label}
        value={chartBarData.value}
        maxValue={maxExpenseValue}
        label={chartBarData.label}

      />
    )}
  </div>
}

export default Chart;