module.exports = {
  name: "inscriptiongp",
  description: "Crée la le sondage d'inscription au GP",
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
      name: "date",
      description: "date",
      type: "STRING",
      required: true,
    },
    {
      name: "gp",
      description: "gp",
      type: "STRING",
      required: true,
    },
    {
      name: "jourfin",
      description: "Lundi G2 / Mercredi G1",
      type: "STRING",
      required: true,
    },
  ],

  async execute(client, interaction) {
    const groupe = interaction.options.getString("groupe");
    const date = interaction.options.getString("date");
    const gp = interaction.options.getString("gp");
    const jourFin = interaction.options.getString("jourfin");
    await interaction.reply({ content: "Inscription GP OK", ephemeral: true });


    const inscriptiongp = await interaction.channel.send(
      `${groupe} \n${date} (Invitation 20h45) \n${gp} \n(Inscription jusqu’à ${jourFin} 21h) \n\n :white_check_mark: Présent \n :x: Absent`
    );
    inscriptiongp.react('<:checkmark_sondage:947109688183509003>')
    inscriptiongp.react('<:cross_sondage:947109688422567966>')
  },
};
