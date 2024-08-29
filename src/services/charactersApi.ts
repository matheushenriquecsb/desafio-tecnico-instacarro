import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = "3260551ca8b477c9be66d3c4c23591ee";
const PRIVATE_KEY = "13f932288e9f66d90e54d029df3adb463fe14721";
const BASE_URL = "https://gateway.marvel.com:443/v1/public/characters";

const ts = new Date().getTime();
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

export const fetchCharacterByName = async (character: string) => {
  const res = await axios.get(BASE_URL, {
    params: {
      nameStartsWith: character,
      ts,
      apikey: PUBLIC_KEY,
      hash,
    },
  });
  return res.data.data;
};

export const fetchCharactersList = async (offset: number) => {
  const response = await axios.get(BASE_URL, {
    params: {
      ts,
      apikey: PUBLIC_KEY,
      hash,
      offset,
    },
  });

  return response.data.data;
};

export const fetchCharacterById = async (id: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      id,
      ts,
      apikey: PUBLIC_KEY,
      hash,
    },
  });

  return response.data.data;
};

export const fetchComicDetails = async (resourceURI: string) => {
  const secureResourceURI = resourceURI.replace(/^http:/, "https:");
  const response = await axios.get(secureResourceURI, {
    params: {
      ts,
      apikey: PUBLIC_KEY,
      hash,
    },
  });

  return response.data.data;
};
