const { MessageEmbed } = require('discord.js')
const { connection } = require("mongoose")


module.exports = {
    name: "statut",
    description: "Montre le statut de la bdd",
    execute(client, interaction) {
        const Response = new MessageEmbed()
        .setColor("#2778b4")
        .setDescription(`**Client**: \`🟢 EN LIGNE\` - \`${client.ws.ping}ms\`\n\n**Lancé**: <t:${parseInt(client.readyTimestamp / 1000)}:R>\n
        **Base de donnée**: \`${switchTo(connection.readyState)}\``)

        interaction.reply({embeds: [Response]})
    }
}

function switchTo(val) {
    var status = " ";
    switch(val) {
        case 0 : status = `🔴 DECONNECTER`
        break;
        case 1 : status = `🟢 CONNECTER`
        break;
        case 2 : status = `🟡 CONNECTION`
        break;
        case 3 : status = `🟠 DECONNECTION`
        break;
    }
    return status
}