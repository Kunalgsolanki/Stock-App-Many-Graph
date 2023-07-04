import React from "react";

const Sidebar = ({ activeTab, onTabClick, onClose }) => {
  const handleSearch = (event) => {
    // Handle search functionality
  };

  return (
    <div className="bg-gray-200 h-screen w-64 absolute top-0 right-0 flex flex-col justify-start items-center p-4">
      
      <button
        className="self-end bg-gray-500 px-2 py-1 rounded-md mb-4"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm1 12.414L12.414 14 10 11.586 7.586 14 6 12.414 8.414 10 6 7.586 7.586 6 10 8.414 12.414 6 14 7.586 11.586 10 14 12.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-md mb-4"
          onChange={handleSearch}
        />
      </div>
      <ul className="flex flex-col gap-2">

      <li>
          <button
            className={`${
                activeTab === "chart" ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
            } px-4 py-2 rounded-md`}
            onClick={() => onTabClick("chart")}
          >
           Areachart
          </button>
        </li>
        <li>
          <button
            className={`${
                activeTab === "chart1" ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
            } px-4 py-2 rounded-md`}
            onClick={() => onTabClick("chart1")}
          >
           BarChart
          </button>
        </li>
        <li>
          <button
            className={`${
              activeTab === "chart2" ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
            } px-4 py-2 rounded-md`}
            onClick={() => onTabClick("chart2")}
          >
         LineChart
          </button>
        </li>
        <li>
          <button
            className={`${
                activeTab === "chart3" ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
            } px-4 py-2 rounded-md`}
            onClick={() => onTabClick("chart3")}
          >
                    ScatterChart

          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
