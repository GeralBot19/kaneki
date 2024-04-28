let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `Creador Wa.me/51988802645 SI QUIERES BOT COMUNICAME ${pesan}`
let teks = `🐞 𝐃𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐂𝐫𝐢𝐚𝐭𝐮𝐫𝐢𝐭𝐚𝐬 𝐃𝐞𝐥 𝐒𝐞ñ𝐨𝐫🐞 \n\n ${oi}\n\n @𝐱𝐬.𝐤𝐚𝐧𝐞𝐤𝐢𝐢: \n`
for (let mem of participants) {
teks += `꒰꒱ @${mem.id.split('@')[0]}\n`}
teks += `𝑲𝒂𝒏𝒆𝒌𝒊 🐀`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
