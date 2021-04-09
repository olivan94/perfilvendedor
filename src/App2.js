import React from "react";
import {
  G2,
  Chart,
  Tooltip,
  Interval,
  Coord
} from "bizcharts";

const data = [
  { name: 'London', answerValue: '1', avgMonthlyRain: 100.0 },
  { name: 'London', answerValue: '2', avgMonthlyRain: 100.0 },
  { name: 'London', answerValue: '3', avgMonthlyRain: 100.0 },
  { name: 'London', answerValue: '4', avgMonthlyRain: 100.0 }
];

export default function App2() {
    return (
      <Chart className="question-section" height={400} padding="auto" data={data} autoFit>
        <Interval
          adjust={[
           {
              type: 'dodge',
              marginRatio: 1,
            },
          ]}
          color="name"
          position="answerValue*avgMonthlyRain"
        />
        <Coord type="theta"/>
        <Tooltip shared />
      </Chart>
    );
}