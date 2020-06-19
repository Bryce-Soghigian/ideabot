require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();

const ideaArray = [
  {
    title: "Discord Bot",
    description: "Build a discord bot",
    genre: "web",
    languages: ["javascript", "python", "C#", "Go"],
    links: ["https://www.sitepoint.com/discord-bot-node-js/"],
  },
  {
    title:"Ambient Tv Lighting",
    description:"Having lighting behind the tv that matches the colors on the monitor",
    genre:"hardware",
    languages:["python","c++"],
    links: ["https://www.youtube.com/watch?v=nzDnr76fZCc&t=166s "]
  },
  {
    title:"Facial Recogniton Door",
    description:"Build a door that unlocks from a video stream of your face",
    genre:"hardware",
    languages:["python"],
    links: ["https://maker.pro/raspberry-pi/projects/how-to-create-a-facial-recognition-door-lock-with-raspberry-pi#:~:text=Circuit%20Diagram%20and%20Explanation&text=Connect%20the%20VCC%20and%20GND,of%20the%20solenoid%20door%20lock "]
  },
  {
    title:"Automatic Lights",
    description:"Light System that turns on when you enter or leave a room using motion sensors",
    genre:"hardware",
    languages:["python","c++"],
    links:["https://www.youtube.com/watch?v=DwKgsfN-XSM"]
  }
];
/**
   {
    title:"",
    description:"",
    genre:"",
    languages:[""],
    links: [""]
  }
 */

//============AUTH====================
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

//===============IDEA EVENT====================
bot.on("message", (msg) => {
  if (msg.content === "?idea") {
    let idea = ideaArray[Math.floor(Math.random() * ideaArray.length)];
    //Create a new languages string and a new links string with links and languages seperated by commas
    let languages = ``;
    idea.languages.map((lang) => {
      languages += `${lang},`;
    });
    let usefulLinks = ``;
    idea.links.map((link) => {
      usefulLinks = `${link} `;
    });
    msg.reply(
      `\nIdea:${idea.title}\nDescription:${idea.description}\nProject Type:${idea.genre}\nReccomended Languages: ${languages}\n Useful Links:${usefulLinks}`
    );
  }
  if(msg.content==="?web") {
      newArray = []
      ideaArray.map(item => {
          if(item.genre==="web"){
              newArray.push(item)
          }
      })
      console.log(newArray[0])
      let idea = newArray[Math.floor(Math.random()* newArray.length)]
      
      // let idea = newArray[Math.floor(Math.random() * ideaArray.length)];
      // //Create a new languages string and a new links string with links and languages seperated by commas
      let languages = ``;
      idea.languages.map((lang) => {
        languages += `${lang},`;
      });
      let usefulLinks = ``;
      idea.links.map((link) => {
        usefulLinks = `${link} `;
      });
      msg.reply(
        `\nIdea:${idea.title}\nDescription:${idea.description}\nReccomended Languages: ${languages}\nUseful Links:${usefulLinks}`
      );

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
