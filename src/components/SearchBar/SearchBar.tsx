import searchIcon from "../../assets/icon-search.png";
import { SearchBarProps } from "../../types/index";
import "./SearchBar.css";

const SearchBar = ({ setCharacter, onSearch }: SearchBarProps) => {
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(e);
      }}
    >
      <div className="search-bar">
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
        <input
          onChange={(e) => setCharacter(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Procure por heróis"
        />
      </div>
    </form>
  );
};

export default SearchBar;
