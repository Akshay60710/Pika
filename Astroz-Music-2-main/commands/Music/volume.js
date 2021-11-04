const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`../../botconfig/config.json`);
const ee = require(`../../botconfig/embed.json`);
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
  name: `volume`,
  category: `Music`,
  aliases: [`vol`],
  description: `Changes the Volume`,
  usage: `volume <0-150>`,
  parameters: {"type":"music", "activeplayer": true, "previoussong": false},
  run: async (client, message, args, guildData, player, prefix) => {
    try{
      //if the Volume Number is out of Range return error msg
      if (Number(args[0]) <= 0 || Number(args[0]) > 150) {
        const ypy = new MessageEmbed()
        .setColor(ee.wrongcolor)
        .setDescription(`${emoji.msg.ERROR} You may set the volume \`1\` - \`150\``)
        return message.channel.send({embeds: [ypy]})
      }
      //if its not a Number return error msg
      if (isNaN(args[0])) {
        const poopp = new MessageEmbed()
        .setColor(ee.wrongcolor)
        .setDescription(`${emoji.msg.ERROR} You may set the volume \`1\` - \`150\``)
        return message.channel.send({embeds: [poopp]})
      }
      //change the volume
      player.setVolume(Number(args[0]));
      //send success message
      const yto = new MessageEmbed()
      
      .setTitle(`${emoji.msg.SUCCESS} | Volume set to: \`${player.volume} %\``)
      .setColor(ee.color)
      return message.channel.send({embeds: [yto]});
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const emesdf = new MessageEmbed()
      .setColor(ee.wrongcolor)
      .setAuthor(`An Error Occurred`)
      .setDescription(`\`\`\`${e.message}\`\`\``);
      return message.channel.send({embeds: [emesdf]});
    }
  }
};