interface PaginationPageProps {
  currentPage: number;
  numberOfPages: number;
  handlePageChange: (value: number) => void;
}

export default function PaginationPages({
  currentPage,
  numberOfPages,
  handlePageChange,
}: PaginationPageProps) {
  return (
    <div className="flex items-center justify-center hover:cursor-pointer py-2">
      {currentPage === 1 && numberOfPages !== 1 && (
        <div className="flex items-center justify-center hover:cursor-pointer">
          <p className="rounded-xl p-2 bg-gray-400 mr-3 text-black">
            {currentPage}
          </p>
          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {currentPage + 1}
          </p>
          <p className="pr-2">...</p>
          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(numberOfPages)}
          >
            {numberOfPages}
          </p>
        </div>
      ) }
      {currentPage === numberOfPages && numberOfPages !== 1 ? (
        <div className="flex items-center justify-center hover:cursor-pointer">
          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(1)}
          >
            {1}
          </p>
          <p className="pr-2">...</p>
          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {currentPage - 1}
          </p>
          <p className="rounded-xl p-2 bg-gray-400 mr-3 text-black">
            {currentPage}
          </p>
        </div>
      ) : numberOfPages === 1 && (
        <div className="flex items-center justify-center hover:cursor-pointer">
          <p className="rounded-xl p-2 bg-gray-400 mr-3 text-black">{1}</p>
        </div>
      )}
      {currentPage !== 1 &&
      currentPage !== numberOfPages &&
      currentPage !== 2 &&
      currentPage !== numberOfPages - 1 ? (
        <div className="flex items-center justify-center hover:cursor-pointer">
          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(1)}
          >
            1
          </p>
          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {currentPage - 1}
          </p>
          <p className="rounded-xl p-2 bg-gray-400 mr-3 text-black">
            {currentPage}
          </p>
          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {currentPage + 1}
          </p>
          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(numberOfPages)}
          >
            {numberOfPages}
          </p>
        </div>
      ) : currentPage === 2 ? (
        <div className="flex items-center justify-center hover:cursor-pointer">
          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(1)}
          >
            1
          </p>
          <p className="rounded-xl p-2 bg-gray-400 mr-3 text-black">
            {currentPage}
          </p>
          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {currentPage + 1}
          </p>

          <p
            className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
            onClick={() => handlePageChange(numberOfPages)}
          >
            {numberOfPages}
          </p>
        </div>
      ) : (
        currentPage === numberOfPages - 1 && (
          <div className="flex items-center justify-center hover:cursor-pointer">
            <p
              className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
              onClick={() => handlePageChange(1)}
            >
              1
            </p>
            <p className="pr-2">...</p>
            <p
              className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {currentPage - 1}
            </p>
            <p className="rounded-xl p-2 bg-gray-400 mr-3 text-black">
              {currentPage}
            </p>
            <p
              className="rounded-xl p-2 bg-gray-400 mr-3 text-black"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {currentPage + 1}
            </p>
          </div>
        )
      )}
    </div>
  );
}
