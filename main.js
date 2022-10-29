var score1 = 0, score2 =0
var paddleY;

var playerscore =0;
var audio1;
var pcscore =0;

var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}

function setup(){
    var canvas = createCanvas(700,600);
    canvas.parent("canvas");
}


function draw(){
    background(0);


    fill("pink");
    stroke("purple")
    rect(680, 0, 20, 700)

    fill("pink");
    stroke("purple")
    rect(0, 0, 20, 700)
    
}