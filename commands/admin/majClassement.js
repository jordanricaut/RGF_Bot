module.exports = {
    name: "majclassement",
    description: "Crée le message de la mise à jour du classement",
    options: [
      {
        name: "groupe",
        description: "Groupe",
        type: "STRING",
        required: true,
        choices: [
          {
            name: "Groupe 1",
            value: "<@&840302418843795536>",
          },
          {
            name: "Groupe 2",
            value: "<@&840302457136349235>",
          },
          {
            name: "Groupe Dimanche",
            value: "<@&912126936271175712>",
          },
        ],
      },
      {
        name: "gp",
        description: "gp",
        type: "STRING",
        required: true,
      },
    ],
  
    async execute(client, interaction) {
        const groupe = interaction.options.getString('groupe')
        const gp = interaction.options.getString("gp");
        await interaction.reply({ content: "MAJ Classement OK", ephemeral: true });
        await interaction.channel.send(
          `${groupe} ${gp} : Classement mis à jour :arrow_up: :arrow_up:`
    
        );
      },
  };
  