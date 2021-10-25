class Question{
    constructor(){

        this.title = createElement("h1");
        this.input1 = createInput("Enter your name: ") //placeholder
        this.input2 = createInput("Enter your answer: ");
        this.button = createButton("Submit");
        this.question = createElement("h2");
        this.option1 = createElement("h3");
        this.option2 = createElement("h3");
        this.option3 = createElement("h3");
        this.option4 = createElement("h3");
        
    }
    hide(){
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }
    display(){
        this.title.html("My Quiz Game");
        this.title.position(350, 0);

        this.input1.position(150, 230);
        this.input2.position(350, 230);

        this.button.position(290, 300);
        this.question.html("Question: What starts and ends with the letter 'e' but has only one letter? ");
        this.question.position(150, 80);
        
        this.option1.html("1: Envelope");
        this.option2.html("2: Everyone");
        this.option3.html("3: Estimate");
        this.option4.html("4: Example");

        this.option1.position(150, 100);
        this.option2.position(150, 120);
        this.option3.position(150, 140);
        this.option4.position(150, 160);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();

            contestantCount = contestantCount + 1;
            contestant.index = contestantCount;

            contestant.update();
            contestant.updateCount(contestantCount);


        })










    }
}