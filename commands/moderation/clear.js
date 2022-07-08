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
    {
      name: "user",
      description:
        "Sélectionner l'utilisateur pour la suppression des messages",
      type: "USER",
      required: false,
    },
  ],

  async execute(client, interaction) {
    const amount = interaction.options.getNumber("message");
    if (amount > 100 || amount < 0)
      return interaction.reply(
        "Le NOMBRE doit être inférieur à 100 et supérieur à 0"
      );
    const target = interaction.options.getMember("user");

    const messageToDelete = await interaction.channel.messages.fetch();
    if (target) {
      let i = 0;
      const filteredMessage = [];
      (await messageToDelete).filter((msg) => {
        if (msg.author.id == target.id && amount > i) {
          filteredMessage.push(msg);
          i++;
        }
      });
      await interaction.channel
        .bulkDelete(filteredMessage, true)
        .then((messages) => {
          interaction.reply(
            `J'ai supprimé ${messages.size} messages de l'utilisateur ${target}`
          );
        });
    } else {
      await interaction.channel.bulkDelete(amount, true).then((messages) => {
        interaction.reply({ content: `J'ai supprimé ${messages.size} messages sur ce salon`, ephemeral: true });
      });
    }
  },
};
