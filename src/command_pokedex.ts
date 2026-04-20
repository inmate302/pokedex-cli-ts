import type { State } from "./state.js";

export async function commandPokedex(state: State, ...args: string[]): Promise<void> {
    const pokedex = state.pokedex

    console.log("Your pokedex:")
     
    for (const key in pokedex) {
        console.log(` - ${key}`);
        }
}