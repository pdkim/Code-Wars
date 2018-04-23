function high(x) {
  let words = x.split(/[^a-z]+/);
  console.log(words);
  let scores = words.map(word => [...word].map(a => a.charCodeAt(0) - 96).reduce((a, b) => a + b, 0));
  console.log(scores);
  let scores1 = words[scores.indexOf(Math.max(...scores))];
  console.log(scores1);
  return scores1;
}

high('this is working');