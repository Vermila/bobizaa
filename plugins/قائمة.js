let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*〄━━━━━━━⌬〔🏮〕⌬━━━━━━━〄*

*⌝ روابط خاصه بالنقابة〣🍷⌞*

ـ· • • ━━━━━━ ⌞⚜️⌝ ━━━━━━ • • ·
*⌝موجود كل روابط تابعه للنقابه〣🍷⌞*
ـ· • • ━━━━━━ ⌞⚜️⌝ ━━━━━━ • • ·

*❐روابط⛩️↶*

*⌝⚙️╎جروب الاستقبال⌞*
*➥【https://chat.whatsapp.com/JwS5RhQayeY4nT1yYbaRTm 】*
*⌝📜╎جروب تسجيلات⌞*
*➥【】*
*⌝🛕╎جروب إدارة⌞*
*➥【https://chat.whatsapp.com/FQmpY4VBo4P2wRRazFV427 】*
*⌝📢╎جروب اعلانات ⌞*
*➥【https://chat.whatsapp.com/BGeA48KBhfe5kfbS9G0ajq 】*
*⌝🏦╎جروب بـنـك⌞*
*➥【】*
*⌝🏪╎جروب المتجر⌞*
*➥【】*
*〄━━━━━━━⌬〔🏮〕⌬━━━━━━━〄*
 تــــوقــيــع ↯:
*⌞ LEVI‹⚜️›YORUICHI ⌝* `;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/1ee2af6fdf7c01918916b.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(قائمة|اللائحه)$/i;
handler.command = new RegExp;

export default handler;
