const DBL = require('dblapi.js')


module.exports = {
    async execute(Bot, guild) {

    	const dbl = new DBL(Bot.config.topGGToken, Bot)
 		dbl.postStats(Bot.guilds.cache.size);

    }
}