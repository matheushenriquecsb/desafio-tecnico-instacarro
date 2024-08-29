import "./Favorites.css";
import favoriteIcon from "../../assets/icon-favorite.png";

const Favorites = () => {
  return (
    <div className="header-container">
      <p className="heroes-found">Encontrados heróis</p>
      <button className="favorites-button">
        <img src={favoriteIcon} alt="Favorite Icon" className="favorite-icon" />
        <span>Somente favoritos</span>
      </button>
    </div>
  );
};

export default Favorites;
