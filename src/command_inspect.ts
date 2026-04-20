import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
		console.log("Which pokémon would you like to inspect?");
        return;
	}
    const pokemon = args[0];

    if (!pokemon) {
      console.log("That is not a pokemon that exists. Try again!");
      return;
    }
    const pokedex = state.pokedex
    const caughtPokemon = pokedex[pokemon];
    
    if (!(pokemon in pokedex)) {
      console.log("You haven't caught that pokemon yet!");
      return;
    }
    console.log(`Name: ${caughtPokemon.name}`);
    console.log(`Height: ${caughtPokemon.height}`);
    console.log(`Weight: ${caughtPokemon.weight}`);

    console.log("Stats: ");

     
    for (const key of caughtPokemon.stats) {
        console.log(` - ${key.stat.name}: ${key.base_stat}`);
        }
    
    console.log("Types: ");

    for (const key of caughtPokemon.types) {
        console.log(` - ${key.type.name}`);
        }            
}