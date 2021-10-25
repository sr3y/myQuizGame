var canva;
var quiz, question;
var allContestants = [];
var contestant, contestantCount;
var gameState = 0;
var database;

function setup(){
  canvas = createCanvas(900,400);

  database = firebase.database();
  
  quiz = new Quiz();
  quiz.start();

  quiz.getState();
}


function draw(){
  background("pink");
  if(contestantCount == 3){
    quiz.update(1);
  }

  if(gameState == 1){
    clear();
    quiz.play();
  }
}
