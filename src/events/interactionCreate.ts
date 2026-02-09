import type { Client } from "discord.js";
import { Events } from "discord.js";

import { commandsByName } from "../commands/index.js";

export function registerInteractionCreate(client: Client) {
  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = commandsByName.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (err) {
      console.error(err);

      const content = "Something went wrong.";

      if (interaction.deferred || interaction.replied) {
        await interaction.followUp({ content, ephemeral: true });
        return;
      }

      await interaction.reply({ content, ephemeral: true });
    }
  });
}
