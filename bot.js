const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] })

client.once('ready', () => {
    console.log('bot is online')
})

client.login('MTUxTzMxNzg1Mzc5MTEwRE2Mw.Gi_D-F.Sj4DT2J32RgBVWDTDz67nBihW4YkN3YNj1WiTE')
