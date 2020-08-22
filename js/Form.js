class Form{
    constructor(){

    }

    display(){
        var title=createElement("h2")
        title.html("Car Racing Multiplayer")
        title.position(200,0);
        var input=createInput("name")
        input.position(200,200);
        var button=createButton("Join")
        button.position(250,250);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount);
            var greeting=createElement("h2")
            greeting.html("Hello"+name)
            greeting.position(200,200);
        });
    }
}