var eyeColor = ["Brown", "Brown", "Brown", "Brown", "Brown",
  "Brown", "Brown", "Brown", "Green", "Green",
  "Green", "Green", "Green", "Blue", "Blue",
  "Blue", "Blue", "Blue", "Blue"];
var eyeFlicker = [26.8, 27.9, 23.7, 25, 26.3, 24.8,
  25.7, 24.5, 26.4, 24.2, 28, 26.9,
  29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];

// @TODO: Complete the Following Steps

// Create the Trace
var trace1 = {
  x: eyeColor,
  y: eyeFlicker,
  marker:{
   color: ['rgba(165,42,42,1)', 'rgba(0,255,0,1)', 'rgba(0,0,255,1)']
 },
  type: 'bar'
};
// Create the data array for our plot

// Define our plot layout
var layout = {
  title: 'Eye Color vs Flicker',
  xaxis: {title: 'Eye Color'},
  yaxis: {title: 'Flicker Frequency'}
};
// Plot the chart to a div tag with id "bar-plot"
var data = [trace1];

Plotly.newPlot('bar-plot', data, layout );
