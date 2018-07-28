const Discord = require("discord.js");
const client = new Discord.Client;

client.setMaxListeners(50);

//Check if the bot is online
client.on("ready", () => { //The Ready Event itself!
    console.log("READY"); //A simple console log to say that the bot is online and ready.
});

//Change its token ID everytime it disconnects or settings are changed.
client.login(process.env.BOT_TOKEN);

