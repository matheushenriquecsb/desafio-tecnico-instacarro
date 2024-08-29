import { CharacterList, ICharacterCard } from "../../types/index";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterList.css";

const CharacterCardList = ({ characters, onToggleFavorite }: CharacterList) => {
  return (
    <div className="character-card-list">
      {characters.map((e: ICharacterCard) => (
        <CharacterCard
          key={e.id}
          id={e.id}
          name={e.name}
          description={e.description}
          image={e.image}
          isFavorite={e.isFavorite}
          onToggleFavorite={() => onToggleFavorite(e.id)}
        />
      ))}
    </div>
  );
};

export default CharacterCardList;
