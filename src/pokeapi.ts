import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval);
}

  async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
    const url = pageURL ? pageURL : PokeAPI.baseURL + "/location-area";
    const cached = this.cache.get<ShallowLocations>(url);
    if (cached) {
        console.log("cache hit!");
        return cached;
    }
      
    const response = await fetch(url); 
    const data: ShallowLocations = await response.json();
    this.cache.add(url, data);
    return data;
  }

  async fetchLocation(locationName: string): Promise<LocationArea> {
    const url = PokeAPI.baseURL + "/location-area/" + locationName;
    const response = await fetch(url); 
    const data: LocationArea = await response.json();
    return data;
  }
  
  async fetchPokemon(pokemon: string): Promise<Pokemon> {
    const url = PokeAPI.baseURL + "/pokemon/" + pokemon;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("That is not a pokemon that exists. Try again!");
    } 
    const data: Pokemon = await response.json();
    return data; 
     }

  
  closeCache() {
  this.cache.stopReapLoop();
  }
}

export type ShallowLocations = {
  count: number
  next: string | null;
  previous: string | null;
    results: {
    name: string;
    url: string;
  }[];
};

export type LocationArea = {
  id: number;
  name: string;
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    // ... other fields
  }[];
};

export type Pokemon = {
  id: number
  name: string
  base_experience: number
  height: number
  weight: number
  stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }[];
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
}
