function cubeOdd(arr) {

  // insert code here >.<
  let oddOnly = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddOnly.push(Math.pow(arr[i], 3));
    }
  }
  let check = oddOnly.reduce((acc, current) => acc + current);
  if (check || check === 0) {
    return check;
  } else {
    return undefined;
  }
}

cubeOdd([1,2,3,4]);