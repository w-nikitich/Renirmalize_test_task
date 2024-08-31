"use client";
import Header from "@/components/Header/Header";
import PaginationPages from "@/components/Pagination/PaginationPages";
import TableElement from "@/components/Table/TableElement";
import TableHeader from "@/components/Table/TableHeader";
import { Customer } from "@/types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const customers: Customer[] = [];

  const totalPages = Math.ceil(data.length / elementsPerPage);
  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:3000/data/sample_dataset_final_update.json"
    );
    const result = await response.json();
    setData(result);
    saveData(result);
  };

  const saveData = (data: any) => {
    localStorage.setItem("customerData", JSON.stringify(data));
  };

  const deleteItem = (id: number) => {
    const updatedData = data.filter(
      (item: any) => Number(item["Tracking ID"]) !== id
    );
    setData(updatedData);
    saveData(updatedData);
  };

  const filterData = (
    filterField: string,
    filterType: "inc" | "dec",
    isDate: boolean
  ) => {
    if (!isDate) {
      const sortedData = [...data].sort((a: any, b: any) => {
        const valueA = a[filterField];
        const valueB = b[filterField];

        if (typeof valueA === "string" && typeof valueB === "string") {
          return filterType === "inc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        }

        return 0;
      });
      setData(sortedData as any);
    } else {
      const sortedData = [...data].sort((a: any, b: any) => {
        const dateA = new Date(a[filterField]);
        const dateB = new Date(b[filterField]);

        if (filterType === "inc") {
          return dateA.getTime() - dateB.getTime();
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      });

      setData(sortedData as any);
    }
  };

  const searchData = (name: string) => {
    if (name === "") {
      const storedData = localStorage.getItem("customerData");
      const allData = storedData ? JSON.parse(storedData) : [];
      setData(allData);
    } else {
      const lowerCasedSearchValue = name.toLowerCase();
      const storedData = localStorage.getItem("customerData");
      const searchedData = JSON.parse(storedData as string).filter(
        (item: any) =>
          item["Product Name"].toLowerCase().includes(lowerCasedSearchValue)
      );
      setData(searchedData);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("customerData");
    const localData = storedData ? JSON.parse(storedData) : [];
    if (localData.length) {
      setData(localData);
    } else {
      fetchData();
    }
  }, []);

  data.forEach((value: any, index: number) => {
    customers.push({
      trackingID: value["Tracking ID"],
      productImage: value["Product Image"],
      productName: value["Product Name"],
      customer: value["Customer"],
      date: value["Date"],
      amount: value["Amount"],
      paymentMode: value["Payment Mode"],
      status: value["Status"],
    });
  });

  const currentData = customers.slice(startIndex, endIndex);

  const handleElementsPerPageChange = (value: number) => {
    setElementsPerPage(value);
  };

  const handlePageChange = (value: number) => {
    setCurrentPage(value);
  };

  return (
    <main className="pt-5 h-lvh flex flex-col justify-between text-xs md:text-sm lg:text-base">
      <div>
        <Header
          handleElementsPerPageChange={handleElementsPerPageChange}
          handleSearch={searchData}
        />
        <TableHeader handleFilter={filterData} />

        {currentData.map((value: Customer, index: number) => {
          if (index === 0 || index % 2 === 0) {
            return (
              <TableElement
                customer={value}
                key={value.trackingID}
                additionalStyles="even-row bg-violet-200 bg-opacity-25"
                handleDelete={deleteItem}
              />
            );
          }
          return (
            <TableElement
              customer={value}
              key={value.trackingID}
              handleDelete={deleteItem}
            />
          );
        })}
      </div>

      <PaginationPages
        currentPage={currentPage}
        numberOfPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </main>
  );
}
