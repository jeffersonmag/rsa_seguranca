'use strict'
const NodeRSA = require('node-rsa');
class CryptController {
  keys () {
    const key = new NodeRSA({b: 512});
    const publicKey = key.exportKey('pkcs8-public-pem');
    const privateKey = key.exportKey('pkcs8-private-pem');
    return { publicKey, privateKey };
  }
  decrypt ({request, response}) {
    const key = new NodeRSA({b: 512});
    const { encrypted, myKey } = request.all();
    key.importKey(myKey,'pkcs8-private-pem');
    const decrypted = key.decrypt(encrypted, 'utf8');
    return { decrypted };
  }
  encrypt ({request, response}) {
    const key = new NodeRSA({b: 512});
    const { text, myKey } = request.all();
    key.importKey(myKey,'pkcs8-public-pem');
    const encrypted = key.encrypt(text, 'base64');
    return { encrypted };
  }
}

module.exports = CryptController
