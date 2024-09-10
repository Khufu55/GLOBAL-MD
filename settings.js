

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "قناتي : خوفو ص المزعجين" //ur yt chanel name
global.socialm = "خش كلمني ياض 😚💗." //ur github or insta name
global.location = "مصر" //ur location

//new
global.botname = ' 𝑩𝑶𝑻 𝑲𝑯𝑼𝑭𝑼' //ur bot name
global.ownernumber = ['201121968769'] //ur owner number, dont add more than one
global.ownername = '𝑲𝑯𝑼𝑭𝑼' //ur owner name
global.namegroupp =  'قناه البوت'//ur owner name
global.websitex = "https://youtube.com/@khufualmoz3g974?si=BGFVL5IIQ1gSBFvi"
global.wagc = "https://chat.whatsapp.com/GsbU5axJil5LbLlCKJkY2S"
global.themeemoji = '🪀'
global.wm = "خوفو ص المزعجين 😍"
global.botscript = 'https://chat.whatsapp.com/GsbU5axJil5LbLlCKJkY2S' //script link
global.packname = "𝑲𝑯𝑼𝑭𝑼 𝑩𝑶𝑻"
global.author = "خوفو ص المزعجين 😍\n\n+201121968769"
global.creator = "201121968769@s.whatsapp.net"
global.xprefix = ''
global.premium = ["201121968769"] // Premium User

//channel id
global.xchannel = {
	jid: '120363336130508859@newsletter'
	}

//bot sett
global.typemenu = 'v1' // menu type 'v1' => 'v12'
global.typereply = 'v3' // reply type 'v1' => 'v4'
global.khufumennu = 'v12' // menu type 'v1' => 'v12'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['↜','⇐','✧','⇦','⇇','♤','♡']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'حدث مشكله!',
	nsfw: 'لازم الادمن يفعلها',
	done: 'ضن يغالي 😆'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
