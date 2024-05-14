let war = global.maxwarn || 4; // تحديد الحد الأقصى للتحذيرات
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {
    let who;
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else {
        who = m.chat;
    }

    if (!who) throw `*[❗] يــرجــي وضــع مــنــشــن للــشــخــص او الــرد عــلــى رســالــه لــه @مــنــشــن*\n\n*📌 مــثــال :* ${usedPrefix + command} *@شــخــص*`;
    if (!(who in global.db.data.users)) throw `✳️ *لـم يـتـم الـعـثـور عـلـى الـمـسـتخـدم فـي قـاعـدة الـبـيـانـات الـخـاصـة بـي*`;

    let name = conn.getName(m.sender);
    let user = global.db.data.users[who];
    let warn = user.warn;

    if (warn < war) {
        user.warn += 1;
        m.reply(`
*⚠️ تــم تــحــذيــر الــمــســتــخــدم ⚠️*
*┌─────⊷*
*▢〉  ♆ مـــســـؤول: ${name}*
*▢〉 🕶 مـــســـتـــخـــدم:*
*▢〉   ‣ @${who.split`@`[0]}*
*▢〉 ❗️ يــــحــــذر: ${warn + 1}/${war}*
*▢〉 ❓ ســـبـــب:* *${text || 'غير محدد'}*
*└──────────────⊷*`, null, { mentions: [who] });

        m.reply(`
*⚠️ حــذر ⚠️*
*لــقــد تــلــقــيــت تــحــذيــرًا مــن أحــد الــمــشــرفــيــن*
*┌─────⊷*
*▢〉 تــحــذيــرات: ${warn + 1}/${war}* 
*إذا تــلــقــيــت* ~*${war}*~ *تــحــذيــرات ســيــتــم إزالــتــك تــلــقــائــيــاً مــن الـمـجـمـوعـة ‼︎*`, who);
    } else if (warn >= war) {
        user.warn = 0;
        const userId = who.split('@')[0];
        m.reply(`⛔ *الــعــضــو* *${userId}* تــجــاوز ~*${war}*~ *تــحــذيــرات، لــذا تــتــم إعــادة ضــبــط الــتــحــذيــرات.*`);
        
        await time(1000); // انتظار ثانية واحدة قبل الطرد
        await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
        
        m.reply(`♻️ *الــعــضــو* *${userId}* *تــم طــرده مــن الــمــجــمــوعــة* *${groupMetadata.subject}* *لتجاوزه* ~*${war}*~ *تــحــذيــرات.*`);
    }
}

handler.help = ['warn @user'];
handler.tags = ['group'];
handler.command = ['انذار', 'warn'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
                
