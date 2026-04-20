import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    if (args.length != 1) {
		console.log("you must provide a location name");
	}
	const name = args[0];
    const location = await state.pokeapi.fetchLocation(name);
    console.log("Exploring %s...\n", location.name);
	console.log("Found Pokemon: ");
    for (const enc of location.pokemon_encounters) {
        console.log(enc.pokemon.name);
        console.log();
    }
}