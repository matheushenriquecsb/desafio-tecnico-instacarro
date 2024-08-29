import { HeaderProps } from "../../types/index";
import "./HeaderProfile.css";

const HeaderProfile = ({
  characterName,
  description,
  imageUrl,
}: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-background">
        <h1 className="header-title">
          DESCUBRA TODOS OS QUADRINHOS DESTE PERSONAGEM
        </h1>
      </div>
      <div className="header-content">
        <img
          src={imageUrl}
          alt={characterName}
          className="character-image-profile"
        />
        <div className="character-info">
          <h2 className="character-name">{characterName}</h2>
          <p className="character-description">{description}</p>
        </div>
      </div>
    </header>
  );
};

export default HeaderProfile;
