module.exports = {
    name: "ping",
    description: 'commande ping',
    execute(client, interaction) {
        interaction.reply({content: `Pong ! J'ai ${client.ws.ping} de ping`})
    }
}