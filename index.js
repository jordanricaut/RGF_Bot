const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767})

require('dotenv').config()

client.commands = new Collection();

['CommandUtil', 'EventUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) })


client.login(process.env.token)