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
}

export interface ICharacterCard {
  id: number;
  name: string;
  description: string;
  image: string;
}
