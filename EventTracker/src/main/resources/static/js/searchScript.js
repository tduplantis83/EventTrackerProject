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
	let searchByIDInput = document.getElementById('eventID');
	let searchByIDButton = document.getElementById('eventIDButton');
	let searchFormDiv = document.getElementById('searchById');
	let searchByTitleInput = document.getElementById('eventTitle');
	let searchByTitleButton = document.getElementById('eventTitleButton');
	let searchByDescInput = document.getElementById('eventDesc');
	let searchByDescButton = document.getElementById('eventDescButton');
	let searchByCatInput = document.getElementById('eventCat');
	let searchByCatButton = document.getElementById('eventCatButton');
	let searchByDateBetweenInput1 = document.getElementById('startDate');
	let searchByDateBetweenInput2 = document.getElementById('endDate');
	let searchByDateBetweenButton = document.getElementById('dateBetweenButton');
	let searchByYearInput = document.getElementById('year');
	let searchByYearButton = document.getElementById('yearButton');
	let searchByMonthYInput = document.getElementById('monthY');
	let searchByYearMInput = document.getElementById('yearM');
	let searchByYearMonthButton = document.getElementById('yearMonthButton');
	let searchByLocationInput = document.getElementById('location');
	let searchByLocationButton = document.getElementById('locationButton');
	let searchByKeywordInput = document.getElementById('keyword');
	let searchByKeywordButton = document.getElementById('keywordButton');
	let searchByStreetInput = document.getElementById('street');
	let searchByStreetButton = document.getElementById('streetButton');
	let searchByCityInput = document.getElementById('city');
	let searchByCityButton = document.getElementById('cityButton');
	let searchByStateInput = document.getElementById('state');
	let searchByStateButton = document.getElementById('stateButton');
	let searchByZipInput = document.getElementById('zip');
	let searchByZipButton = document.getElementById('zipButton');
	
	
	
	// all events button listener
	allButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		searchFormDiv.textContent='';
		displaySearchResults('api/events');
	});
	
	// search button listener
	searchButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		location.href = "search.html";
	});
	
	// create button listener
	createButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		location.href = "create.html";
	});
	
	// search events by id button listener
	searchByIDButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		displaySearchResults('api/events/'+searchByIDInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by keyword button listener
	searchByKeywordButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		displaySearchResults('api/events/search/'+searchByKeywordInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by title button listener
	searchByTitleButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		displaySearchResults('api/events/search/title/'+searchByTitleInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by desc button listener
	searchByDescButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		displaySearchResults('api/events/search/description/'+searchByDescInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by category button listener
	searchByCatButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		displaySearchResults('api/events/search/category/'+searchByCatInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by start date between button listener
	searchByDateBetweenButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		displaySearchResults('api/events/search/dateRange/'+searchByDateBetweenInput1.value+'/'+searchByDateBetweenInput2.value);
		e.target.parentElement.reset();
	});
	
	// search events by start date year button listener
	searchByYearButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		displaySearchResults('api/events/search/year/'+searchByYearInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by start date month & year button listener
	searchByYearMonthButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		console.log(searchByYearMInput.value);
		displaySearchResults('api/events/search/year/month/'+searchByYearMInput.value+'/'+searchByMonthYInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by location button listener
	searchByLocationButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		console.log(searchByYearMInput.value);
		displaySearchResults('api/events/search/location/'+searchByLocationInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by street button listener
	searchByStreetButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		console.log(searchByYearMInput.value);
		displaySearchResults('api/events/search/street/'+searchByStreetInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by city button listener
	searchByCityButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		console.log(searchByYearMInput.value);
		displaySearchResults('api/events/search/city/'+searchByCityInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by state button listener
	searchByStateButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		console.log(searchByYearMInput.value);
		displaySearchResults('api/events/search/state/'+searchByStateInput.value);
		e.target.parentElement.reset();
	});
	
	// search events by zip button listener
	searchByZipButton.addEventListener('click', function(e) {
		e.preventDefault();
		results.textContent = '';
		console.log(searchByYearMInput.value);
		displaySearchResults('api/events/search/zip/'+searchByZipInput.value);
		e.target.parentElement.reset();
	});

}

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


		
		if(Array.isArray(data)){
			// create row for header
			// cycle through data array to fill table with data
			// create a header data element
			data.forEach(function(v, i , a) {
				// create table
				var dataTable = document.createElement('table');
				
				// create header
				var dataTableHead = document.createElement('thead');
				
				// create body
				var dataTableBody = document.createElement('tbody');
				
				// create foot
				var dataTableFoot = document.createElement('tfoot');
				// create row for header
				let headRow = document.createElement('tr');
				let tablerow =  document.createElement('tr');
				let footrow =  document.createElement('tr');
				let footdata = document.createElement('td');
				
				// add an update & delete button to table footer
				var updateButton = document.createElement('button');
				updateButton.class="btn btn-warning btn-md btn-block";
				updateButton.textContent='Update';
				
				var deleteButton = document.createElement('button');
				deleteButton.class="btn btn-danger btn-md btn-block";
				deleteButton.textContent='Delete';
				
					// find the key names from data to use for the header data
					for (let key in v) {
						// create a header data element
						let headData = document.createElement('th');

						// fill it with the key names (& change first letter to
						// toUpperCase)
						headData.textContent = key.charAt(0).toUpperCase() + key.slice(1);


						
						// create a column of data for each key value in this
						// object
						let tabledata = document.createElement('td');
						
						// set the data columns = to the key values
						tabledata.textContent = v[key];
						
						// add head data to the header row
						headRow.appendChild(headData);
						// add the header row to the table header
						dataTableHead.appendChild(headRow);
						// add those key values to the row
						tablerow.appendChild(tabledata);
						// add the row to the table body
						dataTableBody.appendChild(tablerow);
						
						
						updateButton.value = v.id;
						deleteButton.value = v.id;
						footdata.appendChild(updateButton);
						footdata.appendChild(deleteButton);
						footrow.appendChild(footdata);
						dataTableFoot.appendChild(footrow);
						
						
						// add the table header to the table
						dataTable.appendChild(dataTableHead);
						// add the table body to the table
						dataTable.appendChild(dataTableBody);
						// add teh footer to the table
						dataTable.appendChild(dataTableFoot);
						
						// add the table to the document
						results.appendChild(dataTable);
						
						updateButton.addEventListener('click', function(e) {
							let upateForm = document.createElement('form');
							e.preventDefault();
							results.textContent = '';
							let event = updateButton

							updateEvent(event);
						});
						
						deleteButton.addEventListener('click', function(e) {
							var xhr = new XMLHttpRequest();
							// request body
							xhr.open("DELETE", 'api/events/'+deleteButton.value, true);
							xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON
							xhr.onreadystatechange = function() {
								
								console.log(xhr.readyState);
								console.log(xhr.responseText);
								
								if (xhr.readyState === 4 && xhr.status < 400) {
									var userObject = JSON.parse(xhr.responseText);
								}
								if (xhr.readyState === 4 && xhr.status >= 400) {
									console.error(xhr.status + ': ' + xhr.responseText);
								}
							};

							xhr.send(null);
							
						});
					}
			
				

			});
			
		}	
		else {
			// create table
			var dataTable = document.createElement('table');
			
			// create header
			var dataTableHead = document.createElement('thead');
			
			// create body
			var dataTableBody = document.createElement('tbody');
			
			// create foot
			var dataTableFoot = document.createElement('tfoot');
			// create row for header
			let headRow = document.createElement('tr');
			let tablerow =  document.createElement('tr');
			let footrow =  document.createElement('tr');
			let footdata = document.createElement('td');
			
			// add an update & delete button to table footer
			var updateButton = document.createElement('button');
			updateButton.class="btn btn-warning btn-md btn-block";
			updateButton.textContent='Update';
			

			var deleteButton = document.createElement('button');
			deleteButton.class="btn btn-danger btn-md btn-block";
			deleteButton.textContent='Delete';
			
				// find the key names from data to use for the header data
				for (let key in data) {
					// create a header data element
					let headData = document.createElement('th');

					// fill it with the key names (& change first letter to
					// toUpperCase)
					headData.textContent = key.charAt(0).toUpperCase() + key.slice(1);


					
					// create a column of data for each key value in this object
					let tabledata = document.createElement('td');
					
					// set the data columns = to the key values
					tabledata.textContent = data[key];
					
					// add head data to the header row
					headRow.appendChild(headData);
					// add the header row to the table header
					dataTableHead.appendChild(headRow);
					// add those key values to the row
					tablerow.appendChild(tabledata);
					// add the row to the table body
					dataTableBody.appendChild(tablerow);
					
					
					updateButton.value = data;
					deleteButton.value = data;
					footdata.appendChild(updateButton);
					footdata.appendChild(deleteButton);
					footrow.appendChild(footdata);
					dataTableFoot.appendChild(footrow);

					
					// add the table header to the table
					dataTable.appendChild(dataTableHead);
					// add the table body to the table
					dataTable.appendChild(dataTableBody);
					// add teh footer to the table
					dataTable.appendChild(dataTableFoot);
					
					// add the table to the document
					results.appendChild(dataTable);
					
					updateButton.addEventListener('click', function(e) {
						let upateForm = document.createElement('form');
						e.preventDefault();
						results.textContent = '';
						let event = updateButton.value

						updateEvent(event);
					});
					
					deleteButton.addEventListener('click', function(e) {
						var xhr = new XMLHttpRequest();
						// request body
						xhr.open("DELETE", 'api/events/'+deleteButton.value.id, true);
						xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON
						xhr.onreadystatechange = function() {
							
							console.log(xhr.readyState);
							console.log(xhr.responseText);
							
							if (xhr.readyState === 4 && xhr.status < 400) {
								var userObject = JSON.parse(xhr.responseText);
							}
							if (xhr.readyState === 4 && xhr.status >= 400) {
								console.error(xhr.status + ': ' + xhr.responseText);
							}
						};

						xhr.send(null);
						
					});
				}
		}
		
	
    
    results.scrollIntoView({behavior: 'smooth'});

	}

	if (xhr.readyState === 4 && xhr.status >= 400) {
		console.error(xhr.status + ': ' + xhr.responseText);
	}
};


xhr.send(null);

};


function updateEvent (event) {
	let results = document.getElementById('searchResults');
	
	console.log(event.id);
	let updateForm = document.createElement('form');
	updateForm.name = "updateForm";
	let input = document.createElement('input');
	input.type="text";
	input.name="title";
	input.value= event.title;
	
	updateForm.appendChild(input);
	results.appendChild(updateForm);
	
}