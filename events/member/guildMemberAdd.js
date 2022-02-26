const { MessageEmbed, WebhookClient, GuildMember, Message } = require ('discord.js')

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(client, member) {
        const { user, guild } = member;

        member.roles.add("844320472748261457");

        const Welcomer = new WebhookClient({
            id: "946562964805271612",
            token: "5yVMVGPx1z1gl-wL-u2DYaAWXK68xJSd-VEExzSZpBHG0RLOz7CrdoC_Apl47-AuqqTP"
        })

        const Welcome = new MessageEmbed()
        .setColor('#2778b4')
        .setTitle("Un nouveau membre !")
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setTimestamp()
        .setDescription(`🎉 **Bienvenue ${member} sur le serveur de la ${guild.name} **🎉\n\nN'hésite pas à te présenter dans le salon **Qui est-tu** et de lire le **règlement**`)

        Welcomer.send({embeds: [Welcome]})
    }
}