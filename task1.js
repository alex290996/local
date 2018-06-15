
function Palindrome(str) {
    var strLen = str.length;
    var result = '';
    for (var i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) { 
        result = 'yes';
      } else {
        result = 'no';
        return result;
      }
    }
    return result;
  }

  test = Palindrome(process.argv[2]);
  test2 = Palindrome(process.argv[3]);

  process.stdout.write(test);
  process.stdout.write(test2);
