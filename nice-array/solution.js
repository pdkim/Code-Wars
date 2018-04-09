//long version
// function isNice(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.length < 1) {
//       return false;
//     }

//     let num = arr[i];

//     let hasLesser = false;

//     let lesserNum = num - 1;

//     if (arr.indexOf(lesserNum) !== -1) {
//       hasLesser = true;
//     }

//     let hasGreater = false;

//     let greaterNum = num + 1;

//     if (arr.includes(greaterNum)) {
//       hasGreater = true;
//     }

//     if (hasLesser || hasGreater) {
//       //all good
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

//shorter version
function isNice(arr){
  if(arr.length > 0) {
    return arr.every(num => arr.some(ber => ber === num+1 || ber === num-1));
  } else {
    return false;
  }
}