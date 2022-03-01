const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "reglement",
    description: 'Affiche le message de validation du règlement',
    execute(client, message) {
        const checkEmoji = message.guild.emojis.cache.get("947109688183509003")

        const embed = new MessageEmbed()
        .setTitle("Acceptez le règlement de RGF - Racing Gaming F1 pour pouvoir rouler dans le championnat")
        .setColor("#2778b4")

        message.channel.send({embeds: [embed]}).then(async msg => {
            await msg.react(checkEmoji)
        })
    }
}