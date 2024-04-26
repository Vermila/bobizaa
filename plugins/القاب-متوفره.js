let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `هذا الامر قيد التعديل 🎗️🧡 `;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/1ee2af6fdf7c01918916b.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(القاب-متوفره)$/i;
handler.command = new RegExp;

export default handler;
