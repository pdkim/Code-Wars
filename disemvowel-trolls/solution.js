function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, '');
  return str;
}

disemvowel('You are the best!');