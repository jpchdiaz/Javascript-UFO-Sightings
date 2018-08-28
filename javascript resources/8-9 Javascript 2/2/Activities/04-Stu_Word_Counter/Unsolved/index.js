var stringy = "I yam what I yam and always will be what I yam"

function words(str) {
  return str.split(" ").reduce(function(count, word) {
    count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;

    return count;
  }, {});
}

console.log(words(stringy));


// class example
function wordCount(str){
  // splits
  stringArray = str.split(" ");

  // an object to hold word freuqency
  var wordFrequency = {};

  for (var i = 0; i < stringArray.length; i++) {
    var currentWord = stringArray[i];
    //if the current word has been seen before...
    if (currentWord in wordFrequency) {
      // add one to counter
      wordFrequency[currentWord] += 1;
    }
    else {
      // set the counter at 1
      wordFrequency[currentWord] = 1;
    }
  }
  console.log(wordFrequency);
  return wordFrequency;
}

console.log('another one');
wordCount(stringy);
