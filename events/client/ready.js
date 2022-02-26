const mongoose = require('mongoose')
const Database = process.env.bdd

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`-----\nBot connecté en tant que ${client.user.username}`);

    const devGuild = await client.guilds.cache.get(process.env.guildId);
    devGuild.commands.set(client.commands.map((cmd) => cmd));

    if(!Database) return;
    mongoose.connect(Database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("BDD connecté");
    }).catch((err) => {
        console.log(err);
    })
  },
};
