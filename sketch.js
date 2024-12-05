timer = 20
score = 0
let coin = [];
let player1;
let playerDirection;
let sceneNum = 0;
let walls;
let button_;
let rebutton_;
let cbutton_;
let crebutton_;
let menubutton_;
let batmansong;
let jocker;
let jockerNum = 2;
function preload() {
  //music
  space0 = loadImage('city.jpg');
  space1 = loadImage('night.png');
  space2 = loadImage('background sun.png');

  playImg = loadImage('batpigeon.png')
  play2Img = loadImage('spiderman pigeon.png')
  badImg = loadImage('joker.png')
  coinImg = loadImage('batcoin.png')
  AImg= loadImage('A+.png')
  batmansong = loadSound('batman.mp3')

}
function setup() {
  createCanvas(600, 400);
  batmansong.play()
   background(220);
   player1 = new Player();
   walls = new Walls();
    button_ = createButton('adult');
    button_.position(200, 200);
    button_.mousePressed(starts);
  rebutton_ = createButton('Restart')
  rebutton_.position(300, 200);
  rebutton_.mousePressed(restarts);
  crebutton_ = createButton('Restart')
  crebutton_.position(300, 200);
  crebutton_.mousePressed(crestarts);
    cbutton_ = createButton('student');
    cbutton_.position(380, 200);
    cbutton_.mousePressed(startc);
    menubutton_ = createButton('menu');
    menubutton_.position(300, 0);
    menubutton_.mousePressed(menu);
    for (i = 0; i<100; i++){
    coin[i] = new Coin(random(600),random(600))
    joker= new Joker(jockerNum);
  }
}
function startc() {
  sceneNum--
}
//start button function
function starts() {
  sceneNum++
}

//restart button function
function restarts() {
  sceneNum--
  timer = 20
  score = 0
  batmansong.play()
      for (i = 0; i<100; i++){
    coin[i] = new Coin(random(600),random(600))
  }
}
function crestarts() {
  sceneNum++
  timer = 20
  score = 0
      for (i = 0; i<100; i++){
    coin[i] = new Coin(random(600),random(600))
  }
}
function menu() {
  sceneNum = 0
    timer = 20
  score = 0
    for (i = 0; i<100; i++){
    coin[i] = new Coin(random(600),random(600))}
}
function draw(){
    background(220);
  
  rectMode(CENTER);
  //start
  if (sceneNum == 0) {
    background(220);
    push()
    button_.position(200, 200);
    cbutton_.position(380, 200);
    textSize(100);
     fill(random(0,255),random(0,255),random(0,255));
    text('Welcome', 100, 100);
    text('New Yorker', 70, 350);
     textSize(15);
    text('arrow keys to move', 80, 200);
    text('click here to start', 270, 200);
    text('collect to 50', 450, 200);
    pop()
    rebutton_.position(-300, 200);
    crebutton_.position(-300, 200);
  }  else if (sceneNum == -1) {//play student
    background(space0, 600, 400);
    player1.body2();
    player1.move();
    cbutton_.position(-300, 200);
    button_.position(-300, 200);
    rebutton_.position(-300, 200);
    crebutton_.position(-300, 200);
    push()
    fill(255)
    textSize(50)
     text(timer,20,50)
    text('score: '+ score,380,50)
    if (frameCount % 60==0){
      timer--
    }
   if(timer == 0 ){
     sceneNum--
   }
    pop()
     for (i = 0; i<100; i++){
    coin[i].body2()
    coin[i].checkCollision()
  }
    
  }else if (sceneNum == -2) { // end
    background(space2, 600, 400);
     crebutton_.position(300, 200);
    push()
    textSize(50)
    if(score>=50 ){
    fill(255, 204, 0)
     text('You got '+ score + 'A+ !!!',110,50)
    text('You are good!!!',110,100)
    pop()}else{
      push()
      fill(255, 204, 0)
      text('You got '+ score + 'A+ ',110,50)
      text('You failed:/',110,100)
      pop()
     
    }
  } else if (sceneNum == 1) {//play
    background(space0, 600, 400);
    player1.body();
    player1.move();
    button_.position(-300, 200);
        cbutton_.position(-300, 200);
   
    rebutton_.position(-300, 200);
    crebutton_.position(-300, 200);
    rebutton_.position(-300, 200);
    push()
    fill(255)
    textSize(50)
     text(timer,20,50)
    text('score: '+ score,380,50)
    if (frameCount % 60==0){
      timer--
    }
   if(timer == 0 ){
     sceneNum++
   }
    pop()
     for (i = 0; i<100; i++){
    coin[i].body()
    coin[i].checkCollision()
  }
    
  } else if (sceneNum == 2) { // end
    background(space1, 600, 400);
    rebutton_.position(300, 200);
    cbutton_.position(-300, 200);
    button_.position(-300, 200);
    crebutton_.position(-300, 200);
    push()
    textSize(50)
    if(score>=50 ){
    fill(255, 204, 0)
     text('You got '+ score + ' coins!!!',110,50)
    text('You are rich!!!',110,100)
    pop()}else{
      push()
      fill(255, 204, 0)
      text('You got '+ score + ' coins',110,50)
      text('Thats not enough:/',110,100)
      pop()
     
    }
  } 

   walls.build();
  joker.body();
}


class Player {
  constructor() {
    this.x = width / 2;
    this.y = height - 15;
    this.w = 50;
    this.h = 50;
    this.c = color(122);
  }

  body() {
    push()
    textSize(25)
    fill(random(0,255),random(0,255),random(0,255));
    text("You",this.x+10, this.y)
    pop()
  image(playImg, this.x, this.y, this.w, this.h)
  }
  
  body2() {
    push()
    textSize(25)
    fill(random(0,255),random(0,255),random(0,255));
    text("You",this.x+10, this.y)
    pop()
  image(play2Img, this.x, this.y, this.w, this.h)
  }
  move() {
    if (keyIsDown(37)) { 
      this.x -= 2;
      playerDirection = "left";
    }
    if (keyIsDown(38)) { 
      this.y -= 2;
      playerDirection = "up";
    }
    if (keyIsDown(39)) {
      this.x += 2;
      playerDirection = "right";
    }
    if (keyIsDown(40)) { // move player down if left down key is pressed
      this.y += 2;
      playerDirection = "down";
      //console.log("X: " + this.x + " Y: " + this.y);
    }

  }
}
class Coin{
  constructor(x,y){
	this.x = x;
	this.y = y;
 
 
  }
  
  body(){
    fill(255, 204, 0)
  image(coinImg, this.x, this.y, 30, 30)
  }
  body2(){
    fill(0, 255, 0)
   image(AImg, this.x, this.y, 30, 30)
  }
  remove(){
    this.x = -100;
    this.y = -100;
  }
  checkCollision() {
     let distFromplayer= dist(player1.x,player1.y, this.x, this.y); 
    //more on dist https://p5js.org/reference/#/p5/dist
     if(distFromplayer <= 50){
       this.remove()
       score++
     }
  }
  

}
class Walls {
  constructor(c) { 

    this.top = 0;
    this.btm = 400;
    this.left = 0;
    this.right = 600;
  }
  build() {
    if (player1.x <= -20) {
      player1.x += 10;
    } else if (player1.x >= 580) {
      player1.x -= 10;
    } else if (player1.y <= -20) {
      player1.y += 10;
    } else if (player1.y >= 380) {
      player1.y -= 10;
    }
  }

}

class Joker {
  constructor(n, c){
    this.w = 30;
    this.h = 30;
    this.c = c;
    this.n = n; //number of baddys(4)
    
    this.g1x0 = 15;
    this.g1x1 = 15;
    this.g1x2 = 15;
    this.g1x3 = 15;
    
    
    this.pace0 = 10;
    this.pace1 = 8;
    this.pace2 = 6;
    this.pace3 = 4;
    
    this.angle = 0;	// initialize angle variable
this.scalar = 10;  // set the radius of circle
this.startX = width/2;	// set the x-coordinate for the circle center
this.startY = height/2;	// set the y-coordinate for the circle center
  }
  
  body(){
    if(sceneNum == 1){
      
    
    //Set the scoundrels lives to true
    //If not they are dead 
    let g1 = true;
    let g2 = true;
    let g3 = true;
    let g4 = true;
    
    angleMode(DEGREES);
      
    let x_;
    let y_;

    let y = 0;
      for (let x = 0; x < this.n; x++) {
        push();
        fill(255);
        if (y == 0) {
          x_ = 100 + 100 * cos(this.angle);
          y_ = 100 + 100 * sin(this.angle);
          // set scoundrel
          image(badImg, x_, y_, 30, 30)
          // set distance between player and scoundrel
          let d = int(dist(x_, y_, player1.x, player1.y));
          //console.log(d)

          //detect if player collides with scoundrel
          if (d < 30){
            // send player back to starting location
            sceneNum = 2;
            player1.x = width / 2;
            player1.y = height - 15;
          }
        } else if (y == 1) {
          x_ = 400 + 125 * sin(this.angle);
          y_ = 150 + 125 * cos(this.angle);
          image(badImg, x_, y_, 50, 50)
          // set distance between player and scoundrel
          let d = int(dist(x_, y_, player1.x, player1.y));
          //console.log(d)

          //detect if player collides with scoundrel
          if (d < 30){
            // send player back to starting location
            sceneNum = 2;
            player1.x = width / 2;
            player1.y = height - 15;
          }
        } 
        y++;
        //console.log("scoundrel number " + y);
        pop();
      }
    }
    this.angle+=3;
  }
  
}


