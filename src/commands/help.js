
const Discord = require('discord.js')
module.exports = {

  aliases:["cmds", "h", "commands"],
  args:0,
  botInVoiceChannel:false,
  botPermission:36785216,
  broken:false,
  bypass:false,
  admin:false,
  category:"utility",
  cooldown:5,
  cooldownType:"USER",
  description:"Help Menu For Advance.",
  enabled:true,
  name:"help",
  needsQueue:false,
  nsfw:false,
  usage:"",
  userInVoiceChannel:false,
  userPermission:0,
  voteLock:false,

  execute(message, args) {

  		embed = false
        const Bot = message.client;
        const data = [];

        categories = []

        if(args.length) {args = [ `${args.join(" ")}` ]}

        Bot.commands.map(c => {
            if (!c.category) return
            if (!categories.includes(c.category)) categories.push(c.category)
        })

    	embed = new Discord.MessageEmbed()

    	if(!args[0]) {
    		embed.setTitle("Members Elite Commands:")
    		categories.map(cat => {

    			cmdsincat = []
    			Bot.commands.map(cmd => {
    				if(cat == cmd.category) {
    					cmdsincat.push(cmd.name)
    				}
    			})
    			embed.addField(`${cat.toUpperCase()}: `, "`" + cmdsincat.join(", ") + "`", false)
    		
    		})
    	}


    	if(args[0]) {
    		command = Bot.commands.find(c => c.name.toLowerCase() == args[0].toLowerCase() || c.aliases.includes(args[0].toLowerCase()))
    		if(!command) return message.channel.send("Could Not Find Command!")

    		embed.setTitle(`Information About ${command.name || "No Name"}`)

    		embed.addField("Description: ", command.description || "No Description.")
    		embed.addField("Category: ", command.category || "No Category".toUpperCase())
    		embed.addField("Usage: ", `${command.name || "No Name."} ${command.usage || ""}` )
    		embed.addField("Cooldown: ", `${command.cooldown || "5"} Seconds`)

    	}

    	embed.addField("Bot Invite", "[Invite](https://discordapp.com/oauth2/authorize?client_id=691451179212865619&scope=bot&permissions=8)")

    	message.channel.send({embed})

  }
}


