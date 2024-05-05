import React, { useState } from "react";
import Logo from "../src/assets/Baselogo.png";
import Dashboard from "../src/assets/Dashboard.png";
import { BsFileBarGraphFill } from "react-icons/bs";
import Invoice from "../src/assets/Invoice.png";
import Schedule from "../src/assets/Schedule.png";
import Calendar from "../src/assets/Calendar.png";
import notification from "../src/assets/Notification.png";
import Settings from "../src/assets/Settings.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (route) => {
    navigate(route);
    setActiveButton(route);
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,255)",
        width: "15rem",
        height: "90vh",
        marginTop: "-4.5rem",
      }}
    >
      <div className="flex  items-center mt-8  ml-16">
        <img className="image" src={Logo} alt="Logo" />
        <h2 className="text-2xl leading-8 tracking-tight text-gray-1000 ml-3">
          Base
        </h2>
      </div>

      <div className="flex flex-col mt-10 ml-8 gap-7 text-gray-400">
        <button
          className={`flex gap-2 ${activeButton === "" && "text-indigo-600"}`}
          onClick={() => handleButtonClick("")}
        >
          <img src={Dashboard} alt="dash" className="w-5 h-auto" />
          <h3>Dashboard</h3>
        </button>
        <button
          className={`flex gap-2 ${activeButton === "upload" && "text-indigo-600"}`}
          onClick={() => handleButtonClick("upload")}
        >
          <BsFileBarGraphFill className="h-7" />
          <h3>Upload</h3>
        </button>
        <button className="flex gap-2">
          <img src={Invoice} alt="invoice" className="w-5 h-auto" />
          <h3>Invoice</h3>
        </button>
        <button className="flex gap-2">
          <img src={Schedule} alt="schedule" className="w-5 h-auto" />
          <h3>Schedule</h3>
        </button>
        <button className="flex gap-2">
          <img src={Calendar} alt="calendar" className="w-5 h-auto" />
          <h3>Calendar</h3>
        </button>
        <button className="flex gap-2">
          <img src={notification} alt="notification" className="w-5 h-auto" />
          <h3>Notification</h3>
        </button>
        <button className="flex gap-2">
          <img src={Settings} alt="settings" className="w-5 h-auto" />
          <h3>Settings</h3>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
