const Discord = require('discord.js')
module.exports = {

	aliases:[],
	args:0,
	botInVoiceChannel:false,
	botPermission:85056,
	broken:false,
	bypass:false,
	category:"advertising",
	cooldown:5,
	cooldownType:"USER",
	description:"Find Servers To Join For Coins!",
	enabled:true,
	name:"order",
	needsQueue:false,
	nsfw:false,
	usage:"",
	userInVoiceChannel:false,
	userPermission:0,
	voteLock:false,
	
	async execute(message, args) {

	message.channel.send(`${message.guild.database.joinCount || 0} More Joins Left To Process!`)

	}

};
