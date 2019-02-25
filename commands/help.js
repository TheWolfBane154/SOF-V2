module.exports.run = (bot, message, args, Discord) => {
let h = new Discord.RichEmbed()
.setTitle("Commands!")
.setDescription("Heres my commands!!")
.addField("Help", "Everyone: Shows this message.", false)
.setColor("GREEN")
message.channel.send({embed: h})
}
module.exports.help = {
"name": help
}
