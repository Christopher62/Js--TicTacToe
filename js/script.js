var tab = document.getElementById("tableau");
for( var i=0; i<3; i++ ){
  var row = tab.insertRow();
  for( var j=0; j<3; j++){
    var cells = row.insertCell();
    cells.className = "noplayer";
    cells.onclick = clickCell;
  }
}
var cells = tab.getElementsByTagName('td');

var player = 1;

function clickCell(e){
  if(e.target.className == "noplayer"){
    if(player ==1){
      player = 2;
      e.target.innerHTML = "X";
      e.target.className = "player1";
    }else if(player ==2){
      player = 1;
      e.target.innerHTML = "O";
      e.target.className = "player2";
    }
  }
}

win();
function win(){
  if(cells[0].innerHTML == "X" && cells[1].innerHTML == "X" && cells[2].innerHTML == "X"){
    alert("test alert");
  }
    // return true;
}
