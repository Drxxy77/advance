const discord = require('discord.js')
module.exports = {

	aliases:["balance", "profile"],
	args:0,
	botInVoiceChannel:false,
	botPermission:85185,
	broken:false,
	bypass:false,
	admin:false,
	category:"utility",
	cooldown:5,
	cooldownType:"USER",
	description:"Check Your Own Balance Or A Users.",
	enabled:true,
	name:"bal",
	needsQueue:false,
	nsfw:false,
	usage:"(user)",
	userInVoiceChannel:false,
	userPermission:0,
	voteLock:false,
	
	async execute(message, args) {

	  if(!args[0]) user = message.author
	  if(args[0]) user = message.client.users.cache.find(u => u.username.toLowerCase() == args[0].toLowerCase()) || message.mentions.users.last() || message.client.users.cache.get(args[0]) || message.author

	  var userDB = await message.client.db.fetch(`user-${user.id}`);
	  if(!userDB) return message.channel.send("This user isn't in the database, or has no coins.")
	  if(!userDB.coins) return message.channel.send("This user isn't in the database, or has no coins.")

	  while (userDB.transactions.length > 10) {
		userDB.transactions.pop()
	  }

	  var embed = new discord.MessageEmbed()
	  embed.setTitle(`${user.tag}'s Balance`)
	  embed.setColor(`RANDOM`)
	  embed.addField("Coin Balance", `${userDB.coins}`, false)
	  embed.addField("Transactions", `${userDB.transactions.length > 1 ? userDB.transactions.map(trans => `\n${trans.id}. ${trans.name}`) : "No Transactions"}`, false)

	  const coolEmbed = new discord.MessageEmbed()
      .setDescription(`Want to earn extra coins? By inviting these bots to a server, you can earn an extra X coins per invite. This will allow you to gain hundreds of coins. How do you get the extra coins?`)
      .addField("Steps", `1. Invite the bot(s)\n2. Join the members elite support server\n3. In the channel bots-for-coins, fill out the template with a picture of the bot in the member list\n4. Wait for your coins to be added.\nSee, Easy. So why aren't you inviting the bots?`)
      .setColor('000000')
      .addField('Terano', '[Terano Invite](https://discordapp.com/oauth2/authorize?client_id=647256366280474626&permissions=8&scope=bot)', true)
      .addField('Flexiboat', '[Flexiboat Invite](https://discordapp.com/oauth2/authorize?client_id=666038051767844867&scope=bot&permissions=8)', true)
      .addField('Conditions', `1. By kicking the bot, you forefit any coins that were added to your balance.\n2. You cannot claim rewards for inviting the bot to any one server more than once.`);

	  const ran = Math.floor(Math.random() * 100)
	  if(ran > 75) message.channel.send({"embed":coolEmbed})

	  message.channel.send({embed})

	}

};
