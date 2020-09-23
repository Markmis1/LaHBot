const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });























client.login('NzU4MzEzOTcwNTA2Mzk5NzU0.X2tI6w.vyUr68PXS8frvs0Pg6-yxk48TmM')

