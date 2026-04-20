import { createInterface } from "readline";

import type { CLICommand } from "./command.js";

import { commandHelp } from "./command_help.js";

import { commandExit } from "./command_exit.js";

import { State } from "./state.js"

export function cleanInput(input: string): string[] {
  const clean: string[] = input.toLowerCase().trim().split(/\s+/); 
    return clean;
}

export async function startREPL(state: State): Promise<void> {

  state.readline.prompt();

  state.readline.on("line", async (line: string) => {
    const words = cleanInput(line);
    if (words.length === 0) {
      state.readline.prompt();
      return;
    }
    const commands = state.commands;
    const name = words[0];
    const args = words.slice(1);
    const command = commands[name];
    if (!command) {
      console.log("Unknown command");
      state.readline.prompt();
      return;
    }
    
    try {
      await command.callback(state, ...args);
    } catch (err) {
      console.log(`error: ${(err as Error).message}`);
    }
    if (!state.readline.close) {
      state.readline.prompt();
    }
  });
}
