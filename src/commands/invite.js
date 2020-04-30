const Discord = require('discord.js')
module.exports = {

	aliases:[],
	args:0,
	botInVoiceChannel:false,
	botPermission:85056,
	broken:false,
	bypass:false,
	admin:false,
	category:"utility",
	cooldown:5,
	cooldownType:"USER",
	description:"The Invite For The Bot.",
	enabled:true,
	name:"invite",
	needsQueue:false,
	nsfw:false,
	usage:"",
	userInVoiceChannel:false,
	userPermission:0,
	voteLock:false,
	
	async execute(message, args) {

	embed = new Discord.MessageEmbed()
	embed.addField("Invite", "[here](https://discordapp.com/oauth2/authorize?client_id=691451179212865619&scope=bot&permissions=8)")
	embed.setColor("RANDOM")

	message.channel.send({embed})
	}

};
