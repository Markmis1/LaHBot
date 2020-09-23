const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.once('ready', () => {
    var generalChannel = client.channels.cache.get("758267928033361925") // Replace with known channel ID
    generalChannel.send("*Yawn...* Good Morning. Bot Online.")  
});

client.on("message", function (msg) {
	// if message begins with "ping"
	if (msg.content.indexOf("Hello Digram") === 0) {
		// send a message to the channel the ping message was sent in.

		user = message.member;
		user = user.toString();
		DigramMessage = ":wave:" + user;
		client.sendMessage(msg.channel, "Hi.");
		

		// alert the console
		console.log("pong-ed " + msg.author.username);
	}
});




client.login('NzU4MzEzOTcwNTA2Mzk5NzU0.X2tI6w.YiJ8BUUCj8pU8Fy45vbeP_bW7r4');