import "recharts";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import { calculateBiorhythmSeries } from "../lib/Bioryhythm";

// const data = [
//   { date: "2023-12-21", physical: 1.0, emotional: -0.5, intellectual: -1.0 },
//   { date: "2023-12-23", physical: -1.0, emotional: 0.0, intellectual: -1.5 },
//   { date: "2023-12-24", physical: 0.0, emotional: 0.5, intellectual: -0.9 },
// ];

const BiorhythmChart = ({ birthDate, targetDate }) => {
  const series = calculateBiorhythmSeries(birthDate, targetDate, 15);

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={series}>
        <CartesianGrid vertical={false} strokeDasharray="2 4" />
        <XAxis
          dataKey="date"
          ticks={[series[3].date, series[15].date, series[27].date]}
          strokeWidth={3}
          strokeDasharray="6"
          stroke="black"
        />
        <ReferenceLine x={series[15].date} />
        <Line
          dataKey="physical"
          stroke="green"
          strokeWidth={3}
          dot={false}
          type="natural"
        />
        <Line
          dataKey="emotional"
          stroke="white"
          strokeWidth={3}
          dot={false}
          type="natural"
        />
        <Line
          dataKey="intellectual"
          stroke="red"
          strokeWidth={3}
          dot={false}
          type="natural"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BiorhythmChart;
