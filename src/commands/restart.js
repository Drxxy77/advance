module.exports = {

	aliases:[],
	args:0,
	botInVoiceChannel:false,
	botPermission:85056,
	broken:false,
	bypass:false,
	admin:true,
	category:"bot admin",
	cooldown:5,
	cooldownType:"USER",
	description:"Restarts the bot!",
	enabled:true,
	name:"restart",
	needsQueue:false,
	nsfw:false,
	usage:"",
	userInVoiceChannel:false,
	userPermission:0,
    voteLock:false,
    async execute(message, args) {

    	await message.channel.send("restarting (give me a few seconds)")
    	process.exit()

    }
}