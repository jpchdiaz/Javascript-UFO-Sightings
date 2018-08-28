// @TODO: Complete the following sections

console.log(data);
// Sort the data array using the greekSearchResults value
data.sort(function(a,b){
  return parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults);
})
// Slice the first 10 objects for plotting
dataSlice = data.slice(0, 10);

// Trace1 for the Greek Data
var trace1 = {
  x:dataSlice.map(row=> row.greekSearchResults),
  y:dataSlice.map(row=> row.greekName),
  text:dataSlice.map(row=>row.greekName),
  name: 'Greek',
  type: 'bar',
  orientation:'h'
}
// set up the data variable
var data = [trace1];
var layout = {
  title: "Greek gods",
  margin:{
    l:50,
    r:50,
    t:50,
    b:50
  }
}

Plotly.newPlot('plot', data, layout)
// set up the layout variable
// Render the plot to the div tag with id "plot"
