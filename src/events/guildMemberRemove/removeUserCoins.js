module.exports = {
	async execute(Bot, member) {

		if(!member.database.coins) member.database.coins = 0
		if(!member.database.totalTransactions) member.database.totalTransactions = 0
		if(!member.database.transactions) member.database.transactions = []

		const hoursJoined = (new Date().getTime() - member.joinedAt.getTime()) / 1000 / 60 / 60;
		console.log(hoursJoined)
		if(hoursJoined < 336) {
			console.log("Removing 2.5 Coins")
			member.database.coins -= 2.5
			member.database.totalTransactions += 1
        	member.database.transactions.unshift({"id":member.database.totalTransactions,"name":`[-2.5]: Leaving Server Before 2 Weeks Passed.`})
		}

		Bot.db.set(`user-${member.user.id}`, member.database)

	}
}