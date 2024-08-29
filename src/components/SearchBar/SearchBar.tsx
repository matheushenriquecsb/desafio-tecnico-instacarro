import searchIcon from "../../assets/icon-search.png";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form className="search-form">
      <div className="search-bar">
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Procure por heróis"
        />
      </div>
    </form>
  );
};

export default SearchBar;
