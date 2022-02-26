module.exports = {
    name: 'rappelgp',
    description: 'Envoie le message de rappel pour l\'inscription au sondage',
    async execute(client, interaction) {
        await interaction.reply({ content: "Rappel GP OK", ephemeral: true });
        await interaction.channel.send(`@everyone Merci de voter pour votre présence, vous avez jusqu'à demain 21h !`)
    }
}