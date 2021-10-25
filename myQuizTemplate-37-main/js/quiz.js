class Quiz{
    constructor(){

    }

    //to find the current state of the game from the database
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", (data) => {
            gameState = data.val();
        })
    }

    //assign the value of "state" (which is keeping a track of the state of the game) of the game 
    //to the "gamestate" (in the database) database
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }


    async start(){
        if(gameState === 0 ){
            contestant = new Contestant();
            var contestantCountRef = await database.ref("contestantCount").once("value")
            
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val()
                contestant.getCount()
            }

        }
        
        question = new Question();
        question.display();

        
    }

    play(){
        question.hide();
        background("yellow");
        
        text("Result of the quiz", 340, 50);
        Contestant.getPlayerInfo(); //static functions are called by class name 
        
        if(allContestants != undefined){
            var displayAnswers = 230;

            //plr = index number or location of the contestant in the array
            for(var plr in allContestants){
                var correctAnswer = "2";
                if (correctAnswer === allContestants[plr].answer){
                    fill("green");
                }
                else{
                    fill("red");
                }
                displayAnswers += 30;
                text(allContestants[plr].name + ": " + allContestants[plr].answer, 250, displayAnswers);
            }
        }

    }
     
}