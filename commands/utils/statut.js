const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "statut",
    description: "Montre le statut de la bdd",
    execute(client, interaction) {
        const Response = new MessageEmbed()
        .setColor("#2778b4")
        .setDescription(`**Client**: \`🟢 EN LIGNE\` - \`${client.ws.ping}ms\`\n\n**Lancé**: <t:${parseInt(client.readyTimestamp / 1000)}:R>`)

        interaction.reply({embeds: [Response]})
    }
}