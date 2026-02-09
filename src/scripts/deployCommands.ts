import type { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";
import { REST, Routes } from "discord.js";

import { commands } from "../commands/index.js";
import { env } from "../config/env.js";

const mode = process.argv[2];
if (mode !== "guild" && mode !== "global") {
  throw new Error("Usage: deployCommands <guild|global>");
}

const rest = new REST({ version: "10" }).setToken(env.discordToken());
const body: RESTPostAPIChatInputApplicationCommandsJSONBody[] = commands.map((command) =>
  command.data.toJSON(),
);

const clientId = env.discordClientId();
const route =
  mode === "global"
    ? Routes.applicationCommands(clientId)
    : Routes.applicationGuildCommands(clientId, env.discordDevGuildId());

const deployed = await rest.put(route, { body });
const count = Array.isArray(deployed) ? deployed.length : 0;

console.log(`Deployed ${count} ${mode} command(s).`);
