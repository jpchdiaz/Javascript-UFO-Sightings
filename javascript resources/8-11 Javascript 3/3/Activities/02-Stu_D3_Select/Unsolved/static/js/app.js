// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var table = d3.select('table');
console.log(table);
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
// d3.select('.col-md-12>table').attr('class', 'grades table table-striped');
table.attr('class', 'grades table table-striped');

// Use D3 to select the table body
var tbody = d3.select('tbody');

// Append one table row `tr` to the table body
var row = tbody.append('tr');
var row2 = tbody.append('tr');

// Append one cell for the student name
row.append('td').text(newGrade[0])

// Append one cell for the student grade
row.append('td').text(newGrade[1])

row2.append('td').text('another one - dj khaled');
