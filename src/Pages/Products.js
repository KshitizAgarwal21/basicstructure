import { Box } from "@mui/material";
import React from "react";
import microwave from "../assets/microwave.jpeg";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PieCharts from "../Component/PieChart/PieChart";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function Products() {
  return (
    <div>
      <Box
        sx={{
          width: "95%",
          height: "200px",
          background: "#e8e8e8",
          marginLeft: "20px",
          marginTop: "20px",
          borderRadius: "20px",
          padding: "50px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={microwave} />

        <h1>Hello Good evening</h1>

        <h1>Hello Good evening</h1>
        <h1>Hello Good evening</h1>
      </Box>

      <Box
        sx={{
          width: "95%",
          height: "500px",
          background: "#e8e8e8",
          marginLeft: "20px",
          marginTop: "20px",
          borderRadius: "20px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>

      <Box
        sx={{
          display: "flex",
          jsutifyContent: "space-between",
          marginLeft: "20px",
          marginTop: "20px",
          background: "#e8e8e8",
        }}
      >
        <PieCharts />
        <PieCharts />
        <PieCharts />
      </Box>
    </div>
  );
}
