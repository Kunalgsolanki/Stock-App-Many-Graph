import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./chart3";
import Header from "./Header";
import StockContext from "../context/StockContext";
import Sidebar from "./Sidebar";

import { fetchStockDetails, fetchQuote } from "../utils/api/stock-api";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});
  const [activeTab, setActiveTab] = useState("chart1");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails.name} />
      </div>
      <div className="md:col-span-2 row-span-4">
        {loading ? (
          
<div role="status" class="max-w-full   p-12 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700  ml-16 justify-center ">
  
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
    <div class="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-baseline mt-4 space-x-6">
        <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
        <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
        <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

        ) : (
          <>
            {activeTab === "chart" && <Chart />}
            {activeTab === "chart1" && <Chart1 />}
            {activeTab === "chart2" && <Chart2 />}
            {activeTab === "chart3" && <Chart3 />}
          </>
        )}
      </div>
      <div>
        {loading ? (
        
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>

        ) : (
          <Overview
            symbol={stockSymbol}
            price={quote.pc}
            change={quote.d}
            changePercent={quote.dp}
            currency={stockDetails.currency}
          />
        )}
      </div>
      <div className="row-span-2 xl:row-span-3">
        {loading ? (
         
<div role="status" class="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-between">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

        ) : (
          <Details details={stockDetails} />
        )}
      </div>
      <div className="absolute top-2 right-2 z-40">
        <button
          className="bg-gray-200 px-3 py-2 rounded-md"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {sidebarOpen && (
          <Sidebar
            activeTab={activeTab}
            onTabClick={handleTabClick}
            onClose={toggleSidebar}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
