module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`Bot connecté en tant que ${client.user.username}`);

    const devGuild = await client.guilds.cache.get(process.env.guildId);
    devGuild.commands.set(client.commands.map((cmd) => cmd));
  },
};
