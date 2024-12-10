let font1
let font2
let font3
let font4
let font5
let font6

let HeadArray = []
let HeadIndex = 0;

let TorsoArray = []
let TorsohIndex = 0;

let LeftLegArray = []
let LeftLegsketchIndex = 0;

let LeftArmArray = []
let LeftArmIndex = 0;

let RightLegArray = []
let RightLegsketchIndex = 0;

let RightArmArray = []
let RightArmIndex = 0;


function preload() {
  //loads fonts
  //font = loadFont('./fonts/');
  //font2 = loadFont('./assets/');
  //font3 = loadFont('./assets/');
  //font4 = loadFont('./assets/');
  //font5 = loadFont('./assets/');
  //font6 = loadFont('./assets/');
  HeadArray[0] = loadImage('./head/redhead.png');  
  HeadArray[1] = loadImage('./head/whitehead.png');  
  HeadArray[2] = loadImage('./head/yellowhead.png');  
  TorsoArray[0] = loadImage('./head/redhead.png');  
  TorsoArray[1] = loadImage('./head/whitehead.png');  
  TorsoArray[2] = loadImage('./head/yellowhead.png'); 
  RightLegArray[0] = loadImage('./head/redhead.png');  
  RightLegArray[1] = loadImage('./head/whitehead.png');  
  RightLegArray[2] = loadImage('./head/yellowhead.png'); 
  LeftLegArray[0] = loadImage('./head/redhead.png');  
  LeftLegArray[1] = loadImage('./head/whitehead.png');  
  LeftLegArray[2] = loadImage('./head/yellowhead.png'); 
  RightArmArray[0] = loadImage('./head/redhead.png');  
  RightArmArray[1] = loadImage('./head/whitehead.png');  
  RightArmArray[2] = loadImage('./head/yellowhead.png'); 
  LeftArmArray[0] = loadImage('./head/redhead.png');  
  LeftArmArray[1] = loadImage('./head/whitehead.png');  
  LeftArmArray[2] = loadImage('./head/yellowhead.png'); 
}
  


function setup() {
  rectMode(CENTER);
  var canvas = createCanvas(600, 600);
  canvas.parent("sketch-holder");

  var button = createButton("HEAD");
  button.parent("button-holder");
  button.mousePressed(changehead);
  
  var button2 = createButton("TORSO");
  button2.parent("button-holder");
  button2.mousePressed(changetorso);  
  
  var button3 = createButton("LEFT LEG");
  button3.parent("button-holder");
  button3.mousePressed(changeleftleg);
  
  var button4 = createButton("LEFT ARM");
  button4.parent("button-holder");
  button4.mousePressed(changeleftarm);  
  
  var button5 = createButton("RIGHT LEG");
  button5.parent("button-holder");
  button5.mousePressed(changerightleg);
  
  var button6 = createButton("RIGHT ARM");
  button6.parent("button-holder");
  button6.mousePressed(changerightarm);  
  
  var button7 = createButton("SAVE");
  button7.parent("button-holder");
  button7.mousePressed(SAVE);  
  


  
}


function draw() {
  background(220);
  
  
  
}

function changehead(){
  HeadIndex++;
  if(HeadIndex > HeadArray.length-1) {
    HeadIndex = 0;
  }  
}

function changetorso(){
  
  TorsoIndex++;
  if(TorsoIndex > TorsoArray.length-1) {
    TorsoIndex = 0;
  }  
}

function changerightleg(){
  RightLegIndex++;
  if(RightLegIndex > RightLegArray.length-1) {
    RightLegIndex = 0;
  }     
}

function changerightarm(){
  RightArmIndex++;
  if(RightArmIndex > RightArmArray.length-1) {
    RightArmIndex = 0;    
  }
}

function changeleftleg(){
   LeftLegIndex++;
  if(LeftLegIndex > LeftLegArray.length-1) {
    LeftLegIndex = 0;
  }     
}

function changeleftarm(){
  LeftArmIndex++;
  if(LeftArmIndex > LeftArmArray.length-1) {
    LeftArmIndex = 0;    
  }
}

function SAVE(){
  saveCanvas('FREAK.jpg');  
}




