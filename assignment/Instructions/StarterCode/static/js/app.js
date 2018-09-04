// dataset
var tableData = data;
// and another one for reset
var resetData = data;

// get a reference to the table body
var tbody = document.querySelector("tbody");

// reference to search fields and then button
var dateSearch = document.querySelector("#datetime");
var citySearch = document.querySelector("#cityfilter");
var stateSearch = document.querySelector("#statefilter");
var countrySearch = document.querySelector("#countryfilter");
var shapeSearch = document.querySelector("#shapefilter");
var searchBtn = document.querySelector("#filter-btn");
var resetBtn = document.querySelector("#reset-btn")

// give the button its powers
searchBtn.addEventListener('click', handleSearchClick);
resetBtn.addEventListener('click', handleResetClick);

// console logging the data
console.log(data);

// Create function to fill table with all data
function tableRender() {
  tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // retrieves current data object and fields
    var currentdata = tableData[i];
    var currentfields = Object.keys(currentdata);
    // Creates a new row in tbody, sets index to be i + starting Index
    var newRow = tbody.insertRow(i);
    for (var j = 0; j < currentfields.length; j++) {
      // for every field in data object, creates a new cell then sets inner text to be current value at the address's field
      var field = currentfields[j];
      var cell = newRow.insertCell(j);
      cell.innerText = currentdata[field];
    }
  }
}

// Search Function
function handleSearchClick(event) {

  //prevent page from refreshing
  event.preventDefault();

  // Date Search
  var filterDate = dateSearch.value;
  if (filterDate != "") {
    tableData = tableData.filter(function(data) {
    var dataDate = data.datetime;
    return dataDate === filterDate;
  });
};

  // City Search
  var filterCity = citySearch.value.trim().toLowerCase();
  if (filterCity != "") {
    tableData = tableData.filter(function(data) {
    var dataCity = data.city.toLowerCase();
    return dataCity === filterCity;
  });
};
  // State Search
  var filterState = stateSearch.value.trim().toLowerCase();
  if (filterState != "") {
    tableData = tableData.filter(function(data) {
    var dataState = data.state.toLowerCase();
    return dataState === filterState;
  });
};
  // Country Search
  var filterCountry = countrySearch.value.trim().toLowerCase();
  if (filterCountry != "") {
    tableData = tableData.filter(function(data) {
    var dataCountry = data.country.toLowerCase();
    return dataCountry === filterCountry;
  });
};
  // Shape Search
  var filterShape = shapeSearch.value.trim().toLowerCase();
  if (filterShape != "") {
    tableData = tableData.filter(function(data) {
    var dataShape = data.shape.toLowerCase();
    return dataShape === filterShape;
  });
};
  tableRender();
}

// Reset Button
function handleResetClick() {
  tableData = data;
  dateSearch.value = "";
  citySearch.value = "";
  stateSearch.value = "";
  countrySearch.value = "";
  shapeSearch.value = "";
  tableRender();
}

// Renders table upon page load
tableRender();
