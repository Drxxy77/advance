module.exports = {

	aliases:["execute"],
	args:1,
	botInVoiceChannel:false,
	botPermission:85056,
	broken:false,
	bypass:true,
	admin:false,
	category:"bypass only",
	cooldown:5,
	cooldownType:"USER",
	description:"Executes Code.",
	enabled:true,
	name:"exec",
	needsQueue:false,
	nsfw:false,
	usage:"<Code>",
	userInVoiceChannel:false,
	userPermission:0,
	voteLock:false,

	execute(message, args) {

    const { exec } = require('child_process');

    console.log(exec)

	const then = Date.now()

    	const code = args.join(" "); //Define command

    	try {

            exec(code, (error, stdout, stderr) => { 
                if(error || stderr) return message.channel.send('```js\n' + `${stderr || error || "No Error."}\`\`\``)
            
                string = stdout || stderr || "No Error."
                var s2 = string.split("\n")
                var s3 = s2.join("\n> ")

                 if (s3.length > 1950) {
                   s3 = s3.substr(0, 1900);
                 }

                message.channel.send(`> ${s3}\n`)
            })

    	} catch (err) {

       		message.channel.send('```js\n' + err + "```")

    	}

	}

};
