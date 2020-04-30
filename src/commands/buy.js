module.exports = {

	aliases:[],
	args:1,
	botInVoiceChannel:false,
	botPermission:85185,
	broken:false,
	bypass:false,
	admin:false,
	category:"advertising",
	cooldown:5,
	cooldownType:"USER",
	description:"Buy Members With Coins!",
	enabled:true,
	name:"buy",
	needsQueue:false,
	nsfw:false,
	usage:"<amountOfCoins>",
	userInVoiceChannel:false,
	userPermission:0,
    voteLock:false,
    async execute(message, args) {

        if(isNaN(args[0])) return message.channel.send("Number Of Coins Must Be A Number!")
        if(args[0].includes(".")) return message.channel.send("Only Buy In Full Numbers (No Decimals)")
        if(parseInt(args[0]) < 0) return message.channel.send("Number Must Be Higher Then 0.")
        if(parseInt(args[0]) > message.author.database.coins) return message.channel.send("Insufficient Coins In Your Account.")

        message.author.database.coins -= parseInt(args[0])
        message.author.database.totalTransactions += 1
        message.author.database.transactions.unshift({"id":message.author.database.totalTransactions,"name":`[-${args[0]}]: Bought ${args[0]} Joins`})
        message.guild.database.joinCount += parseInt(args[0])

        message.channel.send(`Bought ${args[0]} Joins With ${args[0]} Coins!`)


    }
}