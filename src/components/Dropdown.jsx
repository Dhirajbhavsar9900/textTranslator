import React from "react";

function Dropdown({supportedLanguages , label, onChangeFn}) {
  return (
    <div className="flex justify-center items-center gap-2">
        <h1 className="text-xl font-semibold">{label}: </h1>
      <div className="relative group rounded-lg w-64 bg-gray-50 overflow-hidden ">
      
        <select className=" p.2"
        onChange={onChangeFn}        
        >
          {
            Object.entries(supportedLanguages).map(([language,value]) => {
                return (
                <option value={value} key={value} >{language} </option>
                )
            })
          }
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
