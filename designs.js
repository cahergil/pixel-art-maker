/*
*
* changeColor
*
*/
function changeColor(event) {
  //console.log(event);
  let selectedColor =  document.querySelector('#colorPicker').value;
  if( event.target.hasAttribute("style") && rgbToHex(event.target.style.backgroundColor) !== selectedColor) {

    event.target.style.backgroundColor = selectedColor;


  } else if( event.target.hasAttribute("style") ){

    event.target.removeAttribute("style");

  } else {

    event.target.style.backgroundColor = selectedColor;
  }

}

/*
*
* makeGrid
*
*/
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
          column.onclick = changeColor;
          row.appendChild(column);

  	} //end for j

  	table.appendChild(row);

  } //end for i

}

/*
*
* rgbToHex
*
*/
function rgbToHex(col)
{
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
}



//Eventlisteners
document.addEventListener('submit', makeGrid);
