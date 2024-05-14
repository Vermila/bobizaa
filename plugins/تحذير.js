let handler = async (m, { conn, text, command, usedPrefix }) => {
  let pp = './src/warn.jpg'
  let who
  if (m.isGroup) {
    who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
  } else {
    who = m.chat
  }
  let user = global.db.data.users[who]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let warntext = `*[❗] يرجى وضع منشن للشخص أو الرد على رسالة له @منشن*\n\n*—◉ مثال:*\n*${usedPrefix + command} @${global.suittag}*`
  
  if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext) }) 
  if (!user) throw 'المستخدم غير موجود في قاعدة البيانات.'
  
  user.warn += 1
  await conn.sendButton(m.chat, `${user.warn == 1 ? `*@${who.split('@')[0]}*` : `*@${who.split('@')[0]}*`} حصلت على تحذير في هذه المجموعة!`, `*تحذيرات ${user.warn}/3*\n\n${wm}`, pp, [['📋 قائمة التحذيرات 📋', '#listwarn']], m, { mentions: [who] })
  
  if (user.warn >= 3) {
    if (!bot.restrict) throw '*[❗] لم يتم تمكين القيود على مالك الروبوت (#تعفيل) استخدم هذا الأمر لتمكين التحذيرات*'
    user.warn = 0
    await m.reply(`لقد حذرتك عدة مرات!!\n*@${who.split('@')[0]}* حتى أصبحوا *3* تحذيرات سوف يتم طردك بعد 0 ثانية 👽`, null, { mentions: [who] })
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
  }
  return true
}

handler.command = /^(تحذير|التحذير)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
  
