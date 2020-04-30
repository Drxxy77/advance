const fs = require('fs')

module.exports = async (Bot, member) => {

	

  fs.readdir(`${__dirname}/../events/guildMemberAdd`, async (err, files) => {
  		member.guild.database = await Bot.db.fetch(`guild-${member.guild.id}`)
        if (!member.guild.database) {
        	Bot.db.set(`guild-${member.guild.id}`, Bot.config.defaultGuildDB); 
        	member.guild.database = Bot.config.defaultGuildDB
    	}
		member.database = await Bot.db.fetch(`user-${member.id}`)
        if (!member.database) {
        	Bot.db.set(`user-${member.id}`, {}); 
        	member.database = {}
        }
  	files.map(async (f) => {
  	  var event = require(`${__dirname}/../events/guildMemberAdd/${f}`)

  	  	event.execute(Bot, member)

  	  	Bot.db.set(`guild-${member.guild.id}`, member.guild.database);
      	Bot.db.set(`user-${member.id}`, member.database);
  	})
  })

};