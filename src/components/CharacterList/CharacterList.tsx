import { CharacterList, ICharacterCard } from "../../types/components";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterList.css";

const CharacterCardList = ({ characters }: CharacterList) => {
  return (
    <div className="character-card-list">
      {characters.map((e: ICharacterCard) => (
        <CharacterCard
          key={e.id}
          id={e.id}
          name={e.name}
          description={e.description}
          image={e.image}
        />
      ))}
    </div>
  );
};

export default CharacterCardList;
