const crypto=require('crypto');
const config=require('../../config/local-config');

const secretkey=crypto.createHash('sha256').update(config.crypto.secretkey).digest('base64').substr(0, 32);
const iv = Buffer.from(config.crypto.iv, 'hex');

function encrypt(text){
    const cipher=crypto.createCipheriv('aes-256-cbc', secretkey, iv);
    let encrypted=cipher.update(text, 'utf-8', 'hex');
    // encrypted += 
}
function decrypt(encrypted){}