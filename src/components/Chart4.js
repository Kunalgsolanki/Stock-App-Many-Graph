import React, { useContext, useEffect, useState } from "react";
import ChartFilter from "./ChartFilter";
import Card from "./Card";
import {
  Bar,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchHistoricalData } from "../utils/api/stock-api";
import {
  createDate,
  convertDateToUnixTimestamp,
  convertUnixTimestampToDate,
} from "../utils/helpers/date-helper";
import { chartConfig } from "../constants/config";

const Chart4 = () => {
  const [filter, setFilter] = useState("1W");

  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [data, setData] = useState([]);

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        date: convertUnixTimestampToDate(data.t[index]),
        value: item.toFixed(2),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimestampUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);
      return { startTimestampUnix, endTimestampUnix };
    };

    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(
          stockSymbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix
        );
        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]);

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Bar
            dataKey="value"
            fill={darkMode ? "#312e81" : "rgb(199 210 254)"}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart4;
