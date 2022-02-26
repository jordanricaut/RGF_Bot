module.exports = {
  name: "emit",
  description: "Permet d'emetre une commande",
  options: [
    {
      name: "member",
      description: "Evenement du serveur en rapport à l'arrivé d'un membre",
      type: "STRING",
      required: true,
      choices: [
        {
          name: "guildMemberAdd",
          value: "guildMemberAdd",
        },
        {
          name: "guildMemberRemove",
          value: "guildMemberRemove",
        },
      ],
    },
  ],

  execute(client, interaction) {
      const choices = interaction.options.getString("member")

      switch(choices) {
          case "guildMemberAdd": {
              client.emit("guildMemberAdd", interaction.member)
              interaction.reply({ content: "Emet l'évenement d'une arrivé", ephemeral: true})
          }
          break
          case "guildMemberRemove": {
            client.emit("guildMemberRemove", interaction.member)
            interaction.reply({ content: "Emet l'évenement d'un départ", ephemeral: true})
        }
        break
      }
  }
};
