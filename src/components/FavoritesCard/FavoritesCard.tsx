import CharacterCard from "../CharacterCard/CharacterCard";
import "./FavoritesCard.css";
import { FavoriteCharactersProps } from "../../types/components";

const FavoriteCharacters = ({
  characters,
  favorites,
  onFavoriteToggle,
}: FavoriteCharactersProps) => {
  const favoriteCharacters = characters.filter((character) =>
    favorites.includes(character.id)
  );

  return (
    <div className="character-card-list">
      {favoriteCharacters.length > 0 ? (
        favoriteCharacters.map((e) => (
          <CharacterCard
            key={e.id}
            id={e.id}
            name={e.name}
            image={`${e.thumbnail.path}/standard_fantastic.${e.thumbnail.extension}`}
            description={e.description}
            isFavorite={true}
            onToggleFavorite={() => onFavoriteToggle(e.id)}
          />
        ))
      ) : (
        <p>No favorite characters found.</p>
      )}
    </div>
  );
};

export default FavoriteCharacters;
