const caesar = function(str, num) {
    if (num<-26){
        num=num%26;
      }
    const arr = [];
    const re = /[a-zA-Z]/;
    for (const c of str) {
        if (re.test(c)) {
            const start = c === c.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            const diff = c.charCodeAt(0) - start;
            const sh = num >= 0 ? diff + num : diff + Math.abs(26 - Math.abs(num));
            const code = sh % 26 + start;
            arr.push(String.fromCharCode(code));
        } else { 
            arr.push(c); 
        }
    }

    return arr.join('');
};

// Do not edit below this line
module.exports = caesar;
