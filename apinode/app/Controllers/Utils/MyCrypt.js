const bigInt = require('big-integer');
/*
*
class RSACrypt {
  isPrime = (num) => {
    let n = num;
    let count = 0;
    for (n; n > 0; n--)
      if (num % n === 0)
        count++;
    if (count > 2)
      return false;
    return true;
  };
  mdc = (a, b) => {
    if (a % b === 0)
      return b;
    else
      return this.mdc(b, a % b);
  };
  makePrime = (n) => {
    const prim = Math.ceil(Math.random() * (n - 1) + 1);
    if (this.isPrime(prim))
      return prim;
    return this.makePrime(n);
  };
  doPrimeBetween = (z) => {
    let zfa = Math.ceil(Math.random() * (z - 1) + 1);


      for (let zf = zfa ; zf > 0; zf--) {
        if (z % zf !== 0) {
          if (this.mdc(z, zf) === 1)
            return zf;
        }
      }

      for (let zf = zfa; zf < z; zf++) {
        if (z % zf !== 0) {
            if (this.mdc(z, zf) === 1)
            return zf;
        }
      }
  };
  pvKey = (e, z) => {
    let x = true;
    let d = 2;

    while (x) {
      if ((d * e) % z === 1 && d !== e) {
        x = false;
        return d;
      } else {
        d++;
      }
    }
  };

  getkeys = () => {
    const p = this.makePrime(15);//17
    const q = this.makePrime(55);//41
    const n = p * q;
    const z = (p - 1) * (q - 1);
    const publicKey = this.doPrimeBetween(z);

    const privateKey = [this.pvKey(publicKey, z), n];
    return {
      publicKey: [publicKey, n],
      privateKey,
    };

  };
  encrypt = (str, k, n) => {
    let mstr = str;
    const my = [];
    for (let i = 0; i < mstr.length; i++) {
      const ch = mstr.charCodeAt(i);
      const pow = Math.floor(Math.pow(ch, k));
      console.log({ch});
      console.log({pow, n});
      console.log({res:Math.floor(pow/n)-n, res2:pow/n});
      const cod = pow%n;
      my.push(cod)
    }
    return my.join('+#+');
  };
  decrypt = (str, k, n) => {
    let mstr = str.split('+#+');
    for (let i = 0; i < mstr.length; i++)
      mstr[i] = String.fromCharCode(Math.pow(mstr[i], k) % n);
    return mstr.join("");
  };

}*/
class RSA {
  static randomPrime(bits) {
    const min = bigInt.one.shiftLeft(bits - 1);
    const max = bigInt.one.shiftLeft(bits).prev();

    while (true) {
      let p = bigInt.randBetween(min, max);
      if (p.isProbablePrime(256)) {
        return p;
      }
    }
  }

  static generate(keysize) {
    const e = bigInt(65537);
    let p;
    let q;
    let totient;

    do {
      p = this.randomPrime(keysize / 2);
      q = this.randomPrime(keysize / 2);
      totient = bigInt.lcm(
        p.prev(),
        q.prev()
      );
    } while (bigInt.gcd(e, totient).notEquals(1) || p.minus(q).abs().shiftRight(keysize / 2 - 100).isZero());

    return {
      e,
      n: p.multiply(q),
      d: e.modInv(totient),
    };
  }

  static encrypt(encodedMsg, n, e) {
    return bigInt(encodedMsg).modPow(e, n);
  }

  static decrypt(encryptedMsg, d, n) {
    return bigInt(encryptedMsg).modPow(d, n);
  }

  static encode(str) {
    const codes = str
      .split('')
      .map(i => i.charCodeAt())
      .join('');

    return bigInt(codes);
  }

  static decode(code) {
    const stringified = code.toString();
    let string = '';

    for (let i = 0; i < stringified.length; i += 2) {
      let num = Number(stringified.substr(i, 2));

      if (num <= 30) {
        string += String.fromCharCode(Number(stringified.substr(i, 3)));
        i++;
      } else {
        string += String.fromCharCode(num);
      }
    }

    return string;
  }
}

module.exports = RSA;
