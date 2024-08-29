export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}

export interface SearchBarProps {
  setCharacter: (character: string) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
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

export interface FilterProps {
  totalCharacters: number;
  showOnlyFavorites?: boolean;
  onToggleFavorites?: () => void;
}

export interface PaginationProps {
  onMore: () => void;
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
