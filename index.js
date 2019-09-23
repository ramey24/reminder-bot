const Discord = require("discord.js");
const bot = new Discord.Client();

const token = 'NjI1NjE1MDgzOTQ2Mzc3MjM0.XYiL-Q.j9SEKgbNLY-21JqmbY3GEg0p7zQ';

bot .on('ready', () =>{
    console.log("The bot is online.");
})

bot .on('message', message => {
    if (message.channel.id === '624595098952400897')
    {
        if (!message.content.startsWith('https'))
        {
            message.delete();
            message.author.send('Please only post google doc links on #share-essays, thank you.');
        }
    }
})

bot.login(process.env.BOT_TOKEN);
