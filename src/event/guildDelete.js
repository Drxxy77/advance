const fs = require('fs')

module.exports = async (Bot, guild) => {

  fs.readdir(`${__dirname}/../events/guildDelete`, (err, files) => {
  	files.map(f => {
  	  var event = require(`${__dirname}/../events/guildDelete/${f}`)
  	  event.execute(Bot, guild)
  	})
  })

};
