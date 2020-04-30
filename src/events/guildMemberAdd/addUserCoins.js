module.exports = {
	async execute(Bot, member) {

		if(!member.database.coins) member.database.coins = 0
		if(!member.database.totalTransactions) member.database.totalTransactions = 0
		if(!member.database.transactions) member.database.transactions = []


        if(member.guild.database.joinCount > 0) {
        	console.log("Adding 1+ coin to balance")
        	member.database.coins += 1
        	member.database.totalTransactions += 1
        	member.database.transactions.unshift({"id":member.database.totalTransactions,"name":`[+1]: Joining Server`})
        }

        Bot.db.set(`user-${member.user.id}`, member.database)

	}
}