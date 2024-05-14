const { WAConnection, MessageType, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');

const welcomeMessage = (name) => `مرحبًا ${name}! 🎉 نتمنى لك وقتًا ممتعًا في المجموعة 😊`;

async function connectToWhatsApp () {
    const conn = new WAConnection();

    // تحميل جلسة محفوظة إذا كانت موجودة
    if (fs.existsSync('./session.json')) {
        conn.loadAuthInfo('./session.json');
    }

    conn.on('credentials-updated', () => {
        console.log('تم تحديث بيانات الاعتماد');
        const authInfo = conn.base64EncodedAuthInfo();
        fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'));
    });

    conn.on('open', () => {
        console.log('تم الاتصال بنجاح!');
    });

    conn.on('group-participants-update', async (update) => {
        const { jid, participants, action } = update;
        
        if (action === 'add') {
            for (let participant of participants) {
                try {
                    const contact = await conn.getContact(participant);
                    const name = contact.notify || contact.vname || contact.name || participant.split('@')[0];
                    const message = welcomeMessage(name);

                    await conn.sendMessage(jid, message, MessageType.text);
                } catch (error) {
                    console.error('خطأ في الترحيب بالعضو الجديد:', error);
                }
            }
        }
    });

    // الاتصال بواتساب
    await conn.connect();
}

// بدء الاتصال
connectToWhatsApp().catch(err => console.log("حدث خطأ:", err));
