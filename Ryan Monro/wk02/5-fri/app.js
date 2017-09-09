var listInput = document.querySelector('#list-input');
var groupInput = document.querySelector('#group-input');
var results = document.querySelector('#results');

document.querySelector('button').addEventListener('click', function(){
  var thingsArray = listInput.value.split(' ');
  var groupSize = Number(groupInput.value);
  var results = splitArrayIntoRandomGroups(thingsArray, groupSize);
  displayArrayOfArrays(results);
});

var splitArrayIntoRandomGroups = function(arr, groupSize){
  // returns an array of arrays
  var results = [];
  // move random elements from original array until length <= group size
  while (arr.length >= groupSize){
    // create array, add groupSize elements to it
    var newArr = []
    for (var ind = 0; ind < groupSize; ind++){
      newArr.push(removeRandomElement(arr));
    }
    // add array to results array
    results.push(newArr);
  }
  // handle remaining elements
  if (arr.length === 1) {
    // if only one element left, add it to a random group
    var randomGroup = Math.floor(Math.random() * results.length);
    var element = arr.splice(0,1);
    results[randomGroup].push(element);
  } else if (arr.length === groupSize - 1){
    // if groupsize - 1 elements left, make a new group with them
    results.push(arr);
  } else {
    // distribute elements evenly
    var index = 0;
    while (arr.length > 0){
      results[index].push(removeRandomElement(arr));
      index++;
      if (index === results.length){
        index = 0;
      }
    }
  }
  return results;
}

var removeRandomElement = function(arr){
  // removes random element, returns removed element
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr.splice(randomIndex, 1);
}

var displayArrayOfArrays = function(arrOfArr){
  // display in HTML as unordered list of unordered lists
  var outerUL = document.createElement('ul');
  arrOfArr.forEach(function(arr){
    var innerLI = document.createElement('li');
    var innerUL = document.createElement('ul');
    innerLI.appendChild(innerUL);
    arr.forEach(function(element){
      var newLi = document.createElement('li');
      newLi.textContent = element;
      innerUL.appendChild(newLi);
    });
    outerUL.appendChild(innerLI);
  });
  results.appendChild(outerUL);
};
