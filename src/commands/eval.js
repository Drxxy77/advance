module.exports = {

	aliases:["evaluate"],
	args:1,
	botInVoiceChannel:false,
	botPermission:85056,
	broken:false,
	bypass:true,
	admin:false,
	category:"bypass only",
	cooldown:5,
	cooldownType:"USER",
	description:"Evaluates Code.",
	enabled:true,
	name:"eval",
	needsQueue:false,
	nsfw:false,
	usage:"<Code>",
	userInVoiceChannel:false,
	userPermission:0,
	voteLock:false,

	execute(message, args) {

	const then = Date.now()

    		client = message.client //Set variables for more convienence
    		author = message.author
    		guilds = client.guilds
    		users = client.users
    		channel = message.channel
    		guild = message.guild
    		table = client.table
    		member = message.member
			guilddb = message.guild.database

    	const code = args.join(" "); //Define command

    	try {

         	let ev = require('util').inspect(eval(code));

        	 if (ev.length > 1950) {
         	    ev = ev.substr(0, 1900);
         	}

        	let token = message.client.config.botToken.replace(/\./g, "\.") //replace the token with <token>
         	let re = new RegExp(token, 'g')
         	ev = ev.replace(re, "<token>");

        	message.channel.send("Input:\n`" + code + "`\n**Eval:**\n`" + ev + "`\n**Time:**\n`" + (Date.now() - then) + "`ms.")

    	} catch (err) {

       		message.channel.send('```js\n' + err + "```")

    	}

	}

};
