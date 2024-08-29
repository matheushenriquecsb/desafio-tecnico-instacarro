import { useCallback, useEffect, useState } from "react";
import CharacterCardList from "../../components/CharacterList/CharacterList";
import Favorites from "../../components/Favorites/Favorites";
import FavoriteCharacters from "../../components/FavoritesCard/FavoritesCard";
import { Header } from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
  FavoritesProvider,
  useFavorites,
} from "../../context/favoritesContext";
import {
  fetchCharacterByName,
  fetchCharactersList,
} from "../../services/charactersApi";
import { Character } from "../../types/index";
import "./Home.css";

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [character, setCharacter] = useState<string>("");
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [isSearchInput, setIsSearchInput] = useState<boolean>(false);
  const [currentPage] = useState<number>(0);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const handleSubmit = () => {
    setIsSearchInput(true);
    fetchDataInput(character);
  };

  const fetchDataInput = async (character: string) => {
    setLoading(true);
    const res = await fetchCharacterByName(character);
    setLoading(false);
    setCharacterData(res.results);
  };

  const handleMore = useCallback(async () => {
    const offset = characterData.length;
    const res = await fetchCharactersList(offset);
    setCharacterData([...characterData, ...res.results]);
  }, [characterData]);

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
        <Favorites
          totalCharacters={characterData.length}
          showOnlyFavorites={showFavorites}
          onToggleFavorites={() => setShowFavorites((prev) => !prev)}
        />
      </div>
      {loading && <p>Loading...</p>}
      <div>
        {isSearchInput && !showFavorites && (
          <CharacterCardList
            characters={characterData.map((e) => ({
              id: e.id,
              name: e.name,
              description: e.description,
              image: e.thumbnail.path + "." + e.thumbnail.extension,
              isFavorite: isFavorite(e.id),
            }))}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {!loading && !isSearchInput && !showFavorites && (
          <CharacterCardList
            characters={characterData.map((e) => ({
              id: e.id,
              name: e.name,
              description: e.description,
              image: e.thumbnail.path + "." + e.thumbnail.extension,
              isFavorite: isFavorite(e.id),
            }))}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {!loading && !isSearchInput && !showFavorites && (
          <CharacterCardList
            characters={characterData.map((e) => ({
              id: e.id,
              name: e.name,
              description: e.description,
              image: e.thumbnail.path + "." + e.thumbnail.extension,
              isFavorite: isFavorite(e.id),
            }))}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {showFavorites && (
          <FavoriteCharacters
            characters={characterData}
            favorites={favorites}
            onFavoriteToggle={toggleFavorite}
          />
        )}
        {!loading && !isSearchInput && !showFavorites && (
          <button onClick={handleMore}>More</button>
        )}
      </div>
    </div>
  );
};

const SearchWithProvider = () => (
  <FavoritesProvider>
    <Home />
  </FavoritesProvider>
);

export default SearchWithProvider;
