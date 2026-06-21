const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('bot is active'))
app.listen(port, () => console.log('server is running'))
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

client.once('ready', () => {
    console.log('bot is online')
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return
    if (message.content === 'how are you') {
        message.reply('i am doing great thank you for asking')
    }
})

client.login(process.env.DISCORD_TOKEN)
