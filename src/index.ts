import { Client, GatewayIntentBits } from "discord.js";

import { env } from "./config/env.js";
import { registerEvents } from "./events/registerEvents.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
registerEvents(client);

await client.login(env.discordToken());
