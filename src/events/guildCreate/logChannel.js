module.exports = {
    async execute(Bot, guild) {

    	Bot.config.logChannels.map(ch => {
  			channel = Bot.channels.cache.get(ch)
  			channel.send(`Joined Guild - ${guild.name} With ${guild.memberCount} Members!`)
  		})

    }
}