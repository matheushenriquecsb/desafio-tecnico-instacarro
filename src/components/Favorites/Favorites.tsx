import "./Favorites.css";
import favoriteIcon from "../../assets/icon-favorite.png";
import { FilterProps } from "../../types/components";

const Favorites = ({ totalCharacters, onToggleFavorites }: FilterProps) => {
  return (
    <div className="header-container">
      <p className="heroes-found">Encontrados {totalCharacters} heróis</p>
      <button className="favorites-button" onClick={onToggleFavorites}>
        <img src={favoriteIcon} alt="Favorite Icon" className="favorite-icon" />
        <span>Somente favoritos</span>
      </button>
    </div>
  );
};

export default Favorites;
