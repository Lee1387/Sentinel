export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_TOKEN?: string;
      DISCORD_CLIENT_ID?: string;
      DISCORD_DEV_GUILD_ID?: string;
    }
  }
}
