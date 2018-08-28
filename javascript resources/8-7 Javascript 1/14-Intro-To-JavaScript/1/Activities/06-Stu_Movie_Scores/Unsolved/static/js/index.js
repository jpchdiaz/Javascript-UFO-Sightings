// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

// put these in lists
for (var j = 0; j < movieScores.length; j++){

  // // this takes the score and adds it to ratings count within the for loop
  // var score = movieScores[j];
  // sum += score;
  // // from here i can push 'score' instead of 'j'

  if (j > 7){
    goodMovieScores.push(j);
  } else if (j <= 7 && j > 5){
    okMovieScores.push(j);
  } else {
    badMovieScores.push(j);
  }
}

// alternate avg calculation
// var avg = sum / movieScores.length;

// average of all movie
var total = 0;

for (var i = 0; i < movieScores.length; i++){
  total += movieScores[i];
}

var avg = total / movieScores.length;

console.log("There are " + goodMovieScores.length + " good movies.")
console.log("There are " + okMovieScores.length + " ok movies.")
console.log("There are " + badMovieScores.length + " bad movies.")
console.log("The average score of all movies is " + avg + ".")
