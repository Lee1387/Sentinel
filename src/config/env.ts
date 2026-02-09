function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name} in environment`);
  return value;
}

export const env = {
  discordToken: () => requireEnv("DISCORD_TOKEN"),
  discordClientId: () => requireEnv("DISCORD_CLIENT_ID"),
  discordDevGuildId: () => requireEnv("DISCORD_DEV_GUILD_ID"),
} as const;
