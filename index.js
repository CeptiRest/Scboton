require('./src/config')
const { default: CeptiConnect, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const fs = require('fs')
let setting = JSON.parse(fs.readFileSync('./src/setting.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const { state, saveState } = useSingleFileAuthState(`./${setting.sessionName}.json`)
const pino = require('pino')
const chalk = require('chalk')
const FileType = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const moment = require('moment-timezone')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { color, bgcolor } = require("./lib/color")
const getVersionWaweb = () => {
    let version
    try {
        let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
        version = [a.currentVersion.replace(/[.]/g, ', ')]
    } catch {
        version = [2, 2204, 13]
    }
    return version
}

async function startCepti() {
    const Cepti = CeptiConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Ceptibotz Multi Device','Safari','1.0.0'],
        auth: state,
        version: getVersionWaweb() || [2, 2204, 13]
    })
    console.log(color('[CEPTIBOTZ MD]', 'cyan'), color(`
CEPTIBOTZ`, 'red'))
console.log(color('[CEPTIBOTZ MD]', 'cyan'), color('OWNER SEDANG ONLINE SEKARANG!', 'yellow'))

	console.log(color('[CEPTIBOTZ MD]', 'cyan'), color('SELAMAT DATANG OWNER ><', 'yellow'))
	
	console.log(color('======================', 'fuchsia'),color('\n[CEPTINTZ MD V1]', 'pink'),color('\nTHANKS TO: \n➸ ALLAH SWT\n➸ Dika Ardnt.\nPenyedia scrape dan module lainnya', 'yellow'),color('\n======================', 'fuchsia'))
	console.log(color('\nADA SARAN ATAU MASUKAN WA : +6288293100977', 'red'))
    store.bind(Cepti.ev)

    Cepti.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await Cepti.sendContact(callerId, setting.owner1)
    Cepti.sendMessage(callerId, { text: `"[ ❓ ] CALL DETECTED\nAnda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block"`}, { quoted : pa7rick })
    await sleep(8000)
    await Cepti.updateBlockStatus(callerId, "block")
    }
    })
    Cepti.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!Cepti.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(Cepti, mek, store)
        require("./Cepti")(Cepti, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)
    Cepti.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await Cepti.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await Cepti.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await Cepti.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
let nama = await Cepti.getName(num)
memb = metadata.participants.length
const ppusernya = await getBuffer(ppuser)
if (anu.action == 'add') {
const Ceptibuffer = await getBuffer(ppuser)
let CeptiName = num
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const xmembers = metadata.participants.length
let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: ppusernya, surface: 200, message: `${metadata.subject}`, orderTitle: 'Cepti', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
Ceptibody = `*Welcome @${CeptiName.split("@")[0]}*\n\nIntro dulu ya \nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah dan jangan lupa isi\ndan ikuti Rules Group`
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'WELCOME'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./cepti/Ceptibotz.xlsx'),
mimetype: docs,
jpegThumbnail:ppusernya,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: Ceptibody,
footer: `© ${setting.botName} bot`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `WELCOME`,
body: `Member ke : ${xmembers}`,
mediaType:2,
thumbnail: ppusernya,
sourceUrl: `https://www.instagram.com/cepti289`,
mediaUrl: `https://www.instagram.com/cepti289`
}}
}
Cepti.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                } else if (anu.action == 'remove') {
const Ceptibuffer = await getBuffer(ppuser)
let CeptiName = num
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const xmembers = metadata.participants.length
let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: ppusernya, surface: 200, message: `${metadata.subject}`, orderTitle: 'Cepti', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
Ceptibody = `*Good Bye @${CeptiName.split("@")[0]}*\n\n*Semoga kamu bahagia di sana*`
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'GOOD BYE'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./cepti/Ceptibotz.xlsx'),
mimetype: docs,
jpegThumbnail:ppusernya,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: Ceptibody,
footer: `© ${setting.botName} bot`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `GOOD BYE`,
body: `Member ke : ${xmembers}`,
mediaType:2,
thumbnail: ppusernya,
sourceUrl: `https://www.instagram.com/cepti289`,
mediaUrl: `https://www.instagram.com/cepti289`
}}
}
Cepti.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
}
            }
        } catch (err) {
            console.log(err)
        }
    })
	
    // Setting
    Cepti.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    Cepti.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Cepti.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    Cepti.getName = (jid, withoutContact  = false) => {
        id = Cepti.decodeJid(jid)
        withoutContact = Cepti.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = Cepti.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === Cepti.decodeJid(Cepti.user.id) ?
            Cepti.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    Cepti.setStatus = (status) => {
        Cepti.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
    Cepti.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await Cepti.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Cepti.getName(i + '@s.whatsapp.net')}\nFN:${setting.ownerName}\nORG:${setting.deskripsi};\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:yukishima737@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/cepti_gans\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Japan;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	Cepti.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    Cepti.public = true

    Cepti.serializeM = (m) => smsg(Cepti, m, store)

    Cepti.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startCepti() : console.log('Koneksi Terputus...')
        }
        console.log('Koneksi Terhubung...', update)
    })

    Cepti.ev.on('creds.update', saveState)

    // Add Other
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    Cepti.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: Cepti.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Cepti.relayMessage(jid, template.message, { messageId: template.key.id })
    }
        //send5butgif by xeon
        Cepti.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: Cepti.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Cepti.relayMessage(jid, template.message, { messageId: template.key.id })
    }
        //send5butvid by xeon
        Cepti.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: Cepti.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Cepti.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
    
    //send5butmsg by xeon
            Cepti.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        Cepti.sendMessage(jid, templateMessage)
        }
        Cepti.send5Loc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
               "hydratedContentText": text,
               "locationMessage": {
               "jpegThumbnail": img },
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Cepti.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    Cepti.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        Cepti.sendMessage(jid, listMes, { quoted: quoted })
        }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    Cepti.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        Cepti.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Cepti.sendText = (jid, text, quoted = '', options) => Cepti.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Cepti.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Cepti.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Cepti.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Cepti.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    Cepti.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Cepti.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Cepti.sendTextWithMentions = async (jid, text, quoted, options = {}) => Cepti.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Cepti.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await Cepti.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Cepti.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await Cepti.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    Cepti.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    Cepti.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Cepti.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await Cepti.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await Cepti.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    Cepti.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await Cepti.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    Cepti.cMod = (jid, copy, text = '', sender = Cepti.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === Cepti.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    Cepti.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return Cepti
}

startCepti()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
