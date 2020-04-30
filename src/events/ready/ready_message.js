const Discord = require('discord.js')
const Long = require('long')

module.exports = {
	execute(Bot) {
		console.log(`Ready on ${Bot.guilds.cache.size} Servers!`)
		RegenInvites(Bot)

		setInterval(() => {
			RegenInvites(Bot)
		}, 86400000)

		Bot.RegenInvites = RegenInvites;
	}
}

async function RegenInvites(Bot) {
	for(let g of Bot.guilds.cache) {
		console.log("Fetching Invites")
		try {
			if(g[1].me.permissions.has(129)) {
				let guildInvites = await g[1].fetchInvites()
				Bot.invites[g[0]] = guildInvites;
				invites = Bot.invites[g[0]].filter(invite => invite.inviter.id == Bot.user.id)
				if(!invites.first()) {
					if(!Bot.invites[g[0]]) Bot.invites[g[0]] = new Discord.Collection()
					channel = getDefaultChannel(g[1])
					console.log("CREATING INVITE FOR: " + g[1].name)
					invite = await channel.createInvite({options:{maxAge:0, unique:true}})
					Bot.invites[g[0]].set(invite.code, invite)
				}
			}
		} catch(err) {
			console.log(err)
		}
	}
}

function getDefaultChannel(guild) {
  // get "original" default channel
  if(guild.channels.cache.has(guild.id))
    return guild.channels.cache.get(guild.id)

  // Check for a "general" channel, which is often default chat
  const generalChannel = guild.channels.cache.find(channel => channel.name === "general");
  if (generalChannel)
    return generalChannel;
  // Now we get into the heavy stuff: first channel in order where the bot can speak
  // hold on to your hats!
  return guild.channels.cache
   .filter(c => c.type === "text" &&
     c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
   .sort((a, b) => a.position - b.position ||
     Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
   .first();
}
