  var body = document.getElementsByTagName('body')[0];
  body.textContent = '';


var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:/api/events', true);

xhr.onreadystatechange = function() {
  console.log(xhr.readyState);
  console.log(xhr.status);
	if (xhr.readyState === 4 && xhr.status < 400) {
		var data = JSON.parse(xhr.responseText);

    //create table
    var dataTable = document.createElement('table');
    dataTable.style.border = "solid black";

    //create header
    var dataTableHead = document.createElement('thead');

    //create body
    var dataTableBody = document.createElement('tbody');

    //create row for header
    let headRow = document.createElement('tr');
    //find the key names from usdata to use for the header data

      //create a header data element
      let headData1 = document.createElement('th');
      headData1.textContent = 'Title'
      let headData2 = document.createElement('th');
      headData2.textContent = 'Description'
      let headData3 = document.createElement('th');
      headData3.textContent = 'Date'

      //add head data to the header row
      headRow.appendChild(headData1);
      headRow.appendChild(headData2);
      headRow.appendChild(headData3);

      //add the header row to the table header
      dataTableHead.appendChild(headRow);

    //cycle through data array to fill table with data
    data.forEach(function(v) {
      //create a row
      let row =  document.createElement('tr');

      //create a column of data for each key value in this object
      let data1 = document.createElement('td');
      let data2 = document.createElement('td');
      let data3 = document.createElement('td');
      //set the data columns = to the key values
      data1.textContent = v.title;
      data2.textContent = v.description;
      data3.textContent = v.startDate;

      //add those key values to the row
      row.appendChild(data1);
      row.appendChild(data2);
      row.appendChild(data3);

      //add the row to the table body
      dataTableBody.appendChild(row);

    })

    //add the table header to the table
    dataTable.appendChild(dataTableHead);
    // add the table body to the table
    dataTable.appendChild(dataTableBody);

    //add the table to the document
    document.body.appendChild(dataTable);

	}

	if (xhr.readyState === 4 && xhr.status >= 400) {
		console.error(xhr.status + ': ' + xhr.responseText);
	}
};

xhr.send(null);
