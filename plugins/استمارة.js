let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⇜أهلا بك بأستقبال  نقابة┋«✧🍷𝑴𝑨𝑭𝑰𝑨✧*
  
*┃ـ❐━──━⌬〘👑〙⌬━──━❐ـ┃*
        *استمارة دخول📜النقابة*
*┃ـ❐━──━⌬〘👑〙⌬━──━❐ـ┃*

*〄━━━━━━━⌬〔🏮〕⌬━━━━━━━〄*

*┋❀̥˚┋* *اللــــقـب 🧧:  _⊑يورويتشي ⊒_*


*┋̥˚❀┋* *الإنـــمـي/المانغا/المانها 🎌: _⊑بلياش ⊒_*


*┋❀̥˚┋* *ذكـر♂️/انثـى♀️ :  _⊑انثى ⊒_*


*┋̥˚❀┋* *الرجاء ارفاق صورة للقب🎴: _⊑ ⊒_*
  
*┈──❊:::::::¨🍷¨:::::::❊──┈*

*❒ ⧼المرجو نسخ الاستماره وملئها📜⧽*


*❒ ⧼ممنوع ولد ياخذ لقب بنت ولعكس صحيح❕⧽*


*❒ ⧼ممنوع تبقا في الاستقبال اكثر من 8ساعات❕⧽*


*❒ ⧼سوالف او نشر =طرد❕⧽*

*〄━━━━━━━⌬〔🏮〕⌬━━━━━━━〄*
 تــــوقــيــع ↯:
*⌞ LEVI‹⚜️›YORUICHI ⌝* `;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/1ee2af6fdf7c01918916b.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(استمارة|الاستمارة)$/i;
handler.command = new RegExp;

export default handler;
