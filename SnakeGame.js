let sWidth=40,rows,cols,snake1,score=0,framerate=8;

let current=0;
function setup() {
    let cnv= createCanvas(800,800);
    background(220);
    frameRate(framerate);
    rows=width/sWidth;
    cols=rows;
     snake1 = new snake();
    
    
    

}
function keyPressed() {
    if (keyCode === LEFT_ARROW && current!=6) {
      current = 4;
    }else if (keyCode === RIGHT_ARROW && current!=4) {
        current = 6;
    }else if (keyCode === UP_ARROW && current!=2) {
        current = 8;
    }else if (keyCode === DOWN_ARROW && current!=8) {
        current = 2;
    } 
  }


function draw() {
    background(220);
    DrawGuideLines();
    
    snake1.show();
    snake1.move();
    textSize(32);
    fill(0, 102, 153);
    text('score : ' + score, 10, 60);
    fill('red');
    text('The Impossible Snake Game', 100, 200);
    
}













function DrawGuideLines(){
    stroke(150);
    for(let i=0;i<cols;i++){
        line(sWidth*i,0,sWidth*i,height);
    }
    for(let j=0;j<rows;j++){
        line(0,sWidth*j,width,sWidth*j);
    }
}