import { useEffect, useState } from "react";
import CharacterCardList from "../../components/CharacterList/CharacterList";
import Favorites from "../../components/Favorites/Favorites";
import { Header } from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
  fetchCharacterByName,
  fetchCharactersList,
} from "../../services/charactersApi";
import { Character } from "../../types/components";
import "./Home.css";

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [character, setCharacter] = useState<string>("");
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [isSearchInput, setIsSearchInput] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSearchInput(true);
    fetchDataInput(character);
  };

  const fetchDataInput = async (character: string) => {
    setLoading(true);
    const res = await fetchCharacterByName(character);
    setLoading(false);
    setCharacterData(res.results);
  };

  useEffect(() => {
    const fetchDataLists = async () => {
      setLoading(true);
      const res = await fetchCharactersList(currentPage);
      setCharacterData(res.results);
      setLoading(false);
    };
    fetchDataLists();
  }, [currentPage]);

  return (
    <div className="container">
      <div className="form-input">
        <Header />
        <SearchBar setCharacter={setCharacter} onSearch={handleSubmit} />
        <Favorites />
      </div>
      {loading && <p>Loading...</p>}
      <div>
        {isSearchInput && (
          <CharacterCardList
            characters={characterData.map((e) => ({
              id: e.id,
              name: e.name,
              description: e.description,
              image: e.thumbnail.path + "." + e.thumbnail.extension,
            }))}
          />
        )}
        {!loading && !isSearchInput && !showFavorites && (
          <CharacterCardList
            characters={characterData.map((e) => ({
              id: e.id,
              name: e.name,
              description: e.description,
              image: e.thumbnail.path + "." + e.thumbnail.extension,
            }))}
          />
        )}
        {!loading && !isSearchInput && !showFavorites && (
          <CharacterCardList
            characters={characterData.map((e) => ({
              id: e.id,
              name: e.name,
              description: e.description,
              image: e.thumbnail.path + "." + e.thumbnail.extension,
            }))}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
