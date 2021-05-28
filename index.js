//Tq udh make jgn lupa cantumkan author :'
//jgn cuma makenya doang sc kiddie Lo

//npm
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const canvass = require('canvacord')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')

//waktu
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const date = new Date().toLocaleDateString()
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')

//json file
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))

//Config
const { covidindo } = require("./config/covidindo.js")
const { covidworld } = require("./config/covidworld.js")
const { cnn } = require("./config/cnn.js")
const { Gempa } = require("./config/gempa.js");
const { jagoKata } = require("./config/jagokata.js");
const { herolist } = require("./config/herolist.js")
const { herodetails } = require("./config/herodetail.js")
const { onGoing } = require("./config/otakudesu.js");
const { wikiSearch } = require("./config/wiki.js");

//wa connect
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		ChatModification,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const sanz = new WAConnection()
//=================================================//
prefix = 'z'
hit_today = []
blocked = []
banChats = false
offline = false
targetpc = '6289656439589'
owner = '6289656439589'
fake = 'SA-BOT'
numbernye = '0'
waktu = '-'
alasan = '-'
//=================================================//
async function starts() {
	sanz.logger.level = 'warn'
	console.log('>', '[',color('INGFO','blue'),']','Menglogin kawan...')
	sanz.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./session.json') && sanz.loadAuthInfo('./session.json')
	sanz.on('connecting', () => {
	console.log(color('> [ INGFO ]', 'white'), color('Connecting...'))
	})
	sanz.on('open', () => {
	console.log(color('> [ INGFO ]', 'white'), color('Connected'))
	})
		await sanz.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./session.json', JSON.stringify(sanz.base64EncodedAuthInfo(), null, '\t'))

//Welkom
sanz.on('group-participants-update', async (anu) => {
		var member = anu.participants
        for (var x of member) {
		try {
			var from = anu.jid
			const mdata = await sanz.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add' && { public :true}) {
				num = anu.participants[0]
				try {
					ppimg = await sanz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Welcome @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				sanz.sendMessage(from, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove' && { public: true }) {
				num = anu.participants[0]
				try {
					ppimg = await sanz.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonaraaa @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				sanz.sendMessage(from, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch {
			continue
		}
		}
	})
}
starts()
sanz.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        sanz.sendMessage(callerId, "Auto block system, don't call please", MessageType.text)
        await sanz.blockUser(callerId, "add")
})
	// Chat Update
sanz.on('chat-update', async (mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		hit_today.push(command)
        const arg = budy.slice(command.length + 1, budy.length)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const meNumber = sanz.user.jid
        const botNumber = sanz.user.jid.split("@")[0]
        const ownerNumber = ['6289656439589@s.whatsapp.net'] //sanz owner
//=======++=====
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? sanz.user.jid : isGroup ? mek.participant : mek.key.remoteJid
        const senderNumber = sender.split("@")[0]
        const isMe = senderNumber == botNumber
        const isOwner = senderNumber == ownerNumber || senderNumber == botNumber || ownerNumber.includes(senderNumber)
//========++====
        const totalchat = await sanz.chats.all()
        const groupMetadata = isGroup ? await sanz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? sanz.user.jid : sanz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? sanz.user.name : conts.notify || conts.vname || conts.name || '-'
       
        //MESS
        
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				me: 'This Command Only For Saia..',
				group: 'Khusus grup bg',
				admin: 'Only Admin..',
				Badmin: 'Saia tidak admin :('
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            sanz.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            sanz.sendMessage(hehe, teks, text, {sendEphemeral: true})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? sanz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : sanz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr }, sendEphemeral: true })
        }
        
        //FAKEH
        const fakekontak = (teks) => {
        sanz.sendMessage(from, teks, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {})},message: {'contactMessage': {'displayName': `Hai ${pushname}`,'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu},;;;\nFN:${ucapanWaktu},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}, sendEphemeral:true})
        }

        const fakethumb = (teks, yes) => {
            sanz.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            sanz.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}, ${ucapanWaktu}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" }}, contextInfo: { "forwardingScore": 999, "isForwarded": true }}, sendEphemeral: true})
        }
        const fakegroup = (teks) => {
            sanz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hai ${pushname}, ${ucapanWaktu}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const faketoko = (teks) => {
        sanz.sendMessage(from, teks, text, {quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: {'productMessage': {'product': {'productImage':{'mimetype': 'image/jpeg','jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')},'title': `Hai ${pushname}, ${ucapanWaktu}`,'productImageCount': 9999},'businessOwnerJid': `0@s.whatsapp.net`}}}})
        }
        const faketokoforwaded = (teks) => {
        anu = {
        key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)
					},
					"title": `Hai ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
        sanz.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        sanz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    sanz.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            sanz.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        sanz.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    //> Level <
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
			//[-- function level bar --]
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
			/*[-- function rank --]*/
			const levelRole = getLevelingLevel(sender)
   	     var role = 'Trainee'
   	     if (levelRole <= 3) {
   	         role = 'Warrior I'
   	     } else if (levelRole <= 5) {
   	         role = 'Warrior II'
   	     } else if (levelRole <= 7) {
   	         role = 'Warrior III'
   	     } else if (levelRole <= 8) {
   	         role = 'Warrior IV'
   	     } else if (levelRole <= 9) {
   	         role = 'Elit I'
   	     } else if (levelRole <= 10) {
   	         role = 'Elit II'
   	     } else if (levelRole <= 11) {
   	         role = 'Elit II'
   	     } else if (levelRole <= 12) {
   	         role = 'Elit III'
   	     } else if (levelRole <= 13) {
   	         role = 'Master I'
   	     } else if (levelRole <= 14) {
   	         role = 'Master II'
   	     } else if (levelRole <= 14) {
   	         role = 'Master III'
   	     } else if (levelRole <= 15) {
   	         role = 'King Master I'
   	     } else if (levelRole <= 16) {
   	         role = 'King Master II'
   	     } else if (levelRole <= 17) {
   	         role = 'King Master III'
   	     } else if (levelRole <= 18) {
   	         role = 'Legend I'
   	     } else if (levelRole <= 19) {
   	         role = 'Legend II'
   	     } else if (levelRole <= 20) {
   	         role = 'Legend III'
   	     } else if (levelRole <= 21) {
   	         role = 'Glory I'
   	     } else if (levelRole <= 22) {
   	         role = 'Glory II'
   	     } else if (levelRole <= 23) {
   	         role = 'Glory III'
   	     }
   //Function Level Up
const levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	fakekontak(`*「 CONGRATULATIONS 」*\n├  *Xp* : ${getLevelingXp(sender)}\n├ *Role*: ${role}\n└  *Level* : ${getLevel} > ${getLevelingLevel(sender)}`)
}
//Function Level
            if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await fakestatus(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
//=====================//      
         // Ucapan Waktu
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'Pagi Kawan👋'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi Kawan👋'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Siang Kawan👋'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Soree Kawan👋'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat petang👋'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam Kawan🌚'
        } else {
          ucapanWaktu = 'Selamat Malam🌚'
        }
        /**HARI**/
var date = new Date();

var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();

switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}

var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
//========================================================================================================================//
		colors = ['blue']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mEXECC\x1b[1;37m ]', time, color(command), 'from', color(sender.split('@')[0]))
     	if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mEXECC\x1b[1;37m ]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName))
//
		if (!mek.key.fromMe && banChats === true) return

//mengnunya
switch (command) {
  case 'menu':
  case 'help':
    let i = []
    let giid = []
    for (mem of totalchat){
      i.push(mem.jid)
    }
    for (id of i){
      if (id && id.includes('g.us')){
        giid.push(id)
      }
    }
    let timestampi = speed();
    let sepid = speed() - timestampi
    var { device_manufacturer, device_model, mcc, mnc, os_version, os_build_number, wa_version  } = sanz.user.phone
    anu = process.uptime()
    runtem = `${kyun(anu)}`
//
    var iduladha = new Date('2021','07','20').valueOf()
    tuidha = moment(iduladha - Date.now()).format('DD[:]HH[:]mm[:]ss')
    var menu = ` 
 Hai ${pushname} ${ucapanWaktu}

- *Road To Idul Adha✨*
- *${tuidha}*

- *${tampilTanggal}*

- *${jam} WIB*
- *${wita} WITA*
- *${wit} WIT*

- *Brand Hp :* ${device_manufacturer}
- *Device :* ${device_model}
- *RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
- *Android :* ${os_version}
- *Versi OS :* ${os_build_number}
- *MCC :* ${mcc}
- *MNC :* ${mnc}
- *Whatsapp Version* : ${wa_version}
- *Group Chat :* ${giid.length}
- *Personal Chat :* ${totalchat.length - giid.length}
- *Total Chat :* ${totalchat.length}
- *Speed :* ${sepid.toFixed(4)} Second
- *Runtime :* ${runtem}
- *Hit Today : ${hit_today.length}*
- Prefix : 「 ${prefix} 」

1. *${prefix}off*
To offline bot mode

2. *${prefix}on*
To online bot mode

3. *${prefix}status*
To view status in your chat

4. *${prefix}self*
To active self mode

5. *${prefix}public*
To active public mode

6. *${prefix}peson*
To active pesan sementara

7. *${prefix}pesoff*
To off pesan sementara

8. *${prefix}spam*
Spam text
Usage : ${prefix}spam message|10

9. *${prefix}mute*
To mute now chats

10. *${prefix}unmute*
To unmute this chat

11. *${prefix}delete*
To delete chat

12. *${prefix}setfake*
To set fakereply text in menu
Usage : ${prefix}setreply saia siapa

13. *${prefix}setfakeimg*
To set fake img
Usage : ${prefix}setfakeimg @tag image

14. *${prefix}setprefix*
To set prefix
Usage : ${prefix}setprefix afa

15. *${prefix}setthumb*
To set thumbnail
Usage : ${prefix}setthumb @tag image

16. *${prefix}settarget*
To set target fitnah pc
Usage : ${prefix}settarget @tag or number targets

17. *$* 
To terminal command
Usage : $ ls

18.  *>*
For eval
Usage : > mek

19. *${prefix}covidindo*
Get information covid Indonesia

20. *${prefix}covidworld*
Get information covid global world

21. *${prefix}cnn*
Get information cnn

22. *${prefix}infogempa*
Get information about gempa 

23. *${prefix}wikipedia*
To search wikipedia
Usage : ${prefix}wikipedia indonesia

25. *${prefix}get*
To screenshoot website
Usage : ${prefix}get google.com

26. *${prefix}revip*
To Reverse ip from domain or ip
Usage : ${prefix}get 8.8.8.8

27. *${prefix}avatar*
Get random image avatar 

28. *${prefix}loli*
Get random image loli 
 
29. *${prefix}waifu*
Get random image waifu

30. *${prefix}husbu*
Get random image husbu

31. *${prefix}otakuongoing*
Get Info About otakudesu OnGoing

32. *${prefix}image*
Get image from your search
Usage : ${prefix}image boruto

33. *${prefix}pinterest*
Get image from pinterest search
Usage : ${prefix}pinterest Kawai

34. *${prefix}anime*
Get random image anime

35. *${prefix}wallpaperanime*
Get random Image Wallpaper anime

36. *${prefix}nsfwavatar* 
Get random image nswf avatar

37. *${prefix}nekopoi* 
Get random gif image nekopoi 

38. *${prefix}pussy* 
Get random gif image anime pussy

39. *${prefix}pussyimage* 
Get random image pussy

40. *${prefix}feetg* 
Get random gif image feetg

41. *${prefix}bj* 
Get random gif image bj

42. *${prefix}ero* 
Get random image ero

43. *${prefix}erokemo* 
Get random image erokemo

44. *${prefix}eroyuri* 
Get random image eroyuri

45. *${prefix}tickle* 
Get random image tickle

46. *${prefix}feed*
Get random image feed 

47. *${prefix}kuni* 
Get random image kuni

48. *${prefix}femdom* 
Get random gif image femdom

49. *${prefix}futanari* 
Get random image futanari

50. *${prefix}les* 
Get random image les

51. *${prefix}trap* 
Get random image trap

52. *${prefix}pat* 
Get random gif image pat

53. *${prefix}boobs* 
Get random gif image boobs

54. *${prefix}blowjob* 
Get random image blowjob

55. *${prefix}hentai* 
Get random image hentai

56. *${prefix}hololewed* 
Get random image hololewed

57. *${prefix}lewd* 
Get random image lewd

58. *${prefix}lewdk* 
Get random image lewdk

59. *${prefix}lewdkemo* 
Get random image lewdkemo

60. *${prefix}goose* 
Get random image ghoose

61. *${prefix}solog* 
Get random image solog

62. *${prefix}yuri* 
Get random image boobs

63. *${prefix}anal* 
Get random gif image anal

64. *${prefix}pwankg* 
Get random gif image pwanpkg

65. *${prefix}eron* 
Get random image eron

66. *${prefix}kiss* 
Get random gif image boobs

67. *${prefix}keta* 
Get random image keta

68. *${prefix}cum* 
Get random gif image boobs

69. *${prefix}cumimage* 
Get random image boobs

70. *${prefix}oppai* 
Get random image boobs

71. *${prefix}holoero* 
Get random image boobs

72. *${prefix}sticker*
Convert image/gif to sticker
Usage : ${prefix}sticker @tag image

73. *${prefix}swm*
 Convert image/gif to sticker with watermark 
 Usage : ${prefix}swm author|packname 
 
74. *${prefix}take*
Convert image/gif to sticker with watermark 
 Usage : ${prefix}swm author|packname 

75. *${prefix}jagokata*
To suggestion kata for  life
Usage : ${prefix}jagokata saya

76. *${prefix}quotes*
To quote for  life
Usage : ${prefix}quotes kehidupan

77. *${prefix}fdeface*
To fake deface for show off 
 Usage : ${prefix}swm author|packname 
 
78. *${prefix}emoji*
Convert emoji to sticker
Usage : ${prefix}emoji 🗿

79. *${prefix}attp*
To teks maker gif sticker
Usage : ${prefix}attp saia siapa

80. *${prefix}toimg*
Convert sticker biasa to image
Usage : ${prefix}toimg @tag image sticker

81. *${prefix}tovid*
Convert sticker gif to video
Usage : ${prefix}tovid @tag gif sticker

82. *${prefix}tomp3*
Convert video to mp3
Usage : ${prefix}tomp3 @tag video

83. *${prefix}slow*
Convert video to slow duration
Usage : ${prefix}slow @tag video

84. *${prefix}fast* 
Convert video to fast duration
Usage : ${prefix}fast @tag video

85. *${prefix}reverse* 
Convert video to reverse
Usage : ${prefix}reverse @tag video

86. *${prefix}tourl*
Convert or Upload image to url
Usage : ${prefix}tourl @tag image

87. *${prefix}upswteks*
Upload story text from whatsapp me 
Usage : ${prefix}upswteks your message

88. *${prefix}upswimage*
Upload story image from whatsapp me 
Usage : ${prefix}upswimage your message

89. *${prefix}upswvideo*
Upload story video from whatsapp me 
Usage : ${prefix}video your message

90. *${prefix}herolist*
View info about list hero mobile legends

91. *${prefix}herodetail* 
View info about hero mobile legends
Usage : ${prefix}herodetail fanny

92. *${prefix}play*
Play music from youtube
Usage : ${prefix}play menepi

93. *${prefix}video*
Play video from youtube
Usage : ${prefix}video menepi

94. *${prefix}ytmp3*
Youtube to mp3 from link youtube
Usage : ${prefix}ytmp3 link

95. *${prefix}ytmp4*
Youtube to mp4 from link youtube
Usage : ${prefix}ytmp4 link

96. *${prefix}ytsearch*
Youtube search 
Usage : ${prefix}ytsearch menepi

97. *${prefix}ig*
Instagram downloader from link
Usage : ${prefix}ig link

98. *${prefix}igstalk*
Instagram stalker from user
Usage : ${prefix}igstalk sanzorez_

99. *${prefix}twitter*
Twitter downloader from link
Usage : ${prefix}twitter link

100. *${prefix}tiktok*
Tiktok downloader from link
Usage : ${prefix}tiktok link

101. *${prefix}tiktokaudio*
Tiktok sound downloader from link
Usage : ${prefix}tiktokaudio link

102. *${prefix}fb*
Facebook downloader from link
Usage : ${prefix}facebook link

103. *${prefix}brainly*
Brainly search for tugas
Usage : ${prefix}brainly apa itu kubus

104. *${prefix}google*
Google search from screenshoot
Usage : ${prefix}google alan walker

105. *${prefix}googleimage*
Google image search
Usage : ${prefix}googleimage alan walker

106. *${prefix}grup*
Grup close 
Usage : ${prefix}grup y/n

107. *${prefix}add*
Add member from number
Usage : ${prefix}add 628xx

108. *${prefix}kick*
Kick member from group
Usage : ${prefix}kick @tag member

109. *${prefix}promote*
Promote to admin member
Usage : ${prefix}promote @tag member

110. *${prefix}demote*
Demote admin to member 
Usage : ${prefix}demote @tag admin

112. *${prefix}inspect*
View info about group chat with link
Usage : ${prefix}inspect link group 

113. *${prefix}fitnah*
Fitnah from fake tag
Usage : ${prefix}fitnah @tag|message|reply me

114. *${prefix}fitnahpc*
Fitnah private chat from fake tag
Usage : ${prefix}fitnahpc message @tag|reply me

115. *${prefix}kontak*
Send kontak from number
Usage : ${prefix}kontak 628xx|siapa

116. *${prefix}tagall*
Tag all members from this group

117. *${prefix}tagall2**
Tag all members from this group

118. *${prefix}tagall3*
Tag all members from this group

119. *${prefix}hidetag*
Hide tag from me to all member
Usage : ${prefix}hidetag message

120. *${prefix}sticktag*
Sticker tag from me to all member
Usage : ${prefix}sticktag message

121. *${prefix}giftag* 
Gif tag from me to all member
Usage : ${prefix}giftag message

122. *${prefix}doctag*
Document tag from me to all member
Usage : ${prefix}doctag message

123. *${prefix}kontag*
Kontak tag from me to all member
Usage : ${prefix}kontag 628xx|siapa

124. *${prefix}totag*
To tag from me to all member
Usage : ${prefix}totag @tag all media

125. *${prefix}ping*
Test ping response bot

126. *${prefix}join*
Joinned bot to your group chat
Usage : ${prefix}join link chat

127. *${prefix}term*
Terminal or exec
Usage : ${prefix}term ls

128. *${prefix}runtime*
View runtime activated bot

129. *${prefix}speed*
Test speed response bot

- Owner :
- https://wa.me/6289656439589
`
menuu = fs.readFileSync('./stik/thumb.jpeg')
        	sanz.sendMessage(from, menuu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {})},message: {'contactMessage': {'displayName': `Hai ${pushname}`,'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu},;;;\nFN:${ucapanWaktu},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}, thumbnail:fs.readFileSync('./stik/fake.jpeg'), caption:menu, sendEphemeral: true})
           	break
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ``ANDA TELAH ONLINE``` ')
            break       
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
	case 'self':
          	if (!mek.key.fromMe) return fakestatus('This command only for me')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 //Set Owner For gc
    case 'public':
          	if (!mek.key.fromMe) return fakestatus('This command only for me')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
					case 'peson':
					  sanz.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
					  break
					  case 'pesoff':
					    sanz.toggleDisappearingMessages(from, 0)
					    break
            case 'spam':
                if (!isMe) return reply(mess.only.me)
                if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
                argz = arg.split("|")
                if (!argz) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
                if (isNaN(argz[1])) return reply(`harus berupa angka`)
                for (let i = 0; i < argz[1]; i++){
                sanz.sendMessage(from, argz[0], MessageType.text, {sendEphemeral: true})
                }
	        break
             case 'mute':
                if (!isMe) return reply(mess.only.me)
                sanz.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!isMe) return reply(mess.only.me)
                sanz.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
            case 'delete':
                if (!isMe) return reply(mess.only.me)
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                sanz.modifyChat(from, ChatModification.delete)
                break
	case 'setreply':
	case 'setfake':
	  if (isMe) return('Khusus Sayah bang kamu siapa?')
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
	  if (isMe) return('Khusus Sayah bang kamu siapa?')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await sanz.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setprefix':
if (!isMe) return reply(mess.only.me)
prefix = q
			fakegroup(`Succes Mengganti Prefix : ${q}`)
			break
	case 'setthumb':
		  if (isMe) return('Khusus Sayah bang kamu siapa?')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await sanz.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
    case 'settarget':
	  if (isMe) return('Khusus Sayah bang kamu siapa?')
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
case 'term':
if (!isMe) return reply(mess.only.me)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`sanz@self:~$ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
//INFORMATION
    case 'covidindo':
                ci = await covidindo()
                var { kasus, kematian, sembuh } = ci[0]
                reply(`Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`)
                break
    case 'covidworld':
                 cw= await covidworld()
                var { kasus, kematian, sembuh } = cw[0]
                reply(`Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`)
                break
    case 'cnn':
                var result = await cnn()
                cn = 'CNN NEWS'
                for (let i = 0; i < result.length; i++) {
                  cn += `\n\nTitle : ${result[i].judul}\nLink : ${result[i].link}\nImage: ${result[i].thumb}`
                }
                buff = await getBuffer(result[0].thumb)
                sanz.sendMessage(from, buff, MessageType.image, {caption: cn})
                break
    case 'infogempa':
                tres = await Gempa()
                var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
                console.log(Map)
                captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
                thumbbb = await getBuffer(Map)
                sanz.sendMessage(from, thumbbb, MessageType.image, {caption: `${captt}`})
                break
     case 'wiki':
     case 'wikipedia':
     query = args.join(' ')
var result = await wikiSearch(query)  
                wik = `Wikipedia Search`
                for (let i = 0; i < result.length; i++) {
                  wik += `\n\nSearch : *${result[i].judul}*\nHasil: ${result[i].wiki}\nImage: ${result[i].thumb}`
                }
                buff = await getBuffer(result[0].thumb)
                 sanz.sendMessage(from, buff, MessageType.image, {caption: wik})
                 .catch(e => {
faketoko('error')
})      
break
//tools
     case 'get':
      if(!q) return reply('linknya?')
			.then(res => res.json())
			qweryna = args.join(' ')
			eses = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=${qweryna}&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			buffqw = await getBuffer(eses.data.screenshot)
			sanz.sendMessage(from, buffqw, image, {quoted: mek})
			.catch(err => {
				return('Mengulang lord ada yg mengerror...')
			})
			break
    case 'revip':
			if (args.length < 1) return reply('Domain/Ip nya mana bang??')
			var qwery = args.join(' ')
			var repip = await fetchJson(`https://sonar.omnisint.io/reverse/${qwery}`)
			sanz.sendMessage(from, `${repip}`, text)
      .catch((error) => {
            reply('Invalid domain/ip'); 
            })
			break
//WIBU
case 'avatar':
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				sanz.sendMessage(from, avatars, image, {quoted: mek})
			break
		case 'loli':
		  anu = await axios.get('https://nekos.life/api/v2/img/neko')
				loliz = await getBuffer(anu.data.url)
				sanz.sendMessage(from, loliz, image, {quoted: mek})
			break
		case 'waifu':
			waifud = await axios.get('https://nekos.life/api/v2/img/waifu')
			nyed = await getBuffer(waifud.data.url)
			sanz.sendMessage(from, nyed, image, { caption: 'Gatau caption nya apa', quoted: mek })
			.catch(err => {
				return('Mengulang lord ada yg mengerror...')
			})
			break
	case 'husbu':
            gis('husbu', async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            sanz.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
     case 'otakuongoing':
                o = await onGoing()
                console.log(o)
                ot = 'Ongoing Otakudesu'
                for (let i = 0; i < o.length; i++) {
                  ot += `\n\nJudul : ${o[i].judul}\nEpisode : ${o[i].eps}\nEps berikutnya pada hari : ${o[i].hri}\nTanggal : ${o[i].tgl}\n\nImage : ${o[i].thumb}`
                }
                buff = await getBuffer(o[0].thumb)
                sanz.sendMessage(from, buff, MessageType.image, {caption: ot})
                break
//IMAGE
case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join(' ');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            sanz.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
case 'pinterest':
			goblog = args.join(" ")
			anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=${goblog}`)
			sasu = JSON.parse(JSON.stringify(anu));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			sanz.sendMessage(from, nye, image, { caption: 'Powered bai gatau pinterest lah bang awokwok', quoted: mek })
			.catch(err => {
				return('lagi sange bang? nyari apaan loh?, puasa bang xixixi')
			})
			break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            sanz.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
	case 'wallpaperanime':
			wanime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
			bufwanime = await getBuffer(wanime.data.url)
			sanz.sendMessage(from, bufwanime, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
//HARAM FEATURE
case 'nsfwavatar':
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				nsavatar = await getBuffer(anu.data.url)
				sanz.sendMessage(from, nsavatar, image, {quoted: mek})
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})	
			break
case 'nekopoi':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'pussy':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'pussyimage':
  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				sanz.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'feetg':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'bj':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'ero':
			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			sanz.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'erokemo':
			erokz = await axios.get('https://nekos.life/api/v2/img/erokemo')
			erokzs = await getBuffer(erokz.data.url)
			sanz.sendMessage(from, erokzs, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'eroyuri':
			eroyuriz = await axios.get('https://nekos.life/api/v2/img/eroyuri')
			buferoyu = await getBuffer(eroyuriz.data.url)
			sanz.sendMessage(from, buferoyu, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'tickle':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/tickle')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'feed':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feed')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'kuni':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kuni')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'femdom':
      anu = await axios.get('https://nekos.life/api/v2/img/femdom')
			bupemdom = await getBuffer(anu.data.url)
				sanz.sendMessage(from, bupemdom, image, {quoted: mek})
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'futanari':
			futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			futanz = await getBuffer(futan.data.url)
			sanz.sendMessage(from, futanz, image, { quoted: mek })
			break
case 'les':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/les')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'trap':
			trapx = await axios.get('https://nekos.life/api/v2/img/tits')
			traps = await getBuffer(trapx.data.url)
			sanz.sendMessage(from, traps, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'pat':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pat')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'boobs':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'blowjob':
			blowz = await axios.get('https://nekos.life/api/v2/img/blowjob')
			bufblowz = await getBuffer(blowz.data.url)
			sanz.sendMessage(from, bufblowz, image, {quoted: mek})
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
	case 'hentai':
			hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
			bufhtz = await getBuffer(hentaiz.data.url)
			sanz.sendMessage(from, bufhtz, image, {quoted: mek})
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
	case 'hololewed':
			hololew = await axios.get('https://nekos.life/api/v2/img/hololewd')
			hololewx = await getBuffer(hololew.data.url)
			sanz.sendMessage(from, hololewx, image, { quoted: mek })
			.catch(err =>{
			  return('Tobat puasa goblokk..')
			})
			break
case 'lewd':
			lewdd = await axios.get('https://nekos.life/api/v2/img/lewd')
			buflewd = await getBuffer(lewdd.data.url)
			sanz.sendMessage(from, buflewd, image, { quoted: mek })
			
			break
	case 'lewdk':
			lewdkk = await axios.get('https://nekos.life/api/v2/img/lewdk')
			lewdkz = await getBuffer(lewdkz.data.url)
			sanz.sendMessage(from, lewdkz, image, { quoted: mek })
			.catch(err =>{
			  return('Tobat puasa goblokk..')
			})
			break
case 'lewdkemo':
			lewdkm = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
			buflewd = await getBuffer(lewdkm.data.url)
			sanz.sendMessage(from, buflewd, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'goose':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/goose')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'solog':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/solog')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'yuri':
			yuriz = await axios.get('https://nekos.life/api/v2/img/yuri')
			bupyuri = await getBuffer(yuriz.data.url)
			sanz.sendMessage(from, bupyuri, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
	case 'anal':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break		
case 'pwankg':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'eron':
			eronz = await axios.get('https://nekos.life/api/v2/img/eron')
			buferon = await getBuffer(eronz.data.url)
			sanz.sendMessage(from, buferon, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'kiss':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kiss')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'keta':
			ketaz = await axios.get('https://nekos.life/api/v2/img/keta')
			bufketa = await getBuffer(ketaz.data.url)
			sanz.sendMessage(from, bufketa, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'cum':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				sanz.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case 'cumimage':
			cumjpg = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
			bupjpg = await getBuffer(cumjpg.data.url)
			sanz.sendMessage(from, bupjpg, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'oppai':
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			sanz.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
case 'holoero':
		holox = await axios.get('https://nekos.life/api/v2/img/holoero')
			bufholox = await getBuffer(holox.data.url)
			sanz.sendMessage(from, bufholox, image, { quoted: mek })
			.catch(err => {
			return('Ad yg mengerror ulang coba..')
			})
			break
//MAKER
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await sanz.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                sanz.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await sanz.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            sanz.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join(' ')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await sanz.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            sanz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            sanz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await sanz.downloadAndSaveMediaMessage(encmedia)
            pe = args.join(' ')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            sanz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            sanz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await sanz.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, sanz, mek, from)
			break
case 'jagokata':
case 'quotes':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
res = await jagoKata(teks)
let hasil = `*~* ${res[0].isi}
_~${res[0].by}_`
reply(hasil)
break
            case 'fdeface': 
		var nn = budy.slice(9)
                var urlnye = nn.split("|")[0];
                var titlenye = nn.split("|")[1];
	        var descnye = nn.split("|")[2];
                run = getRandom('.jpeg')
                var media1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                var media2 = await sanz.downloadAndSaveMediaMessage(media1)
                var ddatae = await imageToBase64(JSON.stringify(media2).replace(/\"/gi, ''))
                sanz.sendMessage(from, {
                    text: `${urlnye}`,
                    matchedText: `${urlnye}`,
                    canonicalUrl: `${urlnye}`,
                    description: `${descnye}`,
                    title: `${titlenye}`,
                    jpegThumbnail: ddatae }, 'extendedTextMessage', { detectLinks: false })
		break
case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
           .catch((err) => {
            reply('emojinya satu aja bang xixixi'); 
            })
    		break
case 'attp':
						if (args.length < 1) return reply(`Text Nya Mana Ajg?\n> *Contoh* : *${prefix}attp* _Aku Ganz_`)
						attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						sanz.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
//MAKERIMAGE
//COMINGSOON
//CONVERTER
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await sanz.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
    case 'tovid':
    case 'tovideo':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await sanz.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await sanz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            sanz.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await sanz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            sanz.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await sanz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            sanz.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await sanz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            sanz.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await sanz.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
//Upload Story WeA
    case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            sanz.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await sanz.downloadMediaMessage(swsw)
            sanz.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            sanz.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await sanz.downloadMediaMessage(swsw)
            sanz.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            sanz.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
//MOBIL LEJEN
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
faketokoforwaded(listt)
})
break
      case 'herodetail':
        res = await herodetails(body.slice(12))
        her = `*Hero details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 

*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}
`
faketokoforwaded(her)
break
//Downloader
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join(' ')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 20000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break

        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join(' ')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 20000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 20000) return sendMediaURL(from, thumb, `*Data Berhasil Dimekatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
 		case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 20000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Dimekatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join(' ');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await sanz.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SA-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    sanz.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:mek,caption:'Nih'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            sanz.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:mek,caption:'Nih'})
	    }
            }
	    })
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(' ')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join(' ')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		sanz.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		sanz.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
		})
     		.catch(e => console.log(e))
     		break
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
           .catch((error) => {
            reply('error bang mengmaaf:('); 
            })
})
            break 
//Learn
case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			sanz.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
case 'google':
      if(!q) return reply('Yang mau di cari afa?')
			.then(res => res.json())
			afanya = args.join(' ')
			gogel = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=https://www.google.com/search?q=${afanya}&source=lmns&bih=2340&biw=1261&safe=strict&hl=id&sa=X&ved=2ahUKEwjFysWKotfwAhXVAXIKHYTqBUYQ_AUoAHoECAEQAA&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			bupnyah = await getBuffer(gogel.data.screenshot)
			sanz.sendMessage(from, bupnyah, image, {quoted: mek, sendEphemeral: true})
			.catch(err => {
				return('Mengulang lord ada yg mengerror...')
			})
			break
case 'googleimage':
      if(!q) return reply('Yang mau di cari afa?')
			.then(res => res.json())
			qweri = args.join(' ')
			gogel = await axios.get(`https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=https://www.google.com/search?q=${qweri}&tbm=isch&ved=2ahUKEwjnm5_xo9fwAhX-03MBHcheA6YQ2-cCegQIABAA&oq=${qweri}&gs_lcp=CgNpbWcQAzIFCAAQsQMyAggAMgUIABCxAzIFCAAQsQMyAggAMgIIADIFCAAQsQMyAggAMgIIADICCAA6BwgjEOoCECc6BAgAEENQmhxY9R5gzSNoAXAAeACAAXCIAdoBkgEDMC4ymAEAoAEBqgELZ3dzLXsanzei1pbWewAQrAAQE&ssanz=img&ei=btKlYOesA_6nz7sPyL2NsAo&bih=2355&biw=1269&safe=strict&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
			bupnyah = await getBuffer(gogel.data.screenshot)
			sanz.sendMessage(from, bupnyah, image, {quoted: mek, sendEphemeral: true})
			.catch(err => {
				return('Mengulang lord ada yg mengerror...')
			})
			break
	//Group Feature
		        case 'grup':
                if (!isGroup) return reply(mess.only.group)
              ////
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args[0] === 'y') {
				reply(`*Done now setting group open!!*`)
                sanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'n') {
                reply(`*Group now setting group close!!*`)
				sanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
sanz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag yg ingin angda tusbol!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '*Mengeluarkan :* '
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
sanz.groupRemove(from, mentioned)
					} else {
mentions(`byee.. @${mentioned[0].split('@')[0]}`, mentioned, true)
sanz.groupRemove(from, mentioned)
}
break
case 'promote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Promote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
sanz.groupRemove(from, mentioned)
} else {
mentions(`Ok @${mentioned[0].split('@')[0]} kamu jadi admin!`, mentioned, true)
sanz.groupMakeAdmin(from, mentioned)
}
break
case 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Demote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
sanz.groupRemove(from, mentioned)
} else {
mentions(`Oke @${mentioned[0].split('@')[0]} kamu gak admin lagi yaa!`, mentioned, true)
sanz.groupDemoteAdmin(from, mentioned)
}
break//DONE
case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await sanz.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             }
             sanz.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join(' ')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            sanz.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await sanz.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await sanz.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            sanz.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break
//tag
 	case 'hidetag':
			if (!isMe) return reply(mess.only.me)
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			var value = args.join(' ')
			var group = await sanz.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			sanz.sendMessage(from, optionshidetag, text)
			break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'tagall2':
if (!isMe) return reply(mess.only.me)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `> @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
fakekontak(teks)
break
case 'tagall3':
if (!isMe) return reply(mess.only.me)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `> https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
					}
sanz.sendMessage(from, teks, text, {detectLinks: false, sendEphemeral:true, quoted: mek})
break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await sanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await sanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            sanz.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
		    case 'giftag':
		      //by Dehanjing
                if (!isQuotedVideo) return reply(`Reply Gif nya dengan caption ${prefix + command}`)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await sanz.downloadMediaMessage(quoted)
                await fs.writeFileSync(`giftag.gif`, download)
                var group = await sanz.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                thumb = fs.readFileSync(`giftag.gif`)
                sanz.sendMessage(from, thumb, video, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'video/gif', thumbnail: thumb })
			    await fs.unlinkSync(`giftag.gif`)
			    break
			case 'doctag':
			  //by Dehanjing
		        if (!isQuotedDocument) return amek.reply(from, `Reply Document dengan caption *${prefix + command}*`, mek)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await sanz.downloadMediaMessage(quoted)
                await fs.writeFileSync(`doc.txt`, download)
                var group = await sanz.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                sanz.sendMessage(from, fs.readFileSync(`doc.txt`), document, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'text/plain' })
			    await fs.unlinkSync(`doc.txt`)
			    break
    case 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join(' ')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            sanz.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await sanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await sanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            sanz.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await sanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await sanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            sanz.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await sanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await sanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            sanz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await sanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await sanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            sanz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
//OTHER 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await sanz.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  

//Maker

case 'bc':
					if (!isMe) return reply(mess.only.me)
					if (args.length < 1) return reply('.......')
					const more = String.fromCharCode(8206)
                    const readmore = more.repeat(4001)
					anu = await sanz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await sanz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							sanz.sendMessage(_.jid, bc, image, {caption: `${body.slice(4)}\n> Izin Broadcast`, sendEphemeral: true})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid,`${body.slice(4)}` + readmore + `\n>Broadcast`)
						}
						reply('Suksess broadcast')
					}
					break
                /*case 'level':
                if (!isGroup) return reply(mess.only
.group)
                const Level = getLevelingLevel(sender)
                const Xp = getLevelingXp(sender)
                if (Level === undefined && Xp === undefined) return reply('MANGSUD?')
                const requiredXp = 5000 * (Math.pow(2, Level) - 1)
                resul = `┌──⫶ *LEVEL* ⫶──\n├ XP :  ${Xp}/${requiredXp}\n└ Level : ${Level}`
                faketokoforwaded(resul, text, numbernye, per)
				break 
				case 'narutod':
				oi = body.slice(8)
				oii = await getBuffer(`https://sanzapi.herokuapp.com/api/photooxy/naruto?text=${oi}`)
				sanz.sendMessage(from, oii, image, {quoted: mek, caption: 'Ok brother'})
				break*/
                    case 'level': //Cek Player Level
                    if (!isGroup) return reply(mess.only.group)
                      const userLevel = getLevelingLevel(sender, _level)
                      const userXp = getLevelingXp(sender, _level)
                      try {
                      profilePic = await sanz.getProfilePicture(sender)
                      } catch {
                      profilePic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                      }
                      let colour = ["f0f8ff", "faebd7", "00ffff", "7fffd4", "f0ffff", "f5f5dc", "ffe4c4", "000000", "ffebcd", "0000ff", "8a2be2", "a52a2a", "deb887", "5f9ea0", "7fff00", "d2691e", "ff7f50", "6495ed", "fff8dc", "dc143c", "00ffff", "00008b", "008b8b", "b8860b", "a9a9a9", "006400", "bdb76b", "8b008b", "556b2f", "ff8c00", "9932cc", "8b0000", "e9967a", "8fbc8f", "483d8b", "2f4f4f", "00ced1", "9400d3", "ff1493", "00bfff", "696969", "1e90ff", "b22222", "fffaf0", "228b22", "ff00ff", "dcdcdc", "f8f8ff", "ffd700", "daa520", "808080", "008000", "adff2f", "f0fff0", "ff69b4", "cd5c5c", "4b0082", "fffff0", "f0e68c", "e6e6fa", "fff0f5", "7cfc00", "fffacd", "add8e6", "f08080", "e0ffff", "fafad2", "d3d3d3", "90ee90", "ffb6c1", "ffa07a", "20b2aa", "87cefa", "778899", "b0c4de", "ffffe0", "00ff00", "32cd32", "faf0e6", "ff00ff", "800000", "66cdaa", "0000cd", "ba55d3", "9370d8", "3cb371", "7b68ee", "00fa9a", "48d1cc", "c71585", "191970", "f5fffa", "ffe4e1", "ffe4b5", "ffdead", "000080", "fdf5e6", "808000", "6b8e23", "ffa500", "ff4500", "da70d6", "eee8aa", "98fb98", "afeeee", "d87093", "ffefd5", "ffdab9", "cd853f", "ffc0cb", "dda0dd", "b0e0e6", "800080", "663399", "ff0000", "bc8f8f", "4169e1", "8b4513", "fa8072", "f4a460", "2e8b57", "fff5ee", "a0522d", "c0c0c0", "87ceeb", "6a5acd", "708090", "fffafa", "00ff7f", "4682b4", "d2b48c", "008080", "d8bfd8", "ff6347", "40e0d0", "ee82ee", "f5deb3", "ffffff", "f5f5f5", "ffff00", "9acd32"]
                      let acak = Math.floor(Math.random() * colour.length - 1);
                      const requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                      const rankk = new canvass.Rank()
                          .setAvatar(profilePic)
                          .setLevel(userLevel)
                          .setLevelColor('#' + colour[acak], '#' + colour[acak])
                          .setRank(Number(getLevelingLevel(sender, _level)))
                          .setRankColor('#' + colour[acak], '#' + colour[acak])
                          .setCurrentXP(userXp)
                          .setOverlay('#' + colour[acak], 100, false)
                          .setRequiredXP(requiredXp)
                          .setProgressBar('#' + colour[acak], 'COLOR')
                          .setCustomStatusColor('#' + colour[acak], 'COLOR')
                          .setBackground('COLOR', '#000000')
                          .setUsername(pushname)
                          .setDiscriminator(sender.split('@')[0].substring(6,10))
                          rankk.build()
                          .then(async (buffer) => {
                              canvass.write(buffer, `${sender}_card.png`)
                              await sanz.sendMessage(from, buffer, MessageType.image, {quoted: mek})
                              fs.unlinkSync(`${sender}_card.png`)
                          })
                          .catch(async (err) => {
                          console.error(err)
                      })
                  break
default:
//
if (budy.startsWith('$')){
                        if (!isMe) return reply(mess.only.me)
                            var konsol = budy.slice(2)
                        exec(konsol, (err, stdout) => {
                            if(err) return reply(`${err}`)
                                if (stdout) {
                                    reply(`${stdout}`)
                                    console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color("$", "aqua"), 'from', color(senderNumber.split('@')[0]), 'args :', color(args.length))
                                }
                            })
                    } 
                    if (budy.startsWith('>')){
                        if (!isMe) return reply(mess.only.me)
                            var konsol = budy.slice(2)
                            function _return(sul) {
                            var sat = JSON.stringify(sul, null, 2)
                            var bang = util.format(sat)
                            return reply(bang)
                        }
                        try {
                            reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                            console.log('\x1b[1;37m>', '[', '\x1b[1;36mEVALL\x1b[1;37m', ']', time, color(">", "aqua"), 'from', color(senderNumber.split('@')[0]), 'args :', color(args.length))
                        } catch (e) {
                              err = String(e)
                                reply(err)
                            }
                        } else {
                            if (budy != undefined) {
                                //console.log('>', '[',color('INGFO','red'),']',`Message : ${budy} From`, color(senderNumber.split('@')[0]))
                            } 
                        }
                        if (!budy.startsWith('$')) return
                            if (!budy.startsWith('>')) return
                        }
                
if (isGroup && budy != undefined) {
	} else {
	console.log(color('> [ JAPRI ]', 'red'), 'WEA', color(sender.split('@')[0]))
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Error : %s', color(e, 'red'))
	console.log(e)
        }
	}
})
