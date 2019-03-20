$(document).ready(function () {
  $('#beginner').click(function() {
    drawTable(9);
    createMines(10)
    console.log("beginner");
  });
  $('#intermediate').click(function() {
    drawTable(16);
    createMines(40);
    console.log("Intermediate");
  });
  $('#expert').click(function() {
    drawTable(24);
    createMines(99);
    console.log("Expert");
  });

  // function createArray(size) {
  //   var board = [];
  //   for(let row = 0; row<size; row++){
  //     board[row] = [];
  //     for(let column = 0; column<size; column++){
  //       board[row][column]='*';
  //     }
  //   }
  //   return board;
  // }
  function drawTable(size) {
  var body = document.getElementsByTagName("body")[0];

  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < size; i++) {

    var row = document.createElement("tr");

    for (var j = 0; j < size; j++) {

      var cell = document.createElement("td");
      // var cellText = document.createTextNode("cell in row "+i+", column "+j);
      // cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }
    tbl.appendChild(tblBody);

    body.appendChild(tbl);

    tbl.setAttribute("border", "2");
    gameboard.appendChild(tbl);
  }

  function newGame(){

  }
  function createMines(bombs){

  }

  function revealMines(){

  }
});
