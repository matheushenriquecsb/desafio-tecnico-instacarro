import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon-favorite-card.svg";
import "./CharacterCard.css";
import { CharacterCardProps } from "../../types/index";

const CharacterCard = ({
  id,
  name,
  description,
  image,
  isFavorite,
  onToggleFavorite,
}: CharacterCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="character-card">
      <img
        src={image}
        alt={name}
        className="character-image"
        onClick={handleClick}
      />
      <div className="character-info">
        <div>
          <p className="character-name">{name}</p>
          <button
            className={`favorite-button ${isFavorite ? "favorite" : ""}`}
            onClick={onToggleFavorite}
          >
            <img src={icon} alt="favorite-icon" />
          </button>
        </div>
        <p className="character-description">{description || "Not Exists"}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
