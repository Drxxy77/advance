const Discord = require('discord.js')
const os = require('os')
const ms = require('ms')
const cpuStat = require('cpu-stat')
const ping = require('minecraft-server-util')
module.exports = {

	aliases:["information"],
	args:0,
	botInVoiceChannel:false,
	botPermission:36785216,
	broken:false,
	bypass:false,
	admin:false,
	category:"utility",
	cooldown:5,
	cooldownType:"USER",
	description:"Information Of Flexiboat.",
	enabled:true,
	name:"info",
    needsQueue:false,
	nsfw:false,
	usage:"",
	userInVoiceChannel:false,
	userPermission:0,
	voteLock:false,

	execute(message, args) {

	cpuStat.usagePercent(function(err, percent, seconds) {
    	if (err) {
      	return console.log(err);
    	}

    	var Bot = message.client
		var config = message.client.config		
		var embed = new Discord.MessageEmbed()
		var avgClock = cpuStat.avgClockMHz(2)

	

		embed.setColor('#16BCFF')
		embed.setFooter(`Made By: ${config.creators}`)
		embed.addField('Servers On This Shard:', Bot.guilds.cache.size, true)
		embed.addField('Users On This Shard:', Bot.users.cache.size, true)
		embed.addField('Channels On This Shard:', Bot.channels.cache.size, true)
		embed.addField('Shards:', Bot.options.shardCount || 1, true)
		embed.addField('Avg Clock', avgClock / 1000 + "GHz", true)
		embed.addField('Node Version:', process.version.slice(1), true)
		embed.addField("CPU Usage", Math.round(percent) + "%", true)
		embed.addField("CPU Cores", cpuStat.totalCores() / 2, true)
		embed.addField("CPU Threads", cpuStat.totalCores(), true)
		embed.addField('Uptime:', ms(Bot.uptime), true)
		embed.addField('Commands:', Bot.commands.size, true)
		embed.addField('Memory Usage:', `${Math.ceil(process.memoryUsage().heapTotal / 1000000)} MB/${Math.ceil(os.totalmem() / 1073741824)}GB`, true)

		message.channel.send({embed})

		

	});			

	}

};
