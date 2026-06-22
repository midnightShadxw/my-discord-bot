const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('bot is active'));
app.listen(port, () => console.log('server is running'));

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('bot is online');
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'hello') {
        message.reply('hello there');
    } else if (message.content.toLowerCase() === 'how are you') {
        message.reply('i am doing great thank you for asking');
    } else if (message.content.toLowerCase() === 'can you play a wordle game') {
        message.reply('i would love to play wordle but i am currently just a simple bot so maybe we can try that another time');
    }
});

client.login(process.env.DISCORD_TOKEN);
