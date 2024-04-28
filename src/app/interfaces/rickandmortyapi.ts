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

export interface Info {
  pages: number;
}

export interface Results {
  info: Info;
  results: Person[];
}

