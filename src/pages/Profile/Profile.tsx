import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderProfile from "../../components/HeaderProfile/HeaderProfile";
import { fetchCharacterById } from "../../services/charactersApi";
import ComicsList from "../../components/ComicsList/ComicsList";
import { Character } from "../../types/index";

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const [aboutData, setAboutData] = useState<Character[]>([]);

  const characters = aboutData;
  const imageSize = "standard_fantastic";

  useEffect(() => {
    const fetchData = async () => {
      const characterId = id ?? "";
      const res = await fetchCharacterById(characterId);
      setAboutData(res.results);
    };

    fetchData();
  }, [id]);

  return (
    <div className="profile-container">
      {characters.map((data) => {
        return (
          <div>
            <HeaderProfile
              characterName={data.name}
              description={data.description}
              imageUrl={`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`}
            />
            <div>
              <ComicsList data={data.comics.items} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
