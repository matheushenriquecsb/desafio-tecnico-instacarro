import "./Favorites.css";
import favoriteIcon from "../../assets/icon-favorite.png";
import { FavoritesProps } from "../../types/index";

const Favorites = ({ totalCharacters, onToggleFavorites }: FavoritesProps) => {
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
