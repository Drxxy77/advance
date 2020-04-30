module.exports = {
	async execute(Bot, member) {

        if(member.guild.database.joinCount > 0) {
        	member.guild.database.joinCount -= 1
        }

        console.log(member.guild.database)

	}
}