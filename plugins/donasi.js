let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭══════════════════
║╭──❉ 〔  *DONASI*  〕 ❉───
║│➸ *Dana* : 081248537085
║│➸ *Ovo* : 081248537085
║│➸ *GoPay* : 081248537085
║│➸ *Pulsa Telkomsel*: 081248537085
║│➸ *Trakteer*:
║│   https://trakteer.id/venBotz/tip
║╰───────────────
╰═════════════════
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm