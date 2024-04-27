let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*〄━━━━━━━⌬〔🏮〕⌬━━━━━━━〄*

*⌝ روابط خاصه بالنقابة〣🍷⌞*

ـ· • • ━━━━━━━ ⌞⚜️⌝ ━━━━━━━ • • ·
*⌝موجود رابط الاستقبال و الالقاب〣🍷⌞*
ـ· • • ━━━━━━━ ⌞⚜️⌝ ━━━━━━━ • • ·

*❐روابط⛩️↶*

*⌝🛕╎جروب الاستقبال⌞*
*➥【https://chat.whatsapp.com/JwS5RhQayeY4nT1yYbaRTm 】*

*⌝🎴╎هنا موجود الالقاب مأخوذة⌞*
*➥【https://docs.google.com/spreadsheets/d/1w7U8aUy4wi2_yMwxJoU9_Y9YPabKtfYav03lxrm6UjA/edit?usp=drivesdk 】*
*〄━━━━━━━⌬〔🏮〕⌬━━━━━━━〄*
 تــــوقــيــع ↯:
*⌞ LEVI‹⚜️›YORUICHI ⌝* `;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/1ee2af6fdf7c01918916b.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(مأخوذة)$/i;
handler.command = new RegExp;

export default handler;
