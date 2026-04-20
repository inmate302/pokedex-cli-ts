import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
		console.log("You must decide which pokémon to catch!");
        return;
	}
    const name = args[0];
    const pokemon = await state.pokeapi.fetchPokemon(name);
    if (!pokemon) {
      console.log("That is not a pokemon that exists. Try again!");
      return;
    }
    console.log(`Throwing a Pokeball at ${pokemon.name}...`);
    
    const caught = Math.random() < 50 / pokemon.base_experience;
    const message = caught ? "was caught!" : "escaped!";
    if (caught) {
        state.pokedex[pokemon.name] =  pokemon;
    }
    console.log(`${pokemon.name} ${message}`);
}