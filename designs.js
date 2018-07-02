// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
  // Your code goes here!
  event.preventDefault();

  let height = document.querySelector('#inputHeight').value;
  let width  = document.querySelector('#inputWidth').value;

  let table = document.querySelector('#pixelCanvas');


  //remove previous table
  if (table.hasChildNodes() ) {
    //remove the whole table, hence remove all table rows
    //get childNodes and convert them to an Array
    let myArray = Array.from(table.childNodes);
    //remove each row of the table
    myArray.forEach(function(row){
      row.remove();
    });

	}

  //create table
  for (let i = 0; i < height; i++) {

  	    let row = document.createElement('tr');

  	for(let j = 0; j < width; j++) {

      		let column = document.createElement('td');
          row.appendChild(column);

  	} //end for j

  	table.appendChild(row);

  } //end for i



}


document.addEventListener('submit', makeGrid);
