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
/*
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
*/

//========= !smolgift ===========
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!smolgift")) { 
           message.channel.send("This is a gift from yours truly, SammySmols.");
           message.channel.send("https://clips.twitch.tv/SmoothAstuteGorillaKappa?tt_medium=clips_api&tt_content=url");
  }
})

/*
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
*/

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

/*
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!hunted")) { 
            message.channel.send("You'd better watch out, these two savage beasts are coming for you.");
            message.channel.send("https://gyazo.com/03df66fac27f2d7ab3100bcf44ad3d57");
  }
})
*/

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

/*
//MaggieStatus
   client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!maggiestatus")) { 
   
    var maggieOptions = 24
    var maggieChoice = Math.floor((Math.random() * maggieOptions));
    //message.channel.send("Fetching Maggie's current status...please wait..."]);
    var maggieMessage = "";
     switch(maggieChoice) {
       case 0:
	maggieMessage = "Maggie is currently recharging under the sunlight."
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/b2p5Fol.jpg"); 
      break;
       case 1:  
	maggieMessage = "Maggie is cuddling with Steven inappropiately...wait...Maggie! This is not that kind of command!"
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/fxKkviO.png"); 
      break;
        
      case 2:  
	maggieMessage = "Maggie is cuddling with Steven inappropiately...wait...Maggie! This is not that kind of command!"
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/fuHvNNO.jpg"); 
      break;
       case 3:
	maggieMessage = "Maggie is currently posing for doggo Tinder as twinkie_sprinkles!"
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/ekKiGpP.jpg"); 
      break;
        
      case 4:
	maggieMessage = "Maggie is currently snuggling with Kona...so cute!"
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/6MdpHK7.png"); 
      break;
       case 5:
	maggieMessage = "Maggie is currently hiding from mommy for accidentally eating Kona's food plate....she was hungry, okay?"
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/Dq8QDYd.jpg"); 
      break;
       case 6:
	maggieMessage = "Maggie is currently pretending to be Kona."
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/K1vUenU.jpg"); 
      break;
       case 7:
	maggieMessage = "Maggie is currently negotiating with hooman about getting more treats or being obliged to perform a riot around the house."
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/ugbz7ag.jpg"); 
      break;
       case 8:
	maggieMessage = "Maggie is currently being comfy. Do not disturb the majestic creature."
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/SXOrraq.jpg"); 
      break;
       case 9:
	maggieMessage = "Maggie, Kona and Doggo Mom are posing for the camera for a really cute picture!"
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/uvJPqjM.jpg"); 
      break;
       case 10:
	maggieMessage = "Maggie went out for a swimmie and now she looks like a ferocious otter beast willing to rip you apart for treats!"
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/pLm2vlS.jpg"); 
      break;
       case 11:
	maggieMessage = "Maggie is taking a nap after a really long day in college (because college girls wear shirts to cover their bobs)." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/Natv0RP.jpg"); 
      break;
       case 12:
	maggieMessage = "Maggie is giving us the side eyes for finding out Doggo Mom is making her eat low calories dog food." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/OpHZFfb.jpg"); 
      break;
       case 13:
	maggieMessage = "It looks like Maggie is getting ready for a walk, or a party, or to simply go outside, given her notorious goblin ears." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/HQDKY8h.jpg"); 
      break;
       case 14:
	maggieMessage = "Ah! Who might this be? Is it Maggie or...is it the famous streamer twinkie_sprinkles posing for the camera with Kona?" 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/xnpelbZ.jpg"); 
      break;
       case 15:
	maggieMessage = "Maggie is currently taking a selfie." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/M8uykix.jpg"); 
      break;
       case 16:
	maggieMessage = "Maggie is tired after a walk and a swim. If treats are offered, she will awaken; otherwise, doneflop." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/MOixT2m.jpg"); 
      break;
	case 17:
	maggieMessage = "Maggie is tired after a walk and a swim. If treats are offered, she will awaken; otherwise, doneflop." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/MOixT2m.jpg"); 
      break; 
	case 18:
	maggieMessage = "Maggie is currently taking a nap after working so hard for her stream.As you can see, she is using Kona's butt as her personal pillow." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/kAPw2du.jpg"); 
      break; 
	case 19:
	maggieMessage = "Maggie is taking a nap while performing her famous and epic flopear unicorn pose. As you can see, she is using Steven as her personal pillow." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/LH8ssEr.jpg"); 
      break; 
	case 20:
	maggieMessage = "Maggie is roleplaying as a goblin taking care of a bridge. If treats are provided, the goblin-eared behemoth shall let you pass; if not...nothing will happen and the beast will not move." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/RuWuxaG.jpg"); 
      break;
	case 21:
	maggieMessage = "Maggie is performing the legendary flopear unicorn pose in order to assert dominance against the Roomba." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/tmxMhoW.jpg"); 
      break;
	case 22:
	maggieMessage = "Maggie and Kona are confined in doggo jail. The golden one is emitting Chewbacca noises as a consequence of this transgression. Bonus points if you're able to spot Kona." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/fQXEZtO.jpg"); 
      break;
	case 23:
	maggieMessage = "Maggie is unable to even. She just can't....even." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/YwCf1sr.jpg"); 
      break;
	case 24:
	maggieMessage = "Maggie is taking another selfie for doggo Tinder. This one in particular looks very artful." 
        message.channel.send(maggieMessage); 
        message.channel.send("https://i.imgur.com/fVqkFsK.jpg"); 
      break;
	
		     
		     
       default: message.channel.send("https://www.youtube.com/watch?v=cS3lgsNFDqU");
        
    }
    }
  }
)


//Toikeylaig
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!toikeylaig")) { 
            message.channel.send("When Maggatees are caught in deep slumber, it is said they experience a series of physical reflexes on their paws and legs, presumably named the toikey laigs. With the help of top-tier technology, it was possible to capture the exact moment when this happen on these kind of organisms. Mesmerizing...")
            message.channel.send("https://i.imgur.com/xr18Vtb.mp4");
  }
})

//KonaStatus
   client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!konastatus")) { 
   
    var konaOptions = 9
    var konaChoice = Math.floor((Math.random() * konaOptions));
    var konaMessage = "";
	  
     switch(konaChoice) {
       case 0:
	konaMessage = "Kona is currently lost in thought. Deep inside, you can feel her questioning existence itself in an eloquent and wise fashion... \n"
        message.channel.send(konaMessage + " *A tree does not grow because one watches and wills it to. A tree grows because it is a tree and craves the sun. If I stop watching and willing, will I to grow? But I do not crave the sun. What must I work towards to grow like the tree grows towards sun? Will I find it or will it find me?*"); 
        message.channel.send("https://i.imgur.com/F1Eo8kM.jpg"); 
      break;
       case 1:  
	konaMessage = "Kona is currently meditating the meaning of all things. Deep inside, you're able to hear her thoughts...\n"
        message.channel.send(konaMessage + " *Take a stone. That stone was once large, and part of something greater. But now the stone is small. But does that mean it isn’t part of something greater anymore? This stone may be small, but it is now unique and free the roam the world (if it had legs).*"); 
        message.channel.send("https://i.imgur.com/WQNYPng.jpg"); 
      break;
       case 2:  
	konaMessage = "Kona just went for a swimmie, but there seems to be something that is bothering her. What would it be? ...\n"
        message.channel.send(konaMessage + " *While one cannot see the air or the wind, one always knows it is there, and that it is important. Do not fret if you are not always there, or if someone is not always there. Like the air and the wind, they are important, and so are you. But farts are not. They just smell.*"); 
        message.channel.send("https://i.imgur.com/wmX5NAK.jpg"); 
      break;
       case 3:
	konaMessage = "Kona may seem distressed for the kitty that is sitting close to her, but in fact she has attained a state of stillness. Inside her head, she states the following haiku: \n"
        message.channel.send(konaMessage + " *Curl into donut / I become a deep black hole / I am the Konut*"); 
        message.channel.send("https://i.imgur.com/d66hdYl.jpg"); 
      break; 
      case 4:
	konaMessage = "Kona has found a stick to bite. As she chews it peacefully, you can feel her wisdom grasped as a haiku... \n"
        message.channel.send(konaMessage + " *This stick is the best / But the door does not think so / It will not stop me.*"); 
        message.channel.send("https://i.imgur.com/mT7xUtl.jpg"); 
      break;
       case 5:
	konaMessage = "Kona and Maggie are taking some rest after a walkie; however, a fiendish aroma pollutes the air around them...Kona describes the situation as follows:  \n"
        message.channel.send(konaMessage + " *There was a bad smell / Maggie was sat next to me / I blamed it on her.*"); 
        message.channel.send("https://i.imgur.com/6dXhTRw.jpg"); 
      break;
       case 6:
	konaMessage = "Kona's anxiety has been bad lately to the point Doggo Mom had to give her some medicine. Her mind may be a mess, but for some reason you're able to feel her confusion... \n"
        message.channel.send(konaMessage + " *High in the sky there are birds. And there are large noisy birds. And sometimes there are balls floating like clouds. I aspire to catch those balls, but they are out of my reach. Oh ball in the sky, one day I shall too float high like you, and finally catch you. Then bury you. And probably lose you. But at least I will have caught you, finally.*"); 
        message.channel.send("https://i.imgur.com/Nq5xlx2.jpg"); 
      break;
       case 7:
	konaMessage = "Kona and Maggie are taking a break after playing so much outside. It looks like Kona is inspired by her experience today:  \n"
        message.channel.send(konaMessage + " *They say the night is dark, but one must look at the night to see how truly bright it is. While the day has one bright light, the night is filled with many lights. Thousands of stars, a bright moon, planets, and even bright objects the hoomans have put in the sky. You are never alone during the dark night, and there are always lights shining bright for you.*"); 
        message.channel.send("https://i.imgur.com/InykM20.jpg"); 
      break;
       case 8:
	konaMessage = "Kona feels concerned about her most recent experience outside. Deep inside, you can feel her stress for doggo mom's veredict...  \n"
        message.channel.send(konaMessage + " *I chased a bag into a hedgerow once. The hedgerow bit my nose. Does the hedgerow think I am a bad dog? But mom always says I am a good dog. Can one be both a good and bad dog at the same time? Maybe there are many facets to oneself, but the important one is that you feel like you are a good dog. If you can feel like that, no hedgerow can make you feel like a bad dog.*"); 
        message.channel.send("https://i.imgur.com/pq1cbKQ.jpg"); 
      break;
       case 9:
	konaMessage = "Kona, Maggie and Doggo Mom are posing for the camera for a really cute picture! Words cannot express Kona's emotions right now...excluding her massive despair for being stuck in a car for a couple hours..."
        message.channel.send(konaMessage); 
        message.channel.send("https://i.imgur.com/uvJPqjM.jpg"); 
      break;   
       default: message.channel.send("Something happened...Is this the end? Why did the command fail? What happened to Kona's wisdom? Why is Maggie fat? Kona has so many questions...");
        
    }
    }
  }
)


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
*/
client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!gay")) { 
            message.channel.send("Hah...GAAAAAAAAAAAAAAAAAYY!");
            message.channel.send("https://i.kym-cdn.com/photos/images/original/000/286/095/be7.gif");
  }
})
/*
//========= !roast + mentioned user ===========
//first roast dictionary
var roast1 = ["your ass must be pretty jealous of all the shit that comes out of your mouth",
			  "if you're waiting for me to care, I hope you brought something to eat, ‘cause it's gonna be a really long time",
			  "sometimes it's better to keep your mouth shut and give the impression that you're stupid than open it and remove all doubt",
			  "I’m trying my absolute hardest to see things from your perspective, but I just can’t get my head that far up my ass",
			  "I don’t know what your problem is, but I’m guessing it’s hard to pronounce",
			  "everyone’s entitled to act stupid once in awhile, but you really abuse the privilege",
			  "are you constipated? I ask because I’m worried about how full of shit you are",
			  "do you ever wonder what life would be like if you’d gotten enough oxygen at birth",
			  "were you born on the highway? That is where most accidents happen",
			  "the only way you’ll ever get laid is if you crawl up a chicken’s ass and wait",
			  "if ignorance is bliss, you must be the happiest person on the planet",
			  "there are some remarkably dumb people in this world. Thanks for helping me understand that",
              "I was pro life. Then I met you",
			  "whenever we hang out, I remember that God really does have a sense of humor",
			  "I was hoping for a battle of wits but it would be wrong to attack someone who’s totally unarmed",
			  "I’d tell you how I really feel, but I wasn’t born with enough middle fingers to express myself in this case",
			  "I’d tell you to go fuck yourself, but that would be cruel and unusual punishment",
			  "your family tree must be a cactus ‘cause you’re all a bunch of pricks",
			  "I was going to give you a nasty look but I see that you’ve already got one",
			  "Earth is full. Go home",
			  "I believed in evolution until I met you",
			  "it’s a shame you can’t Photoshop your personality",
			  "take a deep breath and then hold it for about thirty minutes",
			  "jealousy is a disease, so get well soon"
			  ];

//second roast dictionary
var roast2 = ["don’t you get tired of putting make up on two faces every morning?",
			  "remember when I asked for your opinion? Me neither",
			  "I’m not a proctologist, but I know an asshole when I see one.", 
			  "do yourself a favor and ignore anyone who tells you to be yourself. Bad idea in your case",
			  "do your parents even realize they’re living proof that two wrongs don’t make a right?",
			  "remember that time I said I thought you were cool? I lied",
			  "I can’t help imagining how much awesomer the world would be if your dad had just pulled out",
              "please, save your breath. You’ll probably need it to blow up your next date",
			  "good story, but in what chapter do you shut the fuck up?",
			  "it’s kind of hilarious watching you try to fit your entire vocabulary into one sentence",
			  "you always bring me so much joy as soon as you go offline on Discord",
			  "stupidity’s not a crime, so feel free to go nuts",
			  "people like you are the reason I’m on medication",
			  "if I threw a stick, you’d leave, right?",
			  "my business is my business. Unless you’re a thong, get out of my ass",
			  "I don’t sugarcoat shit. I’m not Willy Wonka",
			  "you have more faces than Mount Rushmore",
			  "maybe you should eat make-up so you’ll be pretty on the inside too",
			  "my middle finger gets a boner every time I see you",
			  "whoever told you to be yourself gave you really bad advice",
			  "where’s your off button?"
			   ];

			   
var linkWord = ["By the way...", "Also...", "Oh yeah...", "In fact...", "As a matter of fact...", "Actually...", "In case you weren't aware..." ];

			   			   
var roast1Index = roast1.length - 1;
var roast2Index = roast2.length - 1;
var linkWordIndex = linkWord.length - 1;


client.on ("message", message =>{
  //Check if the command is being called.
  if(message.content.startsWith("!sassypantsbiatch")) { 
   
    //Check if the message has a mention in it.
    if(message.mentions.users.first()) { 
          //Search for that specific user ID in the Discord channel list and construct the message.
          let user = message.mentions.users.first();
          //Message Structure: "Hey, ____(Discord User), Roast 1. By the way, 2." 
          message.channel.send("Hey, " + user + ", " + roast1[Math.floor((Math.random()*roast1Index))] 
                               + ". " + linkWord[Math.floor((Math.random()*linkWordIndex))] 
                               + roast2[Math.floor((Math.random()*roast2Index))] 
                               + ".");
                                       } 
    else {
      //Throws an exception for not providing a correct User ID.
          message.reply("Provide a valid Discord username while using this command, you fool."); //Reply with a mention saying "Invalid user."
    }  
    }
  }
)
*/
/*
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
