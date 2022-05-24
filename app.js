// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function to build the data table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td)    
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
     }
    );
});
}

// Create a function to filter the data table
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //Check to see if a date was enetered and filter the data using that date
    if (date){
        //Apply 'filter' to the table and keep only rows where 'datetime' matches filter value
        filteredData = filteredData.filter(row => row.datetime == date);
    };

    // Rebuild the table using filtered data
    buildTable(filteredData);
};

// Attache an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
