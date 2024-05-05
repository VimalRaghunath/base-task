import React from "react";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Endbar() {
  return (
    <div className="ml-[85rem] w-[8rem] ">
      <div className="flex justify-end p-5 gap-6 ">
        <div className="mt-5">
          <FaRegBell className="h-10 w-5"/>
        </div>
        <div className="mt-5">
          <img
            src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
            className="h-10 w-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Endbar;
