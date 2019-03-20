$(document).ready(function () {
  $('#beginner').click(function() {
    console.log("beginner");
  });
  $('#intermediate').click(function() {
    console.log("Intermediate");
  });
  $('#expert').click(function() {
    console.log("Expert");
  });

  function setBoard(){
    document.getElementById("gameboard");
  }
});
