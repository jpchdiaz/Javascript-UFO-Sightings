// d3.select()

// select the text from the html
// can also use selectAll to select all divs with the class text1
// this is just for class
var text1 = d3.select(".text1").text();
console.log(text1);

// hashtag selects an id instead of class
var t2 = d3.select("#text2").text();
console.log(t2);

d3.select('.text1').text("now i can change this");

// capture the html link
var aLink = d3.select('.my-link').html();
console.log(aLink);

//get an element's href attribute
var aLinkAnch = d3.select('.my-link>a');
console.log('this is the anch: ', aLinkAnch);

var aLinkAnchAttr = aLinkAnch.attr('href');
console.log("heres just the link: ", aLinkAnchAttr);

//change the attribute
aLinkAnch.attr('href', 'https://python.org');

// use a join method
d3.select('.inner>a').attr('href', 'https://nytimes.org').text('ny times');

// select all list items then change their font color
d3.selectAll('li').style('color', 'blue');

// add another element to the list
var nList = d3.select('ul').append('li');
nList.text('just added a 4th item');
