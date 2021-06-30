// from data.js
var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(data);
// Loop through data and console.log each weather report object
data.forEach(element => console.log(element));

//append one table row `tr`for each weather report object

data.forEach((element) => {
    var row = tbody.append("tr")
})


