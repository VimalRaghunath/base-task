import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Endbar from "./Endbar";
import Sidebar from "./Sidebar";
const Outlett = () => {
  return (
  <div style={{backgroundColor:"rgba(250,250,251,255)",height:"100vh"}} >
      <div>
        <Endbar/>
      </div>
      <div className="flex">
       <Sidebar />
       <Outlet/>
      </div>
      </div>
  );
};

export default Outlett;