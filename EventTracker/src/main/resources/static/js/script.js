window.addEventListener('load', function(e){
	console.log("LOADED PAGE");
	init();
});


function init() {
	let searchButton = document.getElementById('search');
	// event listeners
	searchButton.addEventListener('click', function(e) {
		searchButton.parentElement.removeChild(searchButton);
		displayEventsSearch();
	});

}


function displayEventsSearch(){
	var results = document.getElementById('searchResults');
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/events', true);

	xhr.onreadystatechange = function() {

	if (xhr.readyState === 4 && xhr.status < 400) {
		var data = JSON.parse(xhr.responseText);

		// create table
		var dataTable = document.createElement('table');
		dataTable.style.border = "solid black";

		// create header
		var dataTableHead = document.createElement('thead');

		// create body
		var dataTableBody = document.createElement('tbody');

		// create row for header
		let headRow = document.createElement('tr');
		
		// find the key names from data to use for the header data
		for (let heading in data[0]) {
		    //create a header data element
		    let headData = document.createElement('th');

		    //fill it with the key names (& change first letter to toUpperCase)
		    headData.textContent = heading.charAt(0).toUpperCase() + heading.slice(1);

		    //add head data to the header row
		    headRow.appendChild(headData);

		    //add the header row to the table header
		    dataTableHead.appendChild(headRow);
		  }


		// cycle through data array to fill table with data
		data.forEach(function(v, i , a) {
			let row =  document.createElement('tr');
			console.log(data);
			// find the key names from data to use for the header data
			for (let key in v) {
				// create a column of data for each key value in this object
				let tabledata = document.createElement('td');

				// set the data columns = to the key values
				tabledata.textContent = v[key];
			
				// add those key values to the row
				row.appendChild(tabledata);
			  }
			
			// add the row to the table body
			dataTableBody.appendChild(row);

		});

    // add the table header to the table
    dataTable.appendChild(dataTableHead);
    // add the table body to the table
    dataTable.appendChild(dataTableBody);

    // add the table to the document
    results.appendChild(dataTable);

	}

	if (xhr.readyState === 4 && xhr.status >= 400) {
		console.error(xhr.status + ': ' + xhr.responseText);
	}
};

xhr.send(null);

};