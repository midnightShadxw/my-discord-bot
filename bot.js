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
