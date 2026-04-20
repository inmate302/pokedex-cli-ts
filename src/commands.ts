import type { CLICommand } from "./state.js";

import { commandExit } from "./command_exit.js";

import { commandHelp } from "./command_help.js";

import { commandMap } from "./command_map.js";

import { commandMapb } from "./command_mapb.js";

import { commandExplore } from "./command_explore.js";

import { commandCatch } from "./command_catch.js";

import { commandInspect } from "./command_inspect.js";

import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays next near locations",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays previous near locations",
      callback: commandMapb,
    },
      explore: {
      name: "explore",
      description: "Explore near locations for pokémon",
      callback: commandExplore,
    },
      catch: {
      name: "catch",
      description: "Try to catch a pokémon",
      callback: commandCatch,
    },
      inspect: {
      name: "inspect",
      description: "Inspect the stats of your pokémon",
      callback: commandInspect,
    },
      pokedex: {
      name: "pokedex",
      description: "List your pokémon in pokedex",
      callback: commandPokedex,
    },          
  };
}