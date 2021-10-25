class Contestant{
    constructor(){
        //info related to the contestant
        this.name = null;
        //index: 1, 2, 3, 4 (contestant1, contestant2, ...)
        this.index = null;
        this.answer = 0;

    }
    //to get the count of the players
    //going to the database: database.ref("nodename")
    getCount(){
        var contestantCountRef = database.ref("contestantCount");
        //reading the value of the node: .on()
        //collecting the value of the node from the database and going to the game: data.val()
        contestantCountRef.on("value", (data)=>{
            contestantCount = data.val()
        })
    }

    //update the count value of the contestant in the database if a new player joins the game
    updateCount(count){
        database.ref("/").update({
            contestantCount: count
        })

    }

    //update function will update the info related to the contestant 
    update(){
        var contestantIndex = "contestants/Contestant" + this.index;
        database.ref(contestantIndex).set({
            name: this.name, 
            answer: this.answer
        })

    }

    //to extract the info of a player from the database
    static getPlayerInfo(){
        var contestantInfoRef = database.ref("contestants");
        contestantInfoRef.on("value", (data) => {
            allContestants = data.val()
        })
    }


    display(){

    }
}