module.exports = {

	aliases:[],
	args:0,
	botInVoiceChannel:false,
	botPermission:85056,
	broken:false,
	bypass:false,
	admin:false,
	category:"utility",
	cooldown:5,
	cooldownType:"USER",
	description:"The Bots Ping.",
	enabled:true,
	name:"ping",
	needsQueue:false,
	nsfw:false,
	usage:"",
	userInVoiceChannel:false,
	userPermission:0,
	voteLock:false,
	
	async execute(message, args) {

	then = Date.now()

		message.channel.send("Pong!").then(m => {
			m.edit(`Discord-Ping: ${Math.floor((Date.now() - then))}ms, Websocket-Ping: ${Math.floor(message.client.ws.ping)}ms.`)
		})

	}

};
