var userText  //text-to-work;
var useStep //encrypt-step;
var result //output;
var action //encrypt/decrypt;
var EngAlfUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var EngAlfLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z'];
var EngAlfUpEncrypt = Array(26); 
var EngAlfLowerEncrypt = Array(26);

function CezarEncrypt(step, arr) {
    var CopyAlf = arr.slice();
    var i = 0;
    
    while ((i + step) < (CopyAlf.length)) {
      var buff = CopyAlf[i];
      CopyAlf[i] = CopyAlf[i + step];
      CopyAlf[i + step] = buff;
      i++;     
    }
    return CopyAlf;
  }
function contains(symb, arr) {
    var letter = symb;
    pos = 0;
    for (var i = 0; i < arr.length; i++) {
      if (letter === arr[i]) {
        pos = i;
        return true;
        break;
      }
    }
  }
  
  function encrypt(text) {
    var result = '';
    for (var i = 0; i <= text.length; i++) {
      var symbol = text[i];
      if (contains(symbol, EngAlfUp)) {
          symbol = EngAlfUpEncrypt[pos];
          result += symbol;
      }
      if ((contains(symbol, EngAlfLower))) {
          symbol = EngAlfLowerEncrypt[pos];
          result += symbol;
      }
    return result;
  }
  
  function decrypt(text) {
    var result = '';
    for (var i = 0; i <= text.length; i++) {
      var symbol = text[i];
      if (contains(symbol, EngAlfUpEncrypt)) {
          symbol = EngAlfUp[pos];
          result += symbol;
      }
      if ((contains(symbol, EngAlfLowerEncrypt))) {
          symbol = EngAlfLower[pos];
          result += symbol;
      }
      // if (contains(symbol, UkrAlfUpEncrypt)) {
      //     symbol = UkrAlfUp[pos];
      //     result += symbol;
      // }
      // if ((contains(symbol, UkrAlfLowerEncrypt))) {
      //     symbol = UkrAlfLower[pos];
      //     result += symbol;
      // }
    }
    return result;
  }
