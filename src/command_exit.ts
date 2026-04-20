import type { State } from "./state.js";

export async function commandExit(state: State, ...args: string[]): Promise<void> {
    console.log("Closing the Pokedex... Goodbye!");
    state.pokeapi.closeCache();
    state.readline.close();
}