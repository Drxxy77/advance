const fs = require('fs')

module.exports = async (Bot, guild) => {

  fs.readdir(`${__dirname}/../events/guildCreate`, (err, files) => {
  	files.map(f => {
  	  var event = require(`${__dirname}/../events/guildCreate/${f}`)
  	  event.execute(Bot, guild)
  	})
  })

};
