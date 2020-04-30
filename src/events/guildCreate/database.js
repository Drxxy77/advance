const Long = require('long')
module.exports = {
    async execute(Bot, g) {
    	guilddb = await Bot.db.fetch(`guild-${g.id}`);
		if(!guilddb) {
			guilddb = Bot.config.defaultGuildDB;
			console.log("Creating new guild database" + g.name)
			Bot.db.set(`guild-${g.id}`, guilddb)
		} else {
			console.log("Loaded Guild Database " + g.name)
		}

    }
}