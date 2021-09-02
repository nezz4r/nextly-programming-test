function isPalindrome(word) {
  const formattedWord = word.toLowerCase().split(' ').join('');
  const a = [...formattedWord];
  const b = [...a].reverse();

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
