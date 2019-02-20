const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    READ: Symbol(" read"),
    OPEN: Symbol("open"),
    TASK: Symbol("task"),
    ENTER: Symbol("enter"),
    FIND: Symbol("find"),
    EXPLORE: Symbol("explore"),
    NOT: Symbol("not"),
    WIN: Symbol("win"),
    WATER: Symbol("water"),
    CLOSE: Symbol("close")
    
    });
    
    
    export default class Game{
    constructor(){
    this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
    let sReply = "";
    switch(this.stateCur){
    case GameState.WELCOMING:
    sReply = " i have a magic story .do you want to read it or Not?";
    this.stateCur = GameState.READ;
    break;
    case GameState.READ:
    if(sInput.toLowerCase().match("read")){
    sReply = "thanks for your interest,are you free to open the book right now or Not..???";
    this.stateCur = GameState.OPEN;
    }else{
    sReply ="you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }
    break;
    case GameState.OPEN:
    if(sInput.toLowerCase().match("open")){
    sReply = "here is some tasks of magic book as long as you are reading the book you are becoming a part of book.are you able to do tasks or Not ..???";
    this.stateCur = GameState.TASK;
    
    }else{
    sReply = "you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }
    break;
    case GameState.TASK:
    if(sInput.toLowerCase().match("task")){
    sReply = "first task will take you in dark and haunted Jungle, where you will see a well where you have to enter into dry and empty well.will you enter Or Not ";
    this.stateCur = GameState.ENTER;
    
    }else{
    sReply = "you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }
    break;
    case GameState.ENTER:
    if(sInput.toLowerCase().match("enter")){
    sReply = " now , you will see big amount of diamonds.you can get the diamonds but you have to find a Key of diamond store.you are able to Find or Not...? ";
    this.stateCur = GameState.FIND;
    
    }else{
    sReply = "you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }
    break;
    case GameState.FIND:
    if(sInput.toLowerCase().match("find")){
    sReply = "key is in the pocket of dead body of a man.first you have to explore dead body of man.are you able to explore or not.?";
    this.stateCur = GameState.EXPLORE;
    
    }else{
    sReply = "you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }
    break;
    case GameState.EXPLORE:
    if(sInput.toLowerCase().match("explore")){
    sReply = " you will have to do fight with dead body of man then you will get key.if you able to kill him then you can take key.are you able to win Or Not. .?";
    this.stateCur = GameState.WIN;
    
    }else{
    sReply = "you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }
    break;
    case GameState.NOT:
    if(sInput.toLowerCase().match("not")){
    sReply = "you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }else{
    sReply = "you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    
    }
    break;
    case GameState.WIN:
    if(sInput.toLowerCase().match("win")){
    sReply = "great, now you get key.but your another task is pending .now, you have to win a puzzle game inside well.if you across from puzzle game then you can reach near locker.are you able to across or not...??";
    this.stateCur = GameState.ACROSS;
    
    }else{
    sReply = "you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }
    break;
    case GameState.ACROSS:
    if(sInput.toLowerCase().match("across")){
    sReply = " good job,now you can open the locker and bring the diamonds .but before going outside you have to filled the well with water.are you able to bring water or Not.?";
    this.stateCur = GameState.WATER;
    
    }else{
    sReply = "you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }
    break;
    case GameState.WATER:
    if(sInput.toLowerCase().match("water")){
    sReply = " oops,you will drown in water because you filled well with water.sorry ,you will die ...select Close";
    this.stateCur = GameState.CLOSE;
    
    }else{
    sReply = "you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }
    break;
    case GameState.CLOSE:
    if(sInput.toLowerCase().match("close")){
    sReply = " this is the end of your life story and my book story,thanks for playing with me..";
    this.stateCur = GameState.NOT;
    
    }else{
    sReply ="you cannot say Not ,play game until you don't read the book..";
    this.stateCur = GameState.NOT;
    }
    break;
    
    }
    return([sReply]);
    }
    }