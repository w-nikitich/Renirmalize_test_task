import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import PaginationSettings from "../Pagination/PaginationSettings";
import Search from "../Search/Search";

interface HeaderProps {
  handleElementsPerPageChange: (value: number) => void,
  handleSearch: (value: string) => void
}

export default function Header({handleElementsPerPageChange, handleSearch}: HeaderProps) {
  return (
    <header className="flex justify-between px-5">
      <div className="flex items-center">
        <PaginationSettings onElementsPerPageChange={handleElementsPerPageChange}/>
        <Search handleSearch={handleSearch}/>
      </div>
      <ThemeSwitcher />
    </header>
  );
}
