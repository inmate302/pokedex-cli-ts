import type { State } from "./state.js";

export async function commandMap(state: State, ...args: string[]): Promise<void> {
    const locations = await state.pokeapi.fetchLocations(state.nextLocationsURL);
    
    for (let location of locations.results) {
        console.log(location.name);
    }
    
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
}