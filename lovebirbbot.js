const Discord = require("discord.js");
const client = new Discord.Client;

//Check if the bot is online
client.on("ready", () => { //The Ready Event itself!
    console.log("READY"); //A simple console log to say that the bot is online and ready.
});

//Change its token ID everytime it disconnects or settings are changed.
client.login(process.env.BOT_TOKEN);
client.setMaxListeners(50);

//================================  COMMANDS  =========================================

//=========HELP COMMAND===========
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!lovebirbbothelp")) { 
           message.author.sendMessage("Hi. My current available commands are the following:")
           message.author.sendMessage("User dependent commands: \n - !compliment Discord User \n - !loveletter Discord User \n Dogs related commands: \n - !doggobobs \n - !hunted \n - !mlem \n - !existentialdoggo \n - !maggiemoo \n - !maggiestatus \n - !konaasmr \n Other commands: \n - !riot \n - !smolgift \n - !delusional")
     }
  })


//========= !compliment + mentioned user ===========
//compliment dictionary
var compliment = ["breathtaking", "stunning", "fabulous",  "fantastic","incandescent", "bold",
                  "marvelous", "shining", "immaculate",  "angelic", "unique", "enticing",
                  "awesome",  "inspiring", "luminous",  "majestic", "magnanimous",
                  "flowering",  "epic",   "epicurious", "spirited", "sparkling",
                  "energetic", "gracious", "charming", "colorful", "glittering",
                  "wondrous", "refined", "lovely", "sensuous", "sultry",
                  "breezy", "gentle", "soothing", "polished", "swift",
                  "popular", "famous", "distinguished", "flamboyant", "composed",
                  "ravishing", "genial", "genuine", "gallant", "pretentious",
                  "mesmerizing", "ascending", "stellar","fluorescent", "smart", "brilliant",
                  "flashing", "light", "nimble", "innocuous", "eloquent", "finer", "sophisticated",
                  "dearest", "professional", "cosmic", "galactic", "fancy", "formidable", "breathtaking", "flawless"
                  ,"voluptuous","saucy", "sassy", "sporty", "luscious", "iridescent", "versatile", "protean", "melodious"];

//animals dictionary
var animals = ["unicorn", "dragon", "wolf", "horse", "platypus", "dragonfly", "damselfly",
               "seal", "kitty", "fox", "pony", "hippopotamus", "giraffe", "butterfly", "bee", "lion", "zebra",
              "manatee", "seahorse", "goat", "sheep", "eagle", "albatross", "phoenix",
              "tiger", "koala", "hummingbird", "starfish", "shark", "whale", "dolphin",
              "chameleon", "lizard", "iguana", "goldfish", "mahi-mahi", "camel", "bird",
               "dinosaur", "pterodactyl", "t-rex", "crocodile", "walrus", 
               "wasp", "duck", "goose", "ostrich", "unicorn", "dodo"];

//desserts dictionary
var desserts= ["cupcake", "pudding", "tiramisu", "flan", "baklava", "cake", "cheesecake", 
               "amandine", "pie", "gingerbread", "vanilla ice cream", "napolitan ice cream", "chocolate ice cream", "pistachio ice cream",
               "charlotte", "melonpan", "mochi", "taiyaki", "mazurek", "waffle", "tula pryanik", "gluten-free cake",
               "ketogenic cake", "paleo cake", "erotic cake", "yule log", "fruitcake",
               "parkin", "pan rozzo", "panfort", "chocobanana", "madeleine", "jewish honey cake",
               "dobosh", "lamington", "kuchen", "tahinopita", "swiss roll", "spekkoek", "bizcocho",
               "black bun", "red bean bun", "pinca", "doughnut", "arany galuska", "sundae", "ezekiel bread", 
               "sugar-free parfait", "low carb donut","trans fat free muffin","air-popped caramel popcorn", "artificially sweetened bun",
               "almond flour pancake","baba ganoush", "low calorie eclair", "lewdcake"];

var complimentThing = ["unicorn", "dragon", "wolf", "horse", "platypus", "dragonfly", "damselfly",
               "seal", "kitty", "fox", "pony", "hippopotamus", "giraffe", "butterfly", "bee", "lion", "zebra",
              "manatee", "seahorse", "goat", "sheep", "eagle", "albatross", "phoenix",
              "tiger", "koala", "hummingbird", "starfish", "shark", "whale", "dolphin",
              "chameleon", "lizard", "iguana", "goldfish", "mahi-mahi", "camel", "bird",
               "dinosaur", "pterodactyl", "t-rex", "crocodile", "walrus", 
               "wasp", "duck", "goose", "ostrich", "unicorn", "cupcake", "pudding", "tiramisu", "flan", "baklava", "cake", "cheesecake", 
               "amandine", "pie", "gingerbread", "vanilla ice cream", "napolitan ice cream", "chocolate ice cream", "pistacho ice cream",
               "charlotte", "melonpan", "ezekiel bread", "sugar-free parfait", "low carb donut","air-popped caramel popcorn", 
               "mochi", "taiyaki", "mazurek", "waffle", "tula pryanik", "gluten-free cake",
               "ketogenic cake", "paleo cake", "erotic cake", "yule log", "fruitcake", "dulce de leche",
               "parkin", "pan rozzo", "panfort", "chocobanana", "madeleine", "milk candy", "jewish honey cake",
               "dobosh", "lamington", "kuchen", "tahinopita", "churro", "swiss roll", "spekkoek", "bizcocho",
               "black bun", "red bean bun", "marshmallow", "cotton candy", "pinca", "doughnut", "arany galuska", "sundae", "baba ganoush"];

var complimentIndex = compliment.length - 1;
var animalsIndex = animals.length - 1;
var dessertsIndex = desserts.length - 1;
var compthingIndex = complimentThing.length - 1;

client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!compliment")) { 
   
    //Check if the message has a mention in it.
    if(message.mentions.users.first()) { 
          //Search for that specific user ID in the Discord channel list and construct the message.
          let user = message.mentions.users.first();
          //Message Structure: "Oh, ____(Discord User), my ____(compliment) and _____(compliment) ____(animal/dessert). You're the most ____(compliment) ___(animal/dessert) in all the land." 
          message.channel.send("Oh, " + user + ",  my " + compliment[Math.floor((Math.random()*complimentIndex))] 
                               + " and " + compliment[Math.floor((Math.random()*complimentIndex))] 
                               + " " + complimentThing[Math.floor((Math.random()*compthingIndex))] 
                               + ". You are the most "
                               + compliment[Math.floor((Math.random()*complimentIndex))] 
                               + " " + complimentThing[Math.floor((Math.random()*compthingIndex))] 
                               +  " in all the land." 
                               );
                                       } 
    else {
      //Throws an exception for not providing a correct User ID.
          message.reply("Sorry, but your waifu is in another castle. Provide a valid Discord username while using this command."); //Reply with a mention saying "Invalid user."
    }  
    }
  }
)

//========= !maggiemoo ===========
var mooclip = ["https://clips.twitch.tv/SpicyGlutenFreeOstrichWoofer",
               "https://clips.twitch.tv/HedonisticShakingSalmonTakeNRG",
               "https://clips.twitch.tv/PoisedSarcasticCaterpillarBudStar?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/OpenCreativeHerringWoofer?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/DelightfulFitSquirrelNerfBlueBlaster?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/ColdbloodedCrypticMartenSMOrc?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/LovelyPuzzledWormFeelsBadMan?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/ChillyArtisticMacaroniAllenHuhu?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/HilariousRelievedAlmondShadyLulu?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/HilariousRelievedAlmondShadyLulu?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/HilariousRelievedAlmondShadyLulu?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/PhilanthropicLittleNikudonRalpherZ?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SoftIgnorantStaplePrimeMe?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/ThoughtfulPrettyEggplantNerfRedBlaster?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/WealthyBusyKoalaUnSane?tt_medium=clips_api&tt_content=url", 
               "https://clips.twitch.tv/MistyLachrymoseMagpieDoggo?tt_medium=clips_api&tt_content=url", 
               "https://clips.twitch.tv/GoldenMagnificentHorseradishNerfRedBlaster?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/EnthusiasticAffluentEndiveCoolCat?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/InexpensiveCuriousCrocodileTBTacoLeft?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/EvilRockyGnatHeyGuys?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/PerfectGracefulWalrusSquadGoals?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SincereResoluteSkunkDoritosChip?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/ObeseYummyCrowPoooound?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/TentativeCovertYakinikuPraiseIt?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/BetterKitschyAmazonGOWSkull?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/TolerantCheerfulHedgehogAMPEnergy?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/AverageSnappyDiscBatChest?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/AthleticCoyTigerDatSheffy?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/LuckyColorfulGrassTBCheesePull?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/PrettyTubularMangoWTRuck?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/RacyMagnificentDaikonRlyTho?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/CleverVenomousKoalaPJSalt?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/IgnorantSpeedyBillKreygasm?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/FurtiveAgreeableBobaHassanChop?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SincerePlumpHerringSaltBae?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/GorgeousConsiderateHerdPogChamp?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/AdventurousEmpathicPorcupineTF2John?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/RichObliviousGrassGrammarKing?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/ModernFineDragonMingLee?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/CoweringSmilingOysterMVGame?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/AbstemiousFragileChickpeaKAPOW?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/RudeEntertainingBisonEagleEye?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/ObservantSmellyArtichokeOpieOP?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SuaveAwkwardBasenjiStinkyCheese?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/EvilGlamorousBillDatBoi?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/AlluringHandsomeSnakeBrokeBack?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/QuaintDirtyLegPicoMause?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SpeedySteamyNightingaleArsonNoSexy?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/ModernExuberantCaterpillar4Head?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/BlueRepleteIguanaCclamChamp?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/NeighborlyArborealLaptopHassanChop?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/ExuberantColdChinchillaBCWarrior?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/RacyFlirtyJalapenoRuleFive?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SplendidOilyAppleFailFish?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/BlindingOptimisticLlamaSuperVinlin?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/CaringHeadstrongPlumageKappaWealth?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/DeadBlitheSashimiYouDontSay?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/AltruisticBlueGnatKippa?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/JoyousClumsyDugongBrainSlug?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SpeedyDeadCurryPastaThat?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/PatientElegantRadishRickroll?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/AbstemiousSuperTubersPermaSmug?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/DependablePhilanthropicCaterpillarSpicyBoy?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SullenSquareCrabBCWarrior?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/NastySeductiveWalletFeelsBadMan?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/PluckyCleverClintmullinsAsianGlow?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SeductiveEnthusiasticDadJonCarnage?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/WonderfulCaringAlpacaArsonNoSexy?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/MildColdbloodedGerbilKappa?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SmallBeautifulPeanutHoneyBadger?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/ResilientCarelessNigiriLitFam?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/FitAgilePotatoTinyFace?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/FairMushyCaterpillarYouWHY?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/CredulousAssiduousMarjoramPeteZarollTie?tt_medium=clips_api&tt_content=url"];

var mooIndex = mooclip.length - 1;

client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!maggiemoo")) { 
           message.channel.send("Enjoy the melodious warcry of the golden behemoth.");
           message.channel.send(mooclip[Math.floor((Math.random()*mooIndex))]);
  }
})

//========= !delusional ===========
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!delusional")) { 
           message.channel.send("You know something is wrong when you change topics that quickly....");
           message.channel.send("https://clips.twitch.tv/JazzyBlindingKuduFUNgineer?tt_medium=clips_api&tt_content=url");
  }
})

//========= !smolgift ===========
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!smolgift")) { 
           message.channel.send("This is a gift from yours truly, SammySmols.");
           message.channel.send("https://clips.twitch.tv/SmoothAstuteGorillaKappa?tt_medium=clips_api&tt_content=url");
  }
})

//========= !konaasmr ===========
var asmrclip = ["https://clips.twitch.tv/WiseHorribleAlmondPMSTwin?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/DeadSarcasticPuppyKlappa?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/KindUgliestArugulaWow?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/ColdbloodedApatheticDurianCoolStoryBro?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SarcasticAstuteGoblinPanicBasket?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/SparklyDaintyGooseRalpherZ?tt_medium=clips_api&tt_content=url",
               "https://clips.twitch.tv/BigAstutePartridgeEleGiggle",
               "https://clips.twitch.tv/AmazingTalentedPuppySeemsGood",
               "https://clips.twitch.tv/BlazingAmusedMallardDerp"
               ];
var asmrIndex = asmrclip.length - 1;

client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!konaasmr")) { 
           message.channel.send("So gentle...so soothing...");
           message.channel.send(asmrclip[Math.floor((Math.random()*asmrIndex))]);
  }
})

var messagesResponse = ["*Congratulations, you have discovered the fact people talk.....bitch.*",
                        "*Well done, your deductive skills are on point to find out people socialize when you're not around.....bitch.*",
                        "*Bravo, you were able to see through a plethora of messages. You're so smart.....bitch.*",
                        "*Good job. Your intelligence is on its apex by figuring out people talk when you're absent....bitch.*",
                       "*Good job. Your intelligence is on its apex by figuring out people talk when you're absent....bitch.*"];
var messagesResponseIndex = messagesResponse.length - 1;

//!messages ...bitch
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!messages")) { 
            message.channel.send(messagesResponse[Math.floor((Math.random()*messagesResponseIndex))]);
  }
})

//Birbs!
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!boobies")) { 
            message.channel.send("Here are some good looking boobies for you:")
            message.channel.send("https://i.ytimg.com/vi/DFV2jXd50N4/maxresdefault.jpg");
  }
})

client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!hunted")) { 
            message.channel.send("You'd better watch out, these two savage beasts are coming for you.");
            message.channel.send("https://gyazo.com/03df66fac27f2d7ab3100bcf44ad3d57");
  }
})

//!loveletter + user
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!loveletter")) { 
   
    //Check if the message has a mention in it.
    if(message.mentions.users.first()) { 
          //Search for that specific user ID in the Discord channel list and construct the message.
          let user = message.mentions.users.first();
          message.channel.send("Dear, " + user + ",");
          message.channel.send("Last night I had a beautiful dream. I was lost in a fog, wandering around, searching for a(n) " + complimentThing[Math.floor((Math.random()*compthingIndex) + 1)] 
                              + ". Only I didn't know what it was exactly that I was searching for. Every face I saw was strange. Then at my darkest and loneliest moment I saw your " + compliment[Math.floor((Math.random()*complimentIndex) + 1)] + " face. You smiled at me, extended your hand and then we flew up together over the clouds and straight up towards the sun and the stars - twirling around and around - like two angels caught in a cosmic embrace. We were so happy. Then I woke up and realized that this was no dream. I had been presented with the truth about you. Please take me up, my "+ compliment[Math.floor((Math.random()*complimentIndex) + 1)] 
                              + " " + complimentThing[Math.floor((Math.random()*compthingIndex) + 1)] + ", my lover. Wherever you go, please take me with you. Please stay by my side and make me complete. My eyes need to see what you see, my ears hear what you hear and my soul feel what you feel...");
          message.channel.send("Please tell me how you feel...");
          message.channel.send("May the angels tuck you in at night...");
                                       
                                      }
    else {
      //Throws an exception for not providing a correct User ID.
          message.reply("Provide a valid Discord username while using this command. Show your significant other some love."); //Reply with a mention saying "Invalid user."
    }  
    }
  }
)

//========= !riot ===========
var riotMedia = ["https://media.giphy.com/media/l2Je06sjaUIu4zTrO/giphy.gif",
                 "https://media.giphy.com/media/l0HlI0p3CKC245I88/giphy.gif",
                 "http://cdn.makeagif.com/media/5-10-2015/A8c_mt.gif",
                 "https://vignette.wikia.nocookie.net/runescape2/images/7/7f/Pay_to_PK_riot.gif",
                 "https://i.gifer.com/H7Po.gif",
                 "https://i.pinimg.com/originals/5f/3f/af/5f3fafbc12bea529f7fa120ad320067f.gif",
                 "https://media.giphy.com/media/14331B0amB53cA/giphy.gif",
                 "https://us.v-cdn.net/5020794/uploads/editor/37/95z6gc22uk8m.gif",
                 "http://i.giphy.com/1iTH1WIUjM0VATSw.gif",
                 "https://www.tenor.co/unmc.gif",
                 "https://78.media.tumblr.com/91e3ee60d4a405fe1e4838c463dd7585/tumblr_o3zsdyIsYW1rjbmxro1_500.gif",
                 "https://ionehellobeautiful.files.wordpress.com/2014/03/throw-table-catch-chair.gif",
                 "https://i.gifer.com/EIf4.gif",
                 "https://media.tenor.com/images/1ea12b4225d45db752ac3915547e538e/tenor.gif",
                 "https://media1.tenor.com/images/1c6ea33e9caa04f76417193521d50ff4/tenor.gif",
                 "https://media.giphy.com/media/IW03ZxGkdRzUY/giphy.gif",
                 "https://i.kym-cdn.com/photos/images/original/001/280/763/09b.gif",
                 "https://i.kym-cdn.com/photos/images/original/001/338/785/246.gif",
                 "https://media.giphy.com/media/O1OU8EoNUmIYo/giphy.gif",
                 "https://i.imgur.com/yI06qH4.gif",
                 "https://i.gifer.com/TMXy.gif",
                 "http://49.media.tumblr.com/c686f84152a12bb0d34a84c9763aa7cf/tumblr_nb4gv3Sf0a1tsf68ao1_400.gif",
                 "http://49.media.tumblr.com/2fa119b1b406dab0d96a3a80fe4f27db/tumblr_nb4gv3Sf0a1tsf68ao3_400.gif",
                 "http://www.gifbin.com/bin/062011/1308916121_rioter_gets_tackled.gif",
                 "https://media.giphy.com/media/iEpv70iGzf3Nu/giphy.gif"
                 ];
var riotMediaIndex = riotMedia.length - 1;
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!riot")) { 
           message.channel.send(":fire: :fire: :fire: OUR VOICES WILL BE HEARD!! IT'S TIME TO RAISE YOUR PITCHFORKS AND BURN DOWN ALL THE THINGS...!! :fire: :fire: :fire: ");
           message.channel.send(riotMedia[Math.floor((Math.random()*riotMediaIndex))]);
  }
})

//ExistentialDoggo
    //Array order: Maggie 0 , Kona 1 , Mara 2, Winter 3, Darwin 4, Luna 5
    var chosenDoggo = ["https://i.imgur.com/ugbz7ag.jpg",
                         "https://i.imgur.com/pq1cbKQ.jpg",
                         "https://i.imgur.com/ElWF9ze.jpg",
                         "https://i.imgur.com/p7VR1Jz.jpg",
                         "https://i.imgur.com/ISMzc7g.jpg",
                         "https://i.imgur.com/OxL92oT.jpg"]

    client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!existentialdoggo")) { 
    var doggoOfChoice = Math.floor((Math.random()*(chosenDoggo.length - 1)));
   
var sadDoggoQuestions1 = ["Where is the dot?", "What is love?", "What is happiness?", "What is life?", "What is an IPA?", "What is a pizza?"];
var sadDoggoQuestions2 = ["Why does it elude me?", "What does it mean?", "Should I like or hate it?"];
var sadDoggoQuestions3 = ["Should I fight for it?", "Should I PROTEC for it?", "Should I ATTAC for it?"];
var sadDoggoQuestions4 = ["Why is Maggie fat?", "Why is Winter crazy?", "Why is Milo so cute?"];
var sadDoggoQuestions5 = ["What is mommy doing talking to the shiny box?", "Why is mommy talking to herself?", "Why is my butt so itchy?"];
var sadDoggoConclusion = "I have so many questions...";

var maggieQuestions1 = ["Do you like walks? Do you like outside? Do you like treats? Do you like face mushes? Do you like to open bobs? Do you like parties?. K hooman I luv u bai."
                        , "Well, hooman....Treats or riot? What is your choice?", 
                        "*frantic tail wag*"];

var winterQuestions1 = ["What is this doing here?", "What should I do with this?"]
var winterQuestions2 = ["Why is hooman sassing me?", "Why does hooman look at me expecting me to do something?", "Why is hooman looking at me like that?"];
var winterQuestions3 = ["Why is Mara sad?", "Why is Kona sad?", "Why is Maggie fat?", "Why is Milo so cute?"];
var winterQuestions4 = ["Should I dig a hole?", "Should I talk back to hooman?", "Should I sass hooman?"];
var winterConclusion= "I think hooman is borken..."

var darwinlunaQuestions1 = ["Why is mommy looking to the sky?", "What's an UFO?", "What's a quasar?", "What's a black hole?"];
var darwinlunaQuestions2 = ["Why does hooman scream SPAAAACEEEE?", "Why is my butt so itchy?", "Is the Milky Way a farm for cows?"];
var darwinlunaQuestions3 = ["What's this thing about stars and planets?", "Why does hooman talk to the shiny box?", "Why is hooman talking to herself?"];
var darwinlunaQuestions4 = ["Where are my treats?", "Where are my toys?", "Did I just fart...?"];
var darwinlunaConclusion = "My questions are as endless as the universe...";

    switch(doggoOfChoice) {

//Maggie
      case 0:
        message.channel.send(chosenDoggo[0]); 
        message.channel.send(maggieQuestions1[Math.floor(Math.random()*(maggieQuestions1.length - 1))]); 
      break;
//Kona or Mara
      case 1:  
        message.channel.send(chosenDoggo[1]); 
        message.channel.send(sadDoggoQuestions1[Math.floor(Math.random()*(sadDoggoQuestions1.length - 1))] + " " +
                             sadDoggoQuestions2[Math.floor(Math.random()*(sadDoggoQuestions2.length - 1))] + " " +
                             sadDoggoQuestions3[Math.floor(Math.random()*(sadDoggoQuestions3.length - 1))] + " " +
                             "Why is Maggie fat? " +
                             sadDoggoQuestions5[Math.floor(Math.random()*(sadDoggoQuestions5.length - 1))] + " " +
                             sadDoggoConclusion 
                             ); 
      break;
        
      case 2:  
        message.channel.send(chosenDoggo[2]); 
        message.channel.send(sadDoggoQuestions1[Math.floor(Math.random()*(sadDoggoQuestions1.length - 1))] + " " +
                             sadDoggoQuestions2[Math.floor(Math.random()*(sadDoggoQuestions2.length - 1))] + " " +
                             sadDoggoQuestions3[Math.floor(Math.random()*(sadDoggoQuestions3.length - 1))] + " " +
                             "Why is Winter crazy? " +
                             sadDoggoQuestions5[Math.floor(Math.random()*(sadDoggoQuestions5.length - 1))] + " " +
                             sadDoggoConclusion 
                             ); 
      break;
//Winter
      case 3:
        message.channel.send(chosenDoggo[3]); 
        message.channel.send(winterQuestions1[Math.floor(Math.random()*(winterQuestions1.length - 1))] + " " +
                             winterQuestions2[Math.floor(Math.random()*(winterQuestions2.length - 1))] + " " +
                             "Why is Mara sad? " +
                             winterQuestions4[Math.floor(Math.random()*(winterQuestions4.length - 1))] + " " +
                             winterConclusion 
                             ); 
      break;
        
//Darwin and Luna
      case 4:
        message.channel.send(chosenDoggo[4]); 
        message.channel.send(darwinlunaQuestions1[Math.floor(Math.random()*(darwinlunaQuestions1.length - 1))] + " " +
                             darwinlunaQuestions2[Math.floor(Math.random()*(darwinlunaQuestions2.length - 1))] + " " +
                             darwinlunaQuestions3[Math.floor(Math.random()*(darwinlunaQuestions3.length - 1))] + " " +
                             darwinlunaQuestions4[Math.floor(Math.random()*(darwinlunaQuestions4.length - 1))] + " " +
                             darwinlunaConclusion
                             ); 
      break;
      case 5:
        message.channel.send(chosenDoggo[5]); 
        message.channel.send(darwinlunaQuestions1[Math.floor(Math.random()*(darwinlunaQuestions1.length - 1))] + " " +
                             darwinlunaQuestions2[Math.floor(Math.random()*(darwinlunaQuestions2.length - 1))] + " " +
                             darwinlunaQuestions3[Math.floor(Math.random()*(darwinlunaQuestions3.length - 1))] + " " +
                             darwinlunaQuestions4[Math.floor(Math.random()*(darwinlunaQuestions4.length - 1))] + " " +
                             darwinlunaConclusion 
                             ); 
      break;
      default: message.channel.send("Looks like doggos are taking a break. Please come back later.");
        
                      }
    }
  }
    )       

client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!maggiestatus")) { 
            message.channel.send("Yes...");
            message.channel.send("https://www.youtube.com/watch?v=cS3lgsNFDqU");
    
  }
})

//!mlem
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!mlem")) { 
            message.channel.send("Mlem...mlem...mlem...");
            message.channel.send("https://imgur.com/lpw4yps");
  }
})

//=====!doggobobs=====
var doggobobsimg = ["https://i.imgur.com/DDhsqax.jpg",
                    "https://i.imgur.com/VvemdOs.jpg",
                    "https://i.imgur.com/gunI0Q8.jpg",
                    "https://i.imgur.com/lhtwYzn.jpg",
                    "https://i.imgur.com/frkN9nl.jpg",
                    "https://i.imgur.com/ObYMcma.jpg",
                    "https://i.imgur.com/9xQLdTf.jpg",
                    "https://i.imgur.com/b0jKSpD.jpg",
                    "https://i.imgur.com/22jRZo7.jpg",
                    "https://i.imgur.com/22jRZo7.jpg"
                    ];

var doggobobsimgIndex = doggobobsimg.length - 1;

client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!doggobobs")) { 
            message.channel.send("THIS DOG IS WILLING TO SHOW YOU THEIR 10 RAMPANT BOBS FOR A TREAT...OR TWO!");
            message.channel.send(doggobobsimg[Math.floor((Math.random()*doggobobsimgIndex))]);
  }
})

/*
//=========!twiggered ===========
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!twiggered")) { 
           message.channel.send("I'M SO HECKING TWIGGERED! SO MUCH ANGERY!!!");
           message.channel.send("https://gyazo.com/273eab8ee4f800f9d9f4b11f043eb681");
  }
})
//==========ORDER 66 =============
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!order66")) { 
           message.channel.send("Executing Order 66...");
           message.channel.send("Removing all the Pumpkin Spice related products off the market... COMPLETED");
  }
})
*/

/*
https://cdn.discordapp.com/attachments/460183278268317698/471368916153925662/image.gif
*/
