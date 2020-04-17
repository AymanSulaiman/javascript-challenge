// from data.js
let tableData = data;

// YOUR CODE HERE!
let button = d3.select("#filter-btn");

button.on("click", () => {
    console.log('hello world');
    // The above is a sanity check on my half //

    let inputElement = d3.select('#datetime');
    // Datetime is the id of the input tag //

    let inputValue = inputElement.property("value");

    // Sanity check
    console.log(inputValue);

    // Seeing if the data works
    console.log(tableData);

    let filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    // sanity check
    console.log(filteredData)

    let ufoLists = d3.select(".ufo-table");

    ufoLists.html("");

    let dateTimeTable = filteredData.map(tableData => tableData.datetime);
    let cityTable = filteredData.map(tableData => tableData.city);
    let countryTable = filteredData.map(tableData => tableData.state);
    let shapeTable = filteredData.map(tableData => tableData.shape);
    let durationMinutesTable = filteredData.map(tableData => tableData.durationMinutes);
    let commentsTable = filteredData.map(tableData => tableData.comments);

    console.log(`
    ${dateTimeTable}
    ${cityTable}
    ${countryTable}
    ${shapeTable}
    ${durationMinutesTable}
    ${commentsTable}
    `)

    ufoLists.append("td").text(tableData.datetime);
    ufoLists.append("td").text(tableData.city);
    ufoLists.append("td").text(tableData.state);
    ufoLists.append("td").text(tableData.country);
    ufoLists.append("td").text(tableData.shape);
    ufoLists.append("td").text(tableData.durationMinutesa);
    ufoLists.append("td").text(tableData.comments);

    
});