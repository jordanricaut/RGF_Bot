const { MessageEmbed, WebhookClient, GuildMember, Message } = require ('discord.js')

module.exports = {
    name: "guildMemberRemove",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(client, member) {
        const { user, guild } = member;

        const Welcomer = new WebhookClient({
            id: "946563199413674045",
            token: "rM91s1PobTRPjMIc5FcdfIubH8LI1YWBjvqrf2UClgOso6gPFfvzOB2BRbrTr3OX6zS0"
        })

        const Depart = new MessageEmbed()
        .setColor('#2778b4')
        .setTitle('Bye bye je quitte 😢')
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`**${user.username}** est parti du serveur\n\nAvait rejoint le serveur <t:${parseInt(member.joinedTimestamp / 1000)}:R>`)

        Welcomer.send({embeds: [Depart]})
    }
}