const Discord = require('discord.js')
var Long = require('long')
module.exports = {

	aliases:["f"],
	args:0,
	botInVoiceChannel:false,
	botPermission:85185,
	broken:false,
	bypass:false,
	category:"advertising",
	cooldown:30,
	cooldownType:"USER",
	description:"Find Servers To Join For Coins!",
	enabled:true,
	name:"find",
	needsQueue:false,
	nsfw:false,
	usage:"",
	userInVoiceChannel:false,
	userPermission:0,
	voteLock:false,
	
	async execute(message, args) { 

		message.channel.send("Finding Servers...")

		embed = new Discord.MessageEmbed()
		embed.setColor("RANDOM")

		i = 0
		message.client.guilds.cache.map(async (g) => {
			guildDB = await message.client.db.fetch(`guild-${g.id}`)
			if(guildDB.joinCount > 0) {
				console.log("Server Elligble");
				if(!g.members.cache.has(message.author.id)) {
					i++

					if(i > 5) return;

					invites = message.client.invites[g.id].filter(invite => invite.inviter.id == message.client.user.id)

					invite = invites.first()

					embed.addField(g.name, invite.url)

				}
			}
		})

		embed.addField("No Invites?", "That Means Members Elite Can't Find Any Servers!")
		message.channel.send({embed})

	}

};

