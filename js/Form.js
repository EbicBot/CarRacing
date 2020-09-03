class Form
{
    constructor()
    {
        this.title=createElement("h2");
        this.input=createInput("name");
        this.button=createButton("Join");
        this.greeting=createElement("h2")
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide();
    }
    display()
    {
        this.title.html("Car Racing Multiplayer")
        this.title.position(200,0);
        this.input.position(200,200);
        this.button.position(250,250);
        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount);
            this.greeting.html("Hello"+player.name)
            this.greeting.position(200,200);
        });
    }
}