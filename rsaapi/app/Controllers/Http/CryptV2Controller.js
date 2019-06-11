'use strict';

const RSA = require('../Utils/MyCrypt');

class CryptController {
  keys() {
   const key =   RSA.generate(250);
    return { key }
  }

  decrypt({ request, response }) {
    const { encrypted, myKey } = request.all();
    const decrypted_message = RSA.decrypt(encrypted, myKey.d, myKey.n);
    const decrypted = RSA.decode(decrypted_message);
    return { decrypted };
  }

  encrypt({ request, response }) {
    const { text, myKey } = request.all();
    const encoded_message = RSA.encode(text);
    const encrypted = RSA.encrypt(encoded_message, myKey.n, myKey.e);
    return { encrypted };
  }
}

module.exports = CryptController;
