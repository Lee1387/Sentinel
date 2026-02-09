import { ping } from "./ping.js";
import type { SlashCommand } from "./types.js";

export const commands = [ping] satisfies SlashCommand[];

export const commandsByName = new Map<string, SlashCommand>();
for (const command of commands) {
  if (commandsByName.has(command.data.name)) {
    throw new Error(`Duplicate command name: ${command.data.name}`);
  }
  commandsByName.set(command.data.name, command);
}
