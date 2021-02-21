//Dbd.js tuto

const dbd = require("dbd.js") 

 

const bot = new dbd.Bot({ 

token: "Nzg0NDQzMjEyMzYyMTU0MDM0.X8pXrA.WcOMypaiwwyK06OYfRFnn__gdOA", 

prefix: "$getServerVar[prefix]" 

}) 

 bot.status({
  text: "hydra birthday on March 1st",
  type: "WATCHING",
  time: 12
})

bot.onMessage() 

bot.command({
name: "ping",
code: `pong :ping_pong: \`$ping\` ms`
})


bot.command({ 

name: "<@784443212362154034>", 

code: `$title[Bot Name] 

$description[**Hi $username my prefix is** \`$getServerVar[prefix]\` 

**You can type** \`$getServerVar[prefix]help\` **for more info**] 

$color[RANDOM]`, 

nonPrefixed: true 

}) 

 bot.command({
   name: "setav",
   code: `$setBotAvatar[$message] av set
  $onlyForIDs[752496117144485938;this is only for owner] `
 })

bot.command({ 

name: "<@!784443212362154034>", 

code: `$title[Bot Name] 

$description[**Hi $username my prefix is** \`$getServerVar[prefix]\` 

**You can type** \`$getServerVar[prefix]help\` **for more info**] 

$color[RANDOM]`, 

nonPrefixed: true 

})



//custom prefix\\
bot.command({ 

name: "setprefix", 

aliases: ['changeprefix', 'prefix'], 

code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif] 

$description[**Done, my new prefix is** \`$message\`] 

$color[RANDOM] 

$setServerVar[prefix;$message] 

$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`] 

$onlyPerms[admin;$customEmoji[Rufy] **You dont have** \`ADMIN\` **perms**]` 

}) 

 

bot.variables({ 

prefix: "-" ,
rch: "", 

rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}", 

lvl: "0", 

exp: "0", 

rexp: "40", 

rsystem: "0",

Bank: " 0",

Balance: "0",

ccmd: "", 

cdes: "",

crime: ""



})

//help.js\\
bot.command({
name: "help",
code: `$title[HELP MENU]
$addField[$customEmoji[flyingmoney] ECONOMY;\`work , crime  , leaderboard , withdraw , deposite , balance\`]
$addField[$customEmoji[akjsc] LEVEL SYSTEM; \`setrank , resetrank , setrankmsg , rank \`]
$addField[$customEmoji[music] MUSIC ; \`play , stop , pause , resume , skip , skipTo , np , loop , volume , join\`]
`})



//custom commands\\
bot.command({ 

name: "add-cmd", 

code: ` 

$setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]] 

$setservervar[cdes;$getservervar[cdes]$messageslice[1;10]/] 

Successfully added $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] to the commands list, type \`$getservervar[prefix]cmd-list\` to see all available commands 

$onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;{description:Command \`$tolowercase[$message[1]]\` is available in the command list}{color:ff2050}] 

$textsplit[$getservervar[ccmd];/] 

$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}] 

$argscheck[>2;{description:Correct use \n\`\`\`\n$getservervar[prefix]add-cmd <trigger> <response>\n\`\`\`}{color:ff2050}] 

$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}] 

` 

}) 

 

 

bot.command({ 

name: "del-cmd", 

code: ` 

$setservervar[ccmd;$replacetext[$getservervar[ccmd];$advancedtextsplit[$getservervar[ccmd];/;$findtextsplitindex[$tolowercase[$message]]]/;]] 

$setservervar[cdes;$replacetext[$getservervar[cdes];$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]/;]] 

Successfully cleared command $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] 

$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;{description:Command \`$tolowercase[$message]\` not available in the command list}{color:ff2050}] 

$textsplit[$getservervar[ccmd];/] 

$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}] 

$argscheck[>1;{description:Correct use \n\`\`\`\n$getservervar[prefix]del-cmd <trigger>\n\`\`\`}{color:ff2050}] 

$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}] 

` 

})  

 

bot.command({ 

name: "cmd-list", 

code: ` 

$title[**__Custom Commands__**] 

$color[RANDOM] 

$thumbnail[$servericon] 

$description[\`$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]\`] 

$addtimestamp 

$onlyif[$gettextsplitlength>=2;{description:There are no custom commands on the server \`$servername\`}{color:ff2050}] 

$textsplit[$getservervar[ccmd];/]  

` 

})  

 

bot.command({ 

name: "$alwaysExecute", 

code: ` 

$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]] 

$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;] 

$onlyif[$isbot[$authorid]==false;] 

$textsplit[$getservervar[ccmd];/]  

` 

}) 




//moderation\\
bot.command({
name: "clear",
code: `$clear[$message] I deleted $message message.
$deleteIn[3s]
$onlyPerms[managemessages;You need a manage messages perm.]
$onlyBotPerms[managemessages;I not have manage messages perm.]
$suppressErrors[You need to write a number.]`
})

bot.command({
 name:"ban",
 code: `
 $author[🌸 Banned successfully]
 $addField[About:;
Reason:
> $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]
Date:
> $replaceText[$advancedTextSplit[$parseDate[$dateStamp;date];$advancedTextSplit[$parseDate[$dateStamp;date]; ;5];1];$advancedTextSplit[$parseDate[$dateStamp;date]; ;1] ;]
]
$addField[User information;
$userTag[$findUser[$message[1]]] - $findUser[$message[1]]]
 $addField[Moderator;
$userTag - $authorID]
 $thumbnail[$userAvatar[$findUser[$message[1]]]]
 $addTimestamp
 $ban[$findUser[$message[1]];$userTag: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]];7]
 $if[$memberExists[$findUser[$message[1]]]==true]
 $onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];⛔ - To use this you need to have a higher rank than the mentioned user.]
 $onlyIf[$findUser[$message[1]]!=$authorID;⛔ - You can't ban yourself (Or else, I couldn't find that user.)]
 $onlyIf[$findUser[$message[1]]!=$clientID;⛔ - I can't ban myself, that's illegal]
 $onlyIf[$findUser[$message[1]]!=$ownerID;⛔ - I can't ban the owner of the server]
 $elseIf[$memberExists[$findUser[$message[1]]]==false]
 $onlyIf[$findUser[$message[1]]!=$authorID;⛔ - You can't ban yourself (Or else, I couldn't find that user.)]
 $endelseIf
 $endif
 $onlyIf[$isBanned[$findUser[$message[1]]]==false;⛔ - This user has already been banned on this server.]
 $onlyIf[$message!=;⛔ - Please specify the user you want to ban. Correct usage: \`$getServerVar[prefix]ban <@User> [Reason\\]\`]
 $onlyPerms[ban;⛔ - To use this you require the \`BAN_MEMBERS\` permission.]
 $onlyBotPerms[ban;⛔ - I don't have enough perms to execute this command. Permissions missing: \`BAN_MEMBERS\`]
 $botTyping
`
})

bot.command({
 name: "unban",
 code: `$unban[$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]
$username[$message[1]] Has Been Unbanned!
$onlyBotPerms[ban;I need ban permission to unban this user]
$onlyIf[$isBanned[$message[1]]==true;User Is Not Banned]
$argsCheck[>1;Please Provide User ID To Unban!]


$onlyPerms[ban;You need ban permission]
`});

bot.command({
 name: "kick",
 code: `$kick[$mentioned[1]]
$username[$mentioned[1]] has been Kicked ✅
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher or same as me on role position]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
$onlyIf[$mentioned[1]!=$authorID;You can't Kick yourself :3 ]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$onlyPerms[kick;{title:Missing Permissions}{color:RANDOM}{description:You don't have \`kick\` permissions to use this command}]
$suppressErrors[x Something Error | Try Again Later]`
 })


//rank system\\
bot.command({ 

name: "setrank", 

usage: "setrank <channel>", 

description: "settings the levelup channel", 

code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>] 

$color[01ff00] 

$setServerVar[rch;$mentionedChannels[1;yes]] 

$setServerVar[rsystem;1] 

$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}] 

$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}] 

$cooldown[5s;Please wait **%time%**]` 

}) 

 

bot.command({ 

name: "resetrank", 

usage: "resetrank", 

description: "reset the levelup channel", 

code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>] 

$color[01ff00] 

$setServerVar[rch;] 

$setServerVar[rmsg;$getVar[rmsg]] 

$setServerVar[rsystem;0] 

$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}] 

$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}] 

$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}] 

$cooldown[5s;Please wait **%time%**]` 

}) 

 

bot.command({ 

name: "$alwaysExecute", 

code: `$useChannel[$getServerVar[rch]] 

$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]] 

$setUserVar[lvl;$sum[$getUserVar[lvl];1]] 

$setUserVar[rexp;$multi[$getUserVar[rexp];2]] 

$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];] 

$onlyForServers[$guildID;]` 

}) 

 

bot.command({ 

name: "$alwaysExecute", 

code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]] 

$onlyIf[$getServerVar[rsystem]>=1;] 

$onlyForServers[$guildID;]` 

}) 

 

bot.awaitedCommand({ 

name: "errorrank", 

code: `$setServerVar[rch;] 

$onlyForServers[$guildID;]` 

}) 

 

bot.command({ 

name: "setrankmsg", 

usage: "setrankmsg <message>", 

description: "message for the leveled up", 

code: `$description[You have been setted the message to: 

\`$message\`] 

$color[01ff00] 

$setServerVar[rmsg;$message] 

$onlyIf[$message!=;You can also use this variables: 

\`\`\` 

{user.tag} = $userTag 

{user.mention} = <@$authorID> 

{level} = 1 

{exp} = 25 

\`\`\` 

Current msg is: 

\`$getServerVar[rmsg]\`] 

$onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}] 

$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}] 

$cooldown[5s;Please wait **%time%**]` 

}) 

 

bot.command({ 

name: "rank", 

aliases: ["level"], 

usage: "rank (user)", 

description: "see the current level and exp", 

code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true] 

$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}] 

$cooldown[5s;]` 

})

//music system\\
bot.command({
 name: "stop",
 code: `Stopped playing $songInfo[title]. $stopSong
$onlyIf[$voiceID!=;To stop music, please join a VC.]`
});

bot.command({
 name: "skip",
 code: `Skipped the song. $skipSong
$onlyIf[$voiceID!=;To skip music, please join a VC.]`
});

bot.command({
 name: "pause",
 code: `Successfully paused the song. $pauseSong
$onlyIf[$voiceID!=;To pause music, please join a VC.]`
});

bot.command({
 name: "resume",
 code: `$resumeSong Successfully resumed the song.
$onlyIf[$voiceID!=;To resume music, please join a VC.]`
});

bot.command({
 name: "play",
 code: `$title[$customEmoji[music] ADDED TO QUEUE]
$description[:notes: IN QUEUE :- **$playSong[$message;2000d;yes;No song found.]**]
$thumbnail[$songInfo[thumbnail]]
$footer[Requested by $username]
$color[RANDOM]
$onlyIf[$voiceID!=;To play music, please join a VC.]`
})

bot.command({
 name: "join",
 code: `$sendMessage[**Success joined voice channel \`$channelName[$voiceID[$authorID]]\` and bound page_facing_up to \`$channelName[$channelID]\`;no]
$clearSongQueue
$pauseSong
$description[$playSong[random;0s;no;error]]
$onlyIf[$voiceID[$clientID]==;{execute:music1}]
$onlyIf[$voiceID!=;{description:You must join voice channel first}{color:RED}]
$suppressErrors`})
bot.awaitedCommand({
 name: "music1",
 code:`$description[I still playing in <#$voiceID[$clientID]>]
$color[RED]`})
//LEAVE COMMANDS
bot.command({
 name: "leave",
 code:`$sendMessage[Success leave voice channel \`$channelName[$voiceID[$authorID]]\`**;no]
$stopSong
$description[$playSong[random;0s;no;error]]
$onlyIf[$voiceID[$clientID]==;{execute:music2}]
$onlyIf[$voiceID[$clientID]!=;{description:Im not in voice channel}{color:RED}]
$onlyIf[$voiceID!=;{description:You must join voice channel first}{color:RED}]
$suppressErrors`})
bot.awaitedCommand({
 name: "music2",
 code:`$description[I still playing in <#$voiceID[$clientID]>]
$color[RED]`
}) 

bot.command({
name: "jump",
code: `$skipTo[$message]
$description[$customEmoji[checkmark] successfully jumped to no-$message in queue]
$argsCheck[>1; pls mention the number to jump]
$onlyIf[$voiceID!=;{description:You must join voice channel first}{color:RED}]
$suppressErrors
`})

bot.command({
 name: "skip",
 code: `$description[You skipped the song that was being played]
$skipSong
$onlyIf[$voiceID!=;You need to be in a voice channel to skip]
$thumbnail[https://cdn.discordapp.com/attachments/787838822766477362/788994701923581972/a41520872ddab51613688448c74294093f382cdc.png]
`})

//economy system\\
bot.command({
 name: 
 "work",
 code: 
 `$author[$username;$authorAvatar]
$description[You Worked As A $randomText[Chef;Janitor;Receptionist;Waiter;Bathroom Attendant;The DJ;Homeless Beggar;Taxi Driver;Bus Driver] And Earned $$random[30;$replaceText[$replaceText[$checkCondition[$authorID==501401419367055360];true;1084972];false;320]] In Cash!]
$color[ORANGE]
$setUserVar[Balance;$sum[$getUserVar[Balance];$random[30;$replaceText[$replaceText[$checkCondition[$authorID==501401419367055360];true;1084972];false;320]]]]
$cooldown[$replaceText[$replaceText[$checkCondition[$authorID==501401419367055360];true;1s];false;2m];{description:Your Tired And You Have To Wait %time% Before Working Again!} {color:RED}]
`})

bot.command({
 name: 
 "balance",
 aliases: 
 ["bal","wallet"],
 code: 
`
$author[$username;$authorAvatar]
$addField[📊 Networth;$$sum[$getUserVar[Balance];$getUserVar[Bank]]]
$addField[🏦 Bank;$$getUserVar[Bank]]
$addField[💵 Cash;$$getUserVar[Balance]]
$footer[Checking Account Balance For $username]
$color[RANDOM]
`
})

bot.command({
	name: 
	 "deposite",
	aliases: ["dep","save"],
	code: 
`
$setUserVar[Balance;$sub[$getUserVar[Balance];$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Balance]];false;$message[1]]]]
$setUserVar[Bank;$sum[$getUserVar[Bank];$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Balance]];false;$message[1]]]]

$author[$username;$authorAvatar]
$description[Successfully Deposited $$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Balance]];false;$message[1]] Cash Into The Bank!]
$color[GREEN]

$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Balance]];false;$message[1]]]==true; {author:$username, Thats Not A Number!:$authorAvatar} {color:RED} ]
$onlyIf[$getUserVar[Balance]>0; {author:$username You Dont Have Cash!:$authorAvatar} {color:RED} ]
`
})

bot.command({
	name: 
	 "withdraw",
	aliases: ["with","spend"],
	code: 
`
$setUserVar[Bank;$sub[$getUserVar[Bank];$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Bank]];false;$message[1]]]]
$setUserVar[Balance;$sum[$getUserVar[Balance];$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Bank]];false;$message[1]]]]

$author[$username;$authorAvatar]
$description[Successfully Withdrew $$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Bank]];false;$message[1]] Cash From The Bank!]
$color[GREEN]

$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Bank]];false;$message[1]]]==true; {author:$username, Thats Not A Number!:$authorAvatar} {color:RED} ]
$onlyIf[$getUserVar[Bank]>0; {author:$username You Dont Have Cash!:$authorAvatar} {color:RED} ]
`
})

bot.command({
name:"crime",
code:`
$author[$username;$userAvatar]
$onlyif[$getUserVar[crime]>0;{execute:Lost}]
$onlyif[$getUserVar[crime]<0;{execute:Won}]
$setUserVar[crime;$random[-400;1000]]
$cooldown[$replaceText[$replaceText[$checkCondition[$authorID==501401419367055360];true;1s];false;2m];{description:Your Tired And You Have To Wait %time% Before Doin Crimes Again!} {color:RED}]`
})

bot.awaitedCommand({
name:"Lost",
code:`
$channelsendmessage[$channelid;{description:You Failed At Doin a Crime And Lost $getUserVar[crime] | Your Balance Now Is $getUserVar[Balance]}] 
$setUserVar[Balance;$sum[$getUservar[Balance];$getuservar[crime]]]`})

bot.awaitedCommand({
name:"Won",
code:`
$channelsendmessage[$channelid;{description:You $randomText[Hacked Steam;Robbed MC donalds;Robbed a person;Hacked EA;Cracked game;Hacked donations' site;Hacked roblox;Made exploit for roblox;Hacked walmart] And Earned $getUserVar[crime] | Your Balance Now Is $getUserVar[Balance]}] 
$setUserVar[Balance;$sum[$getUservar[Balance];$getuservar[crime]]]`})



//info commands\\
bot.command({
 name: "avatar",
 aliases: ['av', 'pfp'],
 code: `$color[BLUE]
 $title[$username[$findUser[$message]]'s Avatar;$userAvatar[$findUser[$message]]]
 $image[$userAvatar[$findUser[$message]]]
 $addTimestamp`
})


//fun images \\
bot.command({
 name: "stonks",
 code: `
 $image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1]][&notstonks=BOOL]]
 $color[RANDOM]`
})

/*Slap*/
bot.command({
 name: "slap",
 code: `
 $image[https://vacefron.nl/api/batmanslap?text1=LEAF&text2=BEST&batman=$userAvatar&robin=$userAvatar[$mentioned[1]]] $color[RANDOM]`
})

/*Firsttime*/

bot.command({
 name: "firsttime",
 code: `
 $image[https://vacefron.nl/api/firsttime?user=$userAvatar[$mentioned[1]]]
 $color[RANDOM]`
})

bot.command({
name: "meme",
code: `$color[RANDOM]
$title[Here is a cool meme]
$image[https://ctk-api.herokuapp.com/meme/$random[1;500]]`
})