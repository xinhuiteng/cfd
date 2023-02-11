var createCanvas, background;
//let sadPengy,  normalPengy, excitedPengy, jubilantPengy, uBitWebBluetooth, createButton;
var imageHappy;
var imageExcited;
var imageSad;
var imageJulibiant;
var imageSleeping;
var imageWarm;

// can change oop next time
var status = "happy";
var mood = 180;
var drowsiness = 0;
var warm = 1;

function preload() {
    imageHappy = loadImage("img/happy.png");
    imageExcited = loadImage("img/excited.png");
    imageSad = loadImage("img/sad.png");
    imageJulibiant = loadImage("img/jubiliant.png");
    imageSleeping = loadImage("img/sleeping.png");
    imageWarm = loadImage("img/warm.png");
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255);
    if (mood < 50) 
    {
        if (drowsiness == 0) 
        {
            sadPengy();
        }
        else if(drowsiness == 1)
        {
            sleepingPengy();
        }
    }
    else if (mood < 100) {
        happyPengy();
    }
    else if (mood < 200) {
        excitedPengy();
    }
    else {
        jubilantPengy();
    }
    //decrease image value
    // eg excited -> happy -> sad
    if (mood < 200) { 
    mood = mood - 0.2;
    }

    // once reached 0, cannot have neg value thus initialize as 0
    if (mood < 0) {
        mood = 0;
    }

    print(mood);

    /*else if (warm = 1){
        warmPengy();
    }
    else {
        excitedPengy();
    }*/
}
function mouseClicked() {
    print("clicked");
    mood = mood + 5;

    if (mood > 210) {
        mood = 210;
    }
}

function keyPressed() {
    print("pressed");
    warm = warm - 1;
    
    if (warm < 0) {
        warm = 0
    } 
}

function drown(){
    console.log("drown");
    drowsiness++;

    if(drowsiness >= 1)
    {
        drowsiness = 1;
    }
}

function wakeup()
{
    drowsiness = 0;
    mood = 180;
}

// calling function to display the respective img
function sadPengy() {
    imageMode(CENTER);
    image(imageSad, width / 2, height / 2, 200, 200);
}

function happyPengy() {
    imageMode(CENTER);
    image(imageHappy, width / 2, height / 2, 200, 200);
}

function excitedPengy() {
    imageMode(CENTER);
    image(imageExcited, width / 2, height / 2, 200, 200);
}

function jubilantPengy() {
    imageMode(CENTER);
    image(imageJulibiant, width / 2, height / 2, 200, 200);
}

function warmPengy() {
    imageMode(CENTER);
    image(imageWarm, width / 2, height / 2, 200, 200);
}

function sleepingPengy() {
    imageMode(CENTER);
    image(imageSleeping, width / 2, height / 2, 200, 200);
}



document.addEventListener("keydown", function(event) 
{
    if (event.keyCode === 32) // spacebar
    {
      drown();
    }
});


document.addEventListener("keydown", function(event) 
{
    if (event.keyCode === 87) // w
    {
      wakeup();
    }
});