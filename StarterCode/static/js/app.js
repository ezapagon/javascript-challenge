
// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Loop through data and console.log each field
data.forEach(element => console.log(element));

// Create the table using tableData set
function buildTable(data){
    
    tbody.html("");

   data.forEach((element) => {
      var row = tbody.append("tr");
      Object.entries(element).forEach(([key,value]) => {
      row.append("td").text(value);
    })
  });

}
// Complete the event handler function for the form

function runEnter() {

      d3.event.preventDefault();

      var inputElement = d3.select("#datetime").property("value");

      if(inputElement) {

          // Get the value property of the input element
        var filterData = tableData.filter((row) => row.datetime === inputElement);

        console.log(filterData);

      }

      buildTable(filterData);
}
// Select the input element and get the raw HTML node and Create event handlers 
d3.selectAll("#filter-btn").on('click', runEnter);

buildTable(tableData);
