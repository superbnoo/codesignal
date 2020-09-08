
// unit tests addElementToArray
// addElementToArray(1, [[1],[2]]);
function addElementToArray(value, array) {
  for (var i = 0; i < array.length; i++) {
    array[i].push(value);
  }
  return array;
}

// unit test: removeEntryAleadyWithK
// var answer = [];
// var test = removeEntryAleadyWithK(3, [[1,2,3], [1,2], [1,3]], answer);
// console.log(test);
// console.log(answer);
function removeEntryAleadyWithK(k, array, answer) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length === k) {
      answer.push(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function arrayChooseK(k, array) {
  var answer = [];
  var tmpStore = [[]];

  for (var i = 0; i < array.length; i++) {
    var cloneTmp = tmpStore.map(elem => [...elem]); // deep copy of inner array as well
    cloneTmp = addElementToArray(a[i], cloneTmp);
    var newTmp = removeEntryAleadyWithK(k, cloneTmp, answer);
    tmpStore = [...newTmp, ...tmpStore];
  }

  return answer;
}

// main test
// node arrayChooseK.js

var a = [1, 2, 3, 4];
var k = 3;
console.log(arrayChooseK(k, a)); // [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 1, 3, 4 ], [ 1, 2, 4 ] ]
