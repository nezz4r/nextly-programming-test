const isPalindrome = require('../src/palindrome/');

describe('the isPalindrome function', () => {
  test('flags "Arara" as a palindrome, regardless of casing', () => {
    expect(isPalindrome('Arara')).toBe(true);
  });
  test('flags "race car" as a palindrome, regardless of empty spaces', () => {
    expect(isPalindrome('race car')).toBe(true);
  });
  test('flags "Nextly" as a not palindrome', () => {
    expect(isPalindrome('Nextly')).toBe(false);
  });
});
