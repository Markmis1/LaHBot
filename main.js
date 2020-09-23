const Discord = require('discord.js');
const client = new Discord.Client();

var emojiname = ["", ""],
    rolename = ["", ""];





client.once('ready', () => {
	console.log('Ready!');
});

client.once('ready', () => {
    var generalChannel = client.channels.cache.get("758267928033361925") // Replace with known channel ID
    generalChannel.send("*Yawn...* Good Morning. Bot Online.")  
});

//client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
   // if (receivedMessage.author == client.user) {
  //      return
  //  }
    
    // Check if the bot's user was tagged in the message
//    if (receivedMessage.content.includes(client.user.toString())) {
        // Send acknowledgement message
 //       receivedMessage.channel.send("Greetings received from " +
//			receivedMessage.author.toString() + ": " + "Hello :wave:")
  //  }
//})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

	switch (primaryCommand = splitCommand[0]) {

		case "help":
			helpCommand(arguments, receivedMessage)
		break;

		case "morning":
			morningCommand(arguments, receivedMessage)
		break;

		case "night":
			nightCommand(arguments, receivedMessage)
		break;

		case "hello":
			helloCommand(arguments, receivedMessage)
		break;

		case "love":
			loveCommand(arguments, receivedMessage)
		break;

		case "role":
			roleCommand(arguments, receivedMessage)
		break;

		case "multiply":
			multiplyCommand(arguments, receivedMessage)
		break;

		case "divide":
			divideCommand(arguments, receivedMessage)
		break;

		case "add":
			addCommand(arguments, receivedMessage)
		break;
		
		case "minus":
			minusCommand(arguments, receivedMessage)
		break;
	}


function helloCommand(arguements, receivedMessage){
	if (arguments.length >= 0){
		receivedMessage.channel.send("Hello," + receivedMessage.author.toString() + ":wave:")
	}
	else{
		receivedMessage.channel.send("I don't understand the command. Try `!help`")
	}

}



function morningCommand(arguements, receivedMessage){
	if (arguments.length >= 0){
		receivedMessage.channel.send("Good Morning," + receivedMessage.author.toString() + ":wave:" + " I hope that you have a successful day. :sunrise:")
	}
	else{
		receivedMessage.channel.send("I don't understand the command. Try `!help`")
	}

}

function nightCommand(arguements, receivedMessage){
	if (arguments.length >= 0){
		receivedMessage.channel.send("Good Night," + receivedMessage.author.toString() + ":wave:" + " I hope that you have a nice sleep. :crescent_moon: :zzz: ")
	}
	else{
		receivedMessage.channel.send("I don't understand the command. Try `!help`")
	}

}




function loveCommand(arguements, receivedMessage){

	const eros = "154192230947487744"
	if(receivedMessage.author.id === eros)
	{
    	
		receivedMessage.channel.send("... love you too." + receivedMessage.author.toString() + ":heart:")	
		receivedMessage.react("💕")
	}
	else{
		
		receivedMessage.channel.send("You're wasting my time.")

}
}


function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("It looks like you might need help with " + arguments)
    } else {
		
        receivedMessage.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
    }
}

function addCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("Not enough values to add. Try `!add 2 4 10` or `!add 5.2 7`")
        return
    }
    let product = 0 
    arguments.forEach((value) => {
        product = product + parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " added together is: " + product.toString())
}

function minusCommand(arguments, receivedMessage) {
    if (!arguments.length == 2) {
        receivedMessage.channel.send("Not enough values to add. Try `!minus 2 4 10` or `!minus 5.2 7`")
        return
    }
	let product = 0 
	let x = arguments[0]
	let y = arguments[1]
	product = x - y

    receivedMessage.channel.send("The product of " + arguments + " subtracted is: " + product.toString())
}




function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`")
        return
    }
    let product = 1 
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}

function roleCommand(arguments, receivedMessage) {
    if (arguments.length >= 1) {
		//todo
    } else {
		
        receivedMessage.channel.send("Please specify a valid role.")
    }
}



}
client.login('NzU4MzEzOTcwNTA2Mzk5NzU0.X2tI6w.YiJ8BUUCj8pU8Fy45vbeP_bW7r4');