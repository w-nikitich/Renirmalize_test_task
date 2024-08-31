"use client";
import { elementsPerPage } from "@/constants/constants";
import { useState } from "react";

interface PaginationSettingsProps {
  onElementsPerPageChange: (value: number) => void
}

export default function PaginationSettings({onElementsPerPageChange}: PaginationSettingsProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [elementsPerPageValue, setElementsPerPageValue] = useState(10);

  const handleShowDropdown = () => {
    setIsOpened(!isOpened);
  };

  const handleElementsPerPageChange = (value: number) => {
    setElementsPerPageValue(value);
    onElementsPerPageChange(value);
  }

  return (
    <div className="flex items-center mr-8">
      <p className="capitalize">Show</p>
      <div className="select-block flex flex-col items-center relative text-black">
        <div
          className="select relative mx-3 bg-gray-200 rounded-md py-3 pl-4 w-14 cursor-pointer"
          onClick={handleShowDropdown}
        >
          <span className="select-arrow absolute right-2.5"></span>
          <div className="select-option selected">{elementsPerPageValue}</div>
        </div>
        {isOpened && (
          <div className="options">
            {elementsPerPage.map((value) => (
              <div key={value} className="select-option py-1 pl-4 pr-5 hover:bg-gray-400 last-of-type:hover:rounded-b-md hover:cursor-pointer" onClick={() => {handleElementsPerPageChange(value)}}>
                {value}
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="lowercase">entries</p>
    </div>
  );
}
