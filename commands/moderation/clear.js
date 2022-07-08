module.exports = {
  name: "clear",
  description: "Permet d'effacer des messages",
  options: [
    {
      name: "message",
      description: "Nombre message à supprimer",
      type: "NUMBER",
      required: true,
    },
  ],

  async execute(client, interaction) {
    const amount = interaction.options.getNumber("message");
    if (amount > 100 || amount < 0)
      return interaction.reply(
        "Le NOMBRE doit être inférieur à 100 et supérieur à 0"
      );
    const messageToDelete = await interaction.channel.messages.fetch();
    await interaction.channel.bulkDelete(amount, true).then((messages) => {
      interaction.reply({
        content: `J'ai supprimé ${messages.size} messages sur ce salon`,
        ephemeral: true,
      });
    });
  },
};
