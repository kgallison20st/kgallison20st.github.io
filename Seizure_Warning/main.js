var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;


function setup() {
    createCanvas(480, 600);
    
    frameRate(5);
    
    
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/2;
    
    rVal = random(-1,1);
    gVal = random(-1,1);
    bVal = random(1,1);
    
}

function draw() {
    
    var isShifted = false;
    
    var y = 0;
    while (y <= height) { 
        
        var x;
        
        if (isShifted) {
            x = circleRadius;
        } else {
            x = 0;
        }
        
        while (x <= width) {
            fill(color(rVal, gVal, bVal));
            stroke(color(rVal, gVal, bVal))
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
    }
    
    y = y + circleRadius;
    isShifted = !isShifted;
    
    rVal = rVal - 2;
    gVal = gVal + 7;
    bVal = bVal + 3;
    
  }
  
  if (gVal=255) {
    rVal = random(0,255);
    gVal = random(0,255);
    bVal = random(0,255);
  }
}

mousePressed = function() {
    noLoop();
};

mouseReleased = function() {
    loop();
};

function keyPressed() {
    if (keyCode === 115 || keyCode === 83){
        saveCanvas('geometricPattern', 'png');
    } 
    return false;
}
  