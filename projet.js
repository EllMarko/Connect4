let v='v' // represente une case vide 
let y='y' // represente un pion jaune 
let r='r' // represente un pion rouge
let score1=0
let score2=0
let randomPlayer=[1,2];
let random = Math.floor(Math.random());
let player = randomPlayer[random]
// Récupérer la valeur de col
let grille =[
  ['v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v']
];
let timer
let time = 0
grille[0][6]='v'
const col0= 0
const col1= 1
const col2= 2
const col3= 3
const col4= 4
const col5= 5
const col6= 6

function afficheP4() {
      let leP4=document.getElementById("game");
      insertion="<table border=0 cellspacing=0 cellpadding=0>";
  
      for(let i=0;i<6;i++)
      {
      insertion+="<tr>";
          for(let j=0;j<7;j++)
          {
              insertion+="<td>";
              insertion+="<div>";
              switch(grille[i][j])
              {
              case ('v'):
                  insertion+="<img width='100'height='100' src='images/blank.jpg'>";
                break
              case ('y'):
                  insertion+="<img width='100' height='100'src='images/yellow.jpg'>";
                break
              case ('r'):
                  insertion+="<img width='100' height='100' src='images/red.jpg'>";
                break
              }
              insertion+="</div>";
              insertion+="</td>";
          }
      insertion+="</tr>";
      }  
      
      insertion+="</table>";
      
      leP4.innerHTML=insertion;
  }
  console.log(grille);
  
  function pieceColor(){
    if(player==1){
      color = 'r'
      
      return color;
      
    }else{
      color = 'y'
      
      return color;
    }
  }
  console.log(grille);
  

  console.log(grille);
  
  function getLigneVide(column) {
    var hauteur = grille.length;
  
    for (var ligne = hauteur - 1; ligne >= 0; ligne--) {
  
      if (grille[ligne][column] === 'v') {
        return ligne;
      }
    }
    return -1;
  }
  console.log(getLigneVide(0))
  

function getColonnedVide(ligne) {
var largeur = grille[ligne].length;

  for(var column= largeur -1;column<=6; column++){
    if(grille[ligne][column]==='v'){
      return column;
    }
  return -1
}}
  function placePawn(column) {
    color = pieceColor();
    if(player ===1){
      if (column < 0 || column > 7) {
        return false;
      }
      for (let row = getLigneVide(column); row >= 0; row--) {
        if (grille[row][column] === 'v') {
          console.log(row)
          console.log(column)
          grille[row][column] = color;
          console.log (color)
          verifRow(row)
          console.log(verifRow(row))
          verifColumn(column)
          console.log(verifColumn(column))
          verifDiags(row, column,0)
          verifDiags(row, column,1)
          console.log(verifDiags(row, column,0))
          console.log(verifDiags(row, column,1))
          win(row, column)
          
          player++
          break;
        }
      }
      afficheP4();
      return true;
    }else{
      if (column < 0 || column > 7) {
        return false;
      }
      for (let row = getLigneVide(column); row >= 0; row--) {
        if (grille[row][column] === 'v') {
          console.log(row)
          console.log(column)
          grille[row][column] = color;
          console.log (color)
          verifRow(row)
          console.log(verifRow(row))
          verifColumn(column)
          console.log(verifColumn(column))
          verifDiags(row, column,0)
          verifDiags(row, column,1)
          console.log(verifDiags(row, column,0))
          console.log(verifDiags(row, column,1))
          win(row, column)
          player --
          break;
        }
      }
      afficheP4();
      return true;
    
  }
  }

function verifRow(x){
  let sumCol = 0;

  for(let cols= 0; cols<=grille[x].length-1 ;cols++){
    if(grille[x][cols]==pieceColor()){
      sumCol++;
      if (sumCol == 4) {
        return true;
      }
    } else {
      sumCol = 0;
    }
  }
  return false;
}

  
function verifColumn(y){
    let sumRow=0; 
    for(let rows= 0; rows<=grille.length-1 ;rows++){
      if(grille[rows][y]==pieceColor()){
        sumRow++ 
      }
      else if(grille[rows][y]!==pieceColor()){
        sumRow=0
      }
  console.log(sumRow)}
    if(sumRow>=4){
      return true
    }else{
      return false 
    }
  }

  function verifDiags( x, y, direction) {
    
    let sumDiags=0

    if (direction === 0) {
        if ((x === grille.length-1 && y === 0)) {
            return false;
        }

        while (x > 0 && y > 0) {
            x -= 1;
            y -= 1;
        }
        while (x < grille.lenght-1 && y < grille[x].length-1) {
            if (grille[x][y] === 'v') {
                return false;
            }
            sumDiags++;
            x += 1;
            y += 1;
        }
    }

    if (direction === 1) {
        if ((x === 0 && y === 0)) {
            return false;
        }
        while (x > 0 && y < grille[x].length-1) {
            x -= 1;
            y += 1;
        }
        while (x <= grille.length-1 && y > 0) {
            if (grille[x ][y ] === 'v') {
                return false;
            }
            sumDiags++;
            x += 1;
            y -= 1;
        }
    }console.log(sumDiags);
    if(sumDiags===4){
    return true;
}}

// function verifDiags(x, y, direction){
//     for (let i = 0; i < grille.length; i++) {
//       for (let j = 0 ; j < grille[i].length; j++){
//         if (grille[i][j] === "r" || grille[i][j] === "y"){
//           if (grille[i][j] === grille[i+1][j+1] && grille[i][j] === grille[i+2][j+2] && grille[i+3][j+3]){
//             alert("diago")
//           }
//         }
//       }
//     }
// }

function win (x,y){
  if(player ===1 && (verifColumn(y) ||verifRow(x) ||verifDiags(x,y,0) ||verifDiags(x,y,1))){
    alert('les rouges ont gagnés',clearGrille(),score())
    reset()
  }else if (player ===2 && (verifColumn(y)  ||verifRow(x)  ||verifDiags(x,y,0)||verifDiags(x,y,1) )){
    alert('les jaunes ont gagnés',clearGrille(),score());
    reset()
  }
}
function clearGrille(){
  grille =[
    ['v','v','v','v','v','v','v'],
    ['v','v','v','v','v','v','v'],
    ['v','v','v','v','v','v','v'],
    ['v','v','v','v','v','v','v'],
    ['v','v','v','v','v','v','v'],
    ['v','v','v','v','v','v','v']
  ];
}

function scorePlayer1(){
  if(player===1){
    score1+=1
    return score1
  }
  else{
    return score1
  }
}
function scorePlayer2(){
  if(player===2){
    score2 +=1
    return score2
  }
  else{
    return score2
  }
}

function score(){
  scoreDisplay=document.getElementById('score')
  scoreDisplay.innerHTML=scorePlayer1()+':'+scorePlayer2()
}



function start() {
  time = 0;
  timer = setInterval(displayTime, 1000);
  afficheP4()
  affichescore()
}

function displayTime() {

  time++;
  document.getElementById('timer').innerText = formatTime(time);
}

function formatTime(secs) {
  let minutes = secs > 60 ? parseInt(secs / 60) : 0;
  minutes = minutes > 9 ? minutes : '0' + minutes;
  let seconds = parseInt(secs % 60);
  seconds = seconds > 9 ? seconds : '0' + seconds;
  return `${minutes}:${seconds}`;
}

function reset() {
  clearGrille()
  start();
  afficheP4();
}

function btnreset() {
  location.reload()
}