import { useEffect, useState } from "react";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSearchInput(true);
    fetchDataInput(character);
  };

  const fetchDataInput = async (character: string) => {
    setLoading(true);
    const data = await fetchCharacterByName(character);
    setLoading(false);
    setCharacterData(data.results);
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
      <div></div>
    </div>
  );
};

export default Home;
