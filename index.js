const { Client } = require("discord.js");
const client = new Client({ intents: 32767})

require('dotenv').config()

require('./utils/handlers/EventUtil')(client)

client.login(process.env.token)