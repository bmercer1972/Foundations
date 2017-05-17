//Exercise 1
function addNumbers(numberA, numberB) {
  return (numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo); // 4

//Exercise 2
function yell(myString) {
  console.log(myString.toUpperCase());
}
yell("test");

function yell10(myString) {
  for(count = 0; count < 10; count++){
    yell(myString);
  }
}
yell10("test10");

//Exercise 3
function longest(string1, string2) {
  if (string1.length > string2.length) {
    return string1;
  } else {
    return string2;
  }
}
console.log(longest("Bill", "Jim"));

//Exercise 4
function isVowel(myChar){
  var myUChar = myChar.toUpperCase();
  if (myUChar === "A" || myUChar === "E" || myUChar === "I" || myUChar === "O" || myUChar === "U") {
    return true;
  } else {
    return false;
  }
}
console.log(isVowel("C"));
console.log(isVowel("E"));
