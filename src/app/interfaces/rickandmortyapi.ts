export interface Person {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  image: string;
  favorito?: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Info {
  pages: number;
}

export interface Results {
  info: Info;
  results: Person[];
}

