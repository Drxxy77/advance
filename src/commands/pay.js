module.exports = {

	aliases:["give"],
	args:2,
	botInVoiceChannel:false,
	botPermission:85056,
	broken:false,
	bypass:false,
	admin:false,
	category:"utility",
	cooldown:5,
	cooldownType:"USER",
	description:"Pays A User A Number Of Coins.",
	enabled:true,
	name:"pay",
	needsQueue:false,
	nsfw:false,
	usage:"<user> <NumberOfCoins>",
	userInVoiceChannel:false,
	userPermission:0,
	voteLock:false,
	
	async execute(message, args) {

	user = message.client.users.cache.find(u => u.username.toLowerCase() == args[0].toLowerCase()) || message.mentions.users.last() || message.client.users.cache.get(args[0])

	if(!user) return message.channel.send("Couldn't find the user specified.")
	if(isNaN(args[1])) return message.channel.send("Number Of Coins Must Be A Number!")
    if(args[1].includes(".")) return message.channel.send("Only Buy In Full Numbers (No Decimals)")
    if(parseInt(args[1]) < 0) return message.channel.send("Number Must Be Higher Then 0.")
    if(parseInt(args[1]) > message.author.database.coins) return message.channel.send("Insufficient Coins In Your Account.")

    user.database = await message.client.db.fetch(`user-${user.id}`)

    if(!user.database) return message.channel.send("User is not in the database! Please get them to execute a command.")

    message.author.database.coins -= parseInt(args[1])
    message.author.database.totalTransactions += 1
    message.author.database.transactions.unshift({"id":message.author.database.totalTransactions,"name":`[-${args[1]}]: Paid ${user.tag} Coins.`})
    user.database.totalTransactions += 1
    user.database.transactions.unshift({"id":user.database.totalTransactions,"name":`[+${args[1]}]: Received Coins From ${message.author.tag}.`})

    user.database.coins += parseInt(args[1])

    message.client.db.set(`user-${user.id}`, user.database);

    message.channel.send(`Paid ${user.tag} ${args[1]} Coins.`)


	}

};
