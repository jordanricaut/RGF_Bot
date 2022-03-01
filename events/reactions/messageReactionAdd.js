module.exports = {
  name: "messageReactionAdd",
  async execute(client, messageReaction, user) {
    if (user.bot) return;
    const message = messageReaction.message;
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(
      (c) => c.id === "912648181060337685"
    );
    const reglementRole = message.guild.roles.cache.find(
      (r) => r.id === "877160187104997428"
    );

    if (
      ["checkmark_sondage"].includes(emoji) &&
      message.channel.id === channel.id
    ) {
      switch (emoji) {
        case "checkmark_sondage":
          messageReaction.message.guild.members.cache
            .get(user.id)
            .roles.add("877160187104997428");
          break;
      }
    }
  },
};
