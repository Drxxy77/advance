module.exports = {
	execute(Bot) {

	games = Bot.config.presence.games

	setInterval(function() {

	game = games[Math.floor(Math.random() * games.length)]

		presence = {

			"status":Bot.config.presence.status,
			"activity":{
				"type":game.type,
				"name":`${game.name} | ${Bot.guilds.cache.size} Servers | ${Bot.users.cache.size} Users!`
			}
		}

		Bot.user.setPresence(presence)
			
	}, 3000)

	}
}