// from data.js
let tableData = data;

// YOUR CODE HERE!
let button = d3.select("#filter-btn");

button.on("click", () => {
    console.log('hello world');
    // The above is a sanity check on my half //

    let inputElement = d3.select('#datetime');
    // Datetime is the id of the input tag //

    let inputValue = inputElement.property("value").toLowerCase();

    // Sanity check
    console.log(inputValue);

    // Seeing if the data works
    console.log(tableData);

    // This is for level 1
    // let filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    let filteredData = tableData.filter(tableData => tableData.datetime === inputValue 
        || tableData.city === inputValue
        || tableData.state === inputValue
        || tableData.country === inputValue
        || tableData.shape === inputValue
        // Holy carp I cannot believe that actually works its so fishing stupid
        );

    // sanity check
    console.log(filteredData)

    
    let ufoLists = d3.select("tbody");

    ufoLists.html("");

    let dateTimeTable = filteredData.map(tableData => tableData.datetime);
    let cityTable = filteredData.map(tableData => tableData.city);
    let stateTable = filteredData.map(tableData => tableData.state);
    let countryTable = filteredData.map(tableData => tableData.country);
    let shapeTable = filteredData.map(tableData => tableData.shape);
    let durationMinutesTable = filteredData.map(tableData => tableData.durationMinutes);
    let commentsTable = filteredData.map(tableData => tableData.comments);

    // // Sanity Check

    filteredData.forEach(i => {
        console.log(i);
        // ufoLists.append("td").text(`${cityTable[i]}`);
        let row = ufoLists.append("tr");

        Object.entries(i).forEach(([key, value]) => {
            console.log(key, value);
            ufoLists.append("td").text(`${value}`);
            
            // let cell = row.text(value);
            // cell.text(value);
        });
    });

    // console.log(`
    // ${dateTimeTable}
    // ${cityTable}
    // ${countryTable}
    // ${shapeTable}
    // ${durationMinutesTable}
    // ${commentsTable}
    // `)


    
    // ufoLists.append("td").text(`${dateTimeTable}`);
    // ufoLists.append("td").text(`${cityTable}`);
    // ufoLists.append("td").text(`${stateTable}`);
    // ufoLists.append("td").text(`${countryTable}`);
    // ufoLists.append("td").text(`${shapeTable}`);
    // ufoLists.append("td").text(`${durationMinutesTable}`);
    // ufoLists.append("td").text(`${commentsTable}`);
    
    
});