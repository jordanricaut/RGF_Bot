const { Client } = require("discord.js");
const client = new Client({ intents: 32767})

require('dotenv').config()

client.once("ready", () => {
    console.log("Bot connecté");
})

client.login(process.env.token)