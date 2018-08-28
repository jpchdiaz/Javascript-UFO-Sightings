function buildPlot() {
    /* data route */
  var url = "/api/pals";
    // @TODO: Build your plot here
    d3.json(url).then(function(response) {
      console.log(response);

      var data = [response];
    })
}

buildPlot();
