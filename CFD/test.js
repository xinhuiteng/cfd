var mood = 100;

var imageHappy;
var imageNeutral;
var imageAngry;

function preload() {
  imageHappy = loadImage("img/happy-face.png");
  imageNeutral = loadImage("img/neutral-face.png");
  imageAngry = loadImage("img/angry-face.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  if (mood < 30) {
    drawAngryFace();
  } else if (mood < 70) {
    drawNeutralFace();
  } else {
    drawHappyFace();
  }

  mood = mood - 0.2;

  if (mood < 0) {
    mood = 0;
  }

  print(mood);
}

function mouseClicked() {
  print("clicked");
  mood = mood + 5;

  if (mood > 100) {
    mood = 100;
  }
}

function drawHappyFace() {
  imageMode(CENTER);
  image(imageHappy, width / 2, height / 2, 200, 200);
}

function drawNeutralFace() {
  imageMode(CENTER);
  image(imageNeutral, width / 2, height / 2, 200, 200);
}

function drawAngryFace() {
  imageMode(CENTER);
  image(imageAngry, width/2, height/2, 200, 200);
}
