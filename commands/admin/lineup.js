module.exports = {
  name: "lineup",
  description: "Crée la  lineup",
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
    {
      name: "date",
      description: "date",
      type: "STRING",
      required: true,
    },
    // Alfa Romeo
    {
      name: "alfa1",
      description: "alfa1",
      type: "STRING",
      required: true,
    },
    {
      name: "alfa2",
      description: "alfa2",
      type: "STRING",
      required: true,
    },
    // AlphaTauri
    {
      name: "alphatauri1",
      description: "alphatauri1",
      type: "STRING",
      required: true,
    },
    {
      name: "alphatauri2",
      description: "alphatauri2",
      type: "STRING",
      required: true,
    },
    // Alpine
    {
      name: "alpine1",
      description: "alpine1",
      type: "STRING",
      required: true,
    },
    {
      name: "alpine2",
      description: "Alpine2",
      type: "STRING",
      required: true,
    },
    // Aston Martin
    {
      name: "aston1",
      description: "aston1",
      type: "STRING",
      required: true,
    },
    {
      name: "aston2",
      description: "aston2",
      type: "STRING",
      required: true,
    },
    // Ferrari
    {
      name: "ferrari1",
      description: "ferrari1",
      type: "STRING",
      required: true,
    },
    {
      name: "ferrari2",
      description: "ferrari2",
      type: "STRING",
      required: true,
    },
    // Haas
    {
      name: "haas1",
      description: "haas1",
      type: "STRING",
      required: true,
    },
    {
      name: "haas2",
      description: "haas2",
      type: "STRING",
      required: true,
    },
    // McLaren
    {
      name: "mclaren1",
      description: "mclaren1",
      type: "STRING",
      required: true,
    },
    {
      name: "mclaren2",
      description: "mclaren2",
      type: "STRING",
      required: true,
    },
    // Mercedes
    {
      name: "mercedes1",
      description: "mercedes1",
      type: "STRING",
      required: true,
    },
    {
      name: "mercedes2",
      description: "mercedes2",
      type: "STRING",
      required: true,
    },
    // RedBull
    {
      name: "redbull1",
      description: "redbull1",
      type: "STRING",
      required: true,
    },
    {
      name: "redbull2",
      description: "redbull2",
      type: "STRING",
      required: true,
    },
    // Williams
    {
      name: "williams1",
      description: "williams1",
      type: "STRING",
      required: true,
    },
    {
      name: "williams2",
      description: "williams2",
      type: "STRING",
      required: true,
    },
    // Gérant - Stream
    {
      name: "gerant",
      description: "gerant",
      type: "STRING",
      required: true,
    },
    {
      name: "stream",
      description: "stream",
      type: "STRING",
      required: false,
    },
  ],

  async execute(client, interaction) {
    const groupe = interaction.options.getString("groupe");
    const gp = interaction.options.getString("gp");
    const date = interaction.options.getString("date");
    const alfa1 = interaction.options.getString("alfa1");
    const alfa2 = interaction.options.getString("alfa2");
    const alphatauri1 = interaction.options.getString("alphatauri1");
    const alphatauri2 = interaction.options.getString("alphatauri2");
    const alpine1 = interaction.options.getString("alpine1");
    const alpine2 = interaction.options.getString("alpine2");
    const aston1 = interaction.options.getString("aston1");
    const aston2 = interaction.options.getString("aston2");
    const ferrari1 = interaction.options.getString("ferrari1");
    const ferrari2 = interaction.options.getString("ferrari2");
    const haas1 = interaction.options.getString("haas1");
    const haas2 = interaction.options.getString("haas2");
    const mclaren1 = interaction.options.getString("mclaren1");
    const mclaren2 = interaction.options.getString("mclaren2");
    const mercedes1 = interaction.options.getString("mercedes1");
    const mercedes2 = interaction.options.getString("mercedes2");
    const redbull1 = interaction.options.getString("redbull1");
    const redbull2 = interaction.options.getString("redbull2");
    const williams1 = interaction.options.getString("williams1");
    const williams2 = interaction.options.getString("williams2");
    const stream = interaction.options.getString("stream");
    const gerant = interaction.options.getString("gerant");

    await interaction.reply({ content: "Lineup OK", ephemeral: true });
    await interaction.channel.send(
      `${groupe}\nLineup ${gp}\n:arrow_right: ${date}\n:checkered_flag: Début 21h (Invitation 20h45)
    <:AlfaLogo:887086213717184573> Alfa Roméo :\n${alfa1}\n${alfa2}
    <:AlphaTauriLogo:887086214241452032> Alpha Tauri :\n${alphatauri1}\n${alphatauri2}
    <:AlpineLogo:887086213561991209> Alpine :\n${alpine1}\n${alpine2}
    <:AstonMartinLogo:887086213557788732> Aston Martin :\n${aston1}\n${aston2}
    <:FerrariLogo:887086214291812362> Ferrari :\n${ferrari1}\n${ferrari2}
    <:HaasLogo:887086213901725767> Haas :\n${haas1}\n${haas2} 
    <:MclarenLogo:887086213574565918> McLaren :\n${mclaren1}\n${mclaren2}
    <:MercedesF1Team:887086213746540554> Mercedes :\n${mercedes1}\n${mercedes2}
    <:RedbullLogo:887086213914296350> RedBull :\n${redbull1}\n${redbull2}
    <:WilliamsLogo:887086213750718495> Williams:\n${williams1}\n${williams2}
    
    Stream : ${stream}
    
    Gérant de course : ${gerant}
    
    Bon GP à tous :checkered_flag:
          `
    );
  },
};
