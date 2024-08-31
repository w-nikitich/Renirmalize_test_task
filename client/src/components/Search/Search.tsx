"use client"
import { useState } from "react";
import SearchIcon from "../../../public/images/search_icon.png";
import Image from "next/image";

interface SearchProps {
  handleSearch: (value: string) => void
}

export default function Search({handleSearch}: SearchProps) {
  const [inputData, setInputData] = useState('');

  const handleEnter = (e: any) => {
    if (e.key == 'Enter'){
      handleSearch(inputData);
    }
  }

  return (
    <div className="relative">
      <Image
        src={"/images/search_icon.png"}
        width={25}
        height={25}
        alt="Search"
        className="absolute top-3 left-3 hover:cursor-pointer"
        onClick={() => handleSearch(inputData)}
      />
      <input className="block border rounded-md max-w-36 py-2 md:py-3 pl-12 pr-3 md:max-w-52 border-gray-400 bg-inherit outline-none" placeholder="Search..." 
      value={inputData} onChange={(e) => setInputData(e.target.value)} onKeyDown={handleEnter}/>
    </div>
  );
}
