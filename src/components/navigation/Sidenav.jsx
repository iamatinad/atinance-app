import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiSettings4Line } from "react-icons/ri";

import { AiOutlineUser } from "react-icons/ai";

import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaCreditCard,
  FaHistory,
  FaHome,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import { FaArrowDown19 } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

const Sidenav = () => {
  const menus = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "Dashboard", link: "/dashboardp", icon: FaChartLine },

    { name: "Transactions", link: "/transactions", icon: FaCreditCard },

    { name: "Budget", link: "/budget", icon: FaMoneyBillAlt },

    { name: "Incomes", link: "/income", icon: MdMonetizationOn },
    { name: "Expenses", link: "/expense", icon: FaArrowDown19 },
    { name: "History", link: "/history", icon: FaHistory },
    { name: "User", link: "/profile", icon: AiOutlineUser },
    { name: "Settings", link: "/settings", icon: RiSettings4Line },
    { name: "Logout", link: "/", icon: FiLogOut },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
