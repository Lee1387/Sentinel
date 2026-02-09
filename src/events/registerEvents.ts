import type { Client } from "discord.js";

import { registerInteractionCreate } from "./interactionCreate.js";
import { registerReady } from "./ready.js";

export function registerEvents(client: Client) {
  registerReady(client);
  registerInteractionCreate(client);
}
