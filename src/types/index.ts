export interface SearchBarProps {
  setCharacter: (character: string) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface FavoritesProps {
  totalCharacters: number;
  showOnlyFavorites?: boolean;
  onToggleFavorites?: () => void;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  isFavorite?: boolean;
  comics: {
    items: Array<{ resourceURI: string; name: string }>;
  };
}
export interface CharacterList {
  characters: ICharacterCard[];
  onToggleFavorite: (id: number) => void;
}

export interface ICharacterCard {
  id: number;
  name: string;
  description: string;
  image: string;
  isFavorite: boolean;
}

export interface CharacterCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}
export interface FavoriteCharactersProps {
  characters: Character[];
  favorites: number[];
  onFavoriteToggle: (id: number) => void;
}

export interface FavoritesContextType {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export interface HeaderProps {
  characterName: string;
  description: string;
  imageUrl: string;
}

export interface ComicsListProps {
  data: Array<{ resourceURI: string }>;
}

export interface ComicDetail {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: Array<{
    type: string;
    date: string;
  }>;
}

export interface Comics {
  items: ComicItem[];
}

export interface ComicItem {
  id: number;
  name: string;
}

export interface ComicCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Comics;
}
