import React from "react";
import Sidenav from "../components/navigation/Sidenav";
import Chart from "../components/dashboard/Chart";
import DoughnutChart from "../components/dashboard/donut";
import Stats from "../components/dashboard/Stats";

function Dashboard() {
  return (
    <>
      <header className="bg-cyan-500 text-white py-4 px-6 md:px-12">
        <h1 className="text-2xl md:text-3xl font-semibold">Dashboard</h1>
      </header>
      
      
      <div className="flex flex-col md:flex-row">
       
        <Sidenav />
        
       
        <div className="flex flex-col w-full">
         
          <Stats />
          
         
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Chart />
            <DoughnutChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
