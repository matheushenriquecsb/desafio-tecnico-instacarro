import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = "f0cfcd90c4fdecc52b6554e7e0e6612c";
const PRIVATE_KEY = "bf75ddd2f2093d5f948f111fcef168beca233a33";
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
