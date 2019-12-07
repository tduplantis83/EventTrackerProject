window.addEventListener('load', function(e){
	console.log("LOADED PAGE");
	init();
});


function init() {
	let results = document.getElementById('searchResults');
	let allButton = document.getElementById('allevents');
	let allEventsButtonDiv = document.getElementById('alleventsDiv');
	let searchButton = document.getElementById('search');
	let searchEventsButtonDiv = document.getElementById('searcheventsDiv');
	let createButton = document.getElementById('create');
	let createEventsButtonDiv = document.getElementById('createeventsDiv');
	let createEventForm = document.getElementById('createForm');
	let createEventButton = document.getElementById('createNewButton')

	
	// all events button listener
	allButton.addEventListener('click', function(e) {
		e.preventDefault();
		location.href = "index.html";
	});
	
	// search button listener
	searchButton.addEventListener('click', function(e) {
		e.preventDefault();
		location.href = "search.html";
	});
	
	// create button listener
	createButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		location.href = "create.html";
	});
	
	// create new event button listener
	createEventButton.addEventListener('click', function(e) {
		var title = document.createEventForm.title.value;
		var description = document.createEventForm.description.value;
		var category = document.createEventForm.category.value;
		var startDate = document.createEventForm.startDate.value;
		var endDate = document.createEventForm.endDate.value;
		var location = document.createEventForm.location.value;
		var street = document.createEventForm.street.value;
		var city = document.createEventForm.city.value;
		var state = document.createEventForm.state.value;
		var zip = document.createEventForm.zip.value;

		createNewEvent(title, description, category, startDate, endDate, location, street, city, state, zip);
		
		document.createForm.reset();
	
	

	});

function createNewEvent(title, description, category, startDate, endDate, location, street, city, state, zip) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/events', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON
	// request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				var data = JSON.parse(xhr.responseText);
				console.log(resposeText);
// displaySearchResults('api/events');
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	var userObject = {
		title : title,
		description : description,
		category : category,
		startDate : startDate,
		endDate : endDate,
		location : location, 
		street : street, 
		city : city,
		state : state, 
		zip : zip
	};
	var userObjectJson = JSON.stringify(userObject); // Convert JS object to
	// JSON string

	xhr.send(userObjectJson);
};

function displaySearchResults(uri){
	let results = document.getElementById('searchResults');
	let allButton = document.getElementById('allevents');
	let searchButton = document.getElementById('search');
	let searchFormDiv = document.getElementById('searchForm');
	
	var xhr = new XMLHttpRequest();

	xhr.open('GET', uri, true);

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
		
		if(Array.isArray(data)){
			// find the key names from data to use for the header data
			for (let heading in data[0]) {
				// create a header data element
				let headData = document.createElement('th');

				// fill it with the key names (& change first letter to
				// toUpperCase)
				headData.textContent = heading.charAt(0).toUpperCase() + heading.slice(1);

				// add head data to the header row
				headRow.appendChild(headData);

				// add the header row to the table header
				dataTableHead.appendChild(headRow);
			}

			// cycle through data array to fill table with data
			data.forEach(function(v, i , a) {
				let row =  document.createElement('tr');
				// find the key names from data to use for the data
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
		}	
		else {
			// find the key names from data to use for the header data
			for (let heading in data) {
				// create a header data element
				let headData = document.createElement('th');

				// fill it with the key names (& change first letter to
				// toUpperCase)
				headData.textContent = heading.charAt(0).toUpperCase() + heading.slice(1);

				// add head data to the header row
				headRow.appendChild(headData);

				// add the header row to the table header
				dataTableHead.appendChild(headRow);
			}
			
			let row =  document.createElement('tr');
			// find the key names from data to use for the header data
			for (let key in data) {
				// create a column of data for each key value in this object
				let tabledata = document.createElement('td');

				// set the data columns = to the key values
				tabledata.textContent = data[key];
		
				// add those key values to the row
				row.appendChild(tabledata);
			}
		
			// add the row to the table body
			dataTableBody.appendChild(row);
		}

    // add the table header to the table
    dataTable.appendChild(dataTableHead);
    // add the table body to the table
    dataTable.appendChild(dataTableBody);

    // add the table to the document
    results.appendChild(dataTable);
    
    results.scrollIntoView({behavior: 'smooth'});

	}

	if (xhr.readyState === 4 && xhr.status >= 400) {
		console.error(xhr.status + ': ' + xhr.responseText);
	}
};

xhr.send(null);

};
};

