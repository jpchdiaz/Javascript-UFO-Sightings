var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

// mean
function mean(someList)
{
  var total = 0;

  for (var i = 0; i < someList.length; i++)
  {
    total += someList[i];
  }
  var avg = total / someList.length;
  return avg;
}

console.log("The Mean is:" + mean(movieScore));

//variance
function variance(someList)
{
  var meanValue = mean(someList);
  var total = 0;

  for (var i = 0; i < someList.length; i++)
  {
    total += (someList[i] - meanValue) ** 2;
  }
  var variance = total / someList.length ;
  return variance;
}

console.log("The Variance is:" + variance(movieScore));

// standard deviation
function std_dev(someList)
{
  var varianceValue = variance(someList);
  var standard = Math.sqrt(varianceValue);

  return standard;
}

console.log("The standard deviation is:" + std_dev(movieScore));
