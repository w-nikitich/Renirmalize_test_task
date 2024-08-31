interface TableHeaderProps {
  handleFilter: (filterField: string, filterType: "inc" | "dec", isDate: boolean) => void
}

export default function TableHeader({handleFilter}: TableHeaderProps) {
  return (
    <div className="table-header flex justify-between items-center px-12 mt-14 mb-4">
      <p className="font-bold w-32">Tracking ID</p>
      <div className="flex items-center w-32">
        <p className="font-bold text-center">Product</p>
        <div className="flex flex-col md:ml-3 lg:ml-6 xl:ml-8 2xl:ml-12">
          <span className="filter-up" onClick={() => handleFilter('Product Name', 'inc', false)}></span>
          <span className="filter-down" onClick={() => handleFilter('Product Name', 'dec', false)}></span>
        </div>
      </div>
      <div className="flex items-center w-32">
        <p className="font-bold text-center">Customer</p>
        <div className="flex flex-col md:ml-3 lg:ml-6 xl:ml-8 2xl:ml-12">
          <span className="filter-up" onClick={() => handleFilter('Customer', 'inc', false)}></span>
          <span className="filter-down" onClick={() => handleFilter('Customer', 'dec', false)}></span>
        </div>
      </div>
      <div className="flex items-center w-32">
        <p className="font-bold text-center">Date</p>
        <div className="flex flex-col md:ml-3 lg:ml-6 xl:ml-8 2xl:ml-12">
          <span className="filter-up" onClick={() => handleFilter('Date', 'inc', true)}></span>
          <span className="filter-down" onClick={() => handleFilter('Date', 'dec', true)}></span>
        </div>
      </div>
      <p className="font-bold w-32">Amount</p>
      <p className="font-bold w-32 text-center">Payment Mode</p>
      <div className="flex items-center w-32">
        <p className="font-bold text-center">Status</p>
        <div className="flex flex-col md:ml-3 lg:ml-6 xl:ml-8 2xl:ml-12">
          <span className="filter-up" onClick={() => handleFilter('Status', 'inc', false)}></span>
          <span className="filter-down" onClick={() => handleFilter('Status', 'dec', false)}></span>
        </div>
      </div>
      <p className="font-bold w-32 text-center">Action</p>
    </div>
  );
}
