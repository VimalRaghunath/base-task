import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Doclogo from "../src/assets/Docframe.png";

function UploadDisabling() {
  const [loading, setLoading] = useState(true); 

  return (
    <div
      className="mx-auto my-auto w-[35rem] h-[20rem]"
      style={{ backgroundColor: "rgba(255,255,255,255)" }}
    >
      <div className="p-5">
        <img
          className="flex w-full justify-center rounded-md border-dotted border-2 border-gray-400 px-5 py-6 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 min-w-64"
          src={Doclogo}
          alt="Doclogo"
        />
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-400 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 min-w-64 mt-8"
          disabled={loading} 
        >
          <FontAwesomeIcon icon={faUpload} className="w-5 h-auto mr-2" />
          Upload
        </button>
      </div>
    </div>
  );
}

export default UploadDisabling;
