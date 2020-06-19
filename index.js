require("dotenv").config();
const Discord = require("discord.js")
const bot = new Discord.Client();

const ideaArray = [{title:"Discord Bot",description:"Build a discord bot",genre:"web",languages:["javascript","python","C#","Go"],links:["https://www.sitepoint.com/discord-bot-node-js/"]}]

//============AUTH====================
const TOKEN = process.env.TOKEN
bot.login(TOKEN)

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
  });

//===============IDEA EVENT====================
bot.on('message', msg => {
    if (msg.content === '?idea') {
    let idea = ideaArray[Math.floor(Math.random()*ideaArray.length)]
    //Create a new languages string and a new links string with links and languages seperated by commas
    let languages = ``
    idea.languages.map(lang => {
        
        languages += `${lang},`
    })
    let usefulLinks = ``
    idea.links.map(link => {
        usefulLinks = `${link} `
    })
      msg.reply(`\nIdea:${idea.title}\nDescription:${idea.description}\nProject Type:${idea.genre}\nReccomended Languages: ${languages}\n Useful Links:${usefulLinks}`);
      
    }
  });
  

//idea array will be an array [{},{},{}] of objects
/**
 * Commands
 * !idea
 * ============!idea Description=========
 * This will return a random idea from the idea array
 * A language this idea requires
 * A description of the idea
 * A title of the project
 * A genre like webdev electronics or data science
 */