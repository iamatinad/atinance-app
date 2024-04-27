import React from "react";
import { BsCashCoin, BsCurrencyDollar } from "react-icons/bs";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { SiCashapp } from "react-icons/si";

const data = [
  {
    label: "Your Total Balance",
    amount: "2,000.00",
    increase: Math.random() * 10 - 5, 
    icon: <BsCurrencyDollar size={26} />,
  },
  {
    label: "Total Income",
    amount: "5,000.00",
    icon: <BsCashCoin size={26} />,
    increase: Math.random() * 5 - 2.5, 
  },
  {
    label: "Total Expense",
    amount: "3,000.00",
    icon: <SiCashapp size={26} />,
    increase: Math.random() * 5 - 2.5,
  },
];

const ICON_STYLES = [
  "bg-blue-300 text-blue-800",
  "bg-emerald-300 text-emerald-800",
  "bg-rose-300 text-rose-800",
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-900 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${ICON_STYLES[index]}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">{item.label}</p>
              <p className="text-2xl 2xl:text-3xl font-medium text-black dark:text-gray-400">${item.amount}</p>
            </div>
          </div>
          <div>
            <p className={`flex items-center text-base md:text-lg font-semibold ${item.increase > 0 ? "text-emerald-500" : "text-red-500"}`}>
              {item.increase > 0 ? <IoMdArrowUp className="mr-1" /> : <IoMdArrowDown className="mr-1" />}
              {Math.abs(parseFloat(item.increase).toFixed(1))} % 
            </p>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-500">Compare to last year</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
