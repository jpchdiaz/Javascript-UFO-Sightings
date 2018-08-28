console.log(data);
// YOUR CODE HERE
var brace1 = {
  x: data.map(row => row.pair),
  y: data.map(row => row.greekSearchResults),
  text: data.map(row => row.greekName),
  name: "Greek",
  type: "bar"
};

var brace2 = {
  x: data.map(row => row.pair),
  y: data.map(row => row.romanSearchResults),
  text: data.map(row => row.romanName),
  name: "Roman",
  type: "bar"
};

var data = [brace1, brace2];

var layout = {
  title: 'Greek vs Roman gods search results',
  barmode: 'group'
};

Plotly.newPlot("plot", data, layout);
