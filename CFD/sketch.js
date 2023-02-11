var createCanvas, background, uBitWebBluetooth, createButton;
//let sadPengy,  normalPengy, excitedPengy, jubilantPengy;
var imageHappy, imageExcited, imageSad, imageJulibiant, imageSleeping, imageWarm;
var hunger = 0;
var status = "happy";
var mood = 100;
var drowsiness = 10;

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
    setupBLE();
}

function draw() {
    background(255);
    if (mood < 50) {
        //status = "sad";
        sadPengy();
    } 
    else if (mood < 100) {
        //status = "normal";
        happyPengy();
    } 
    else if (mood < 200) {
        //status = "happy"
        excitedPengy();
    } 
    else {
        //status = "jubilant"
        jubilantPengy();
    }

    mood = mood - 0.2;

    if (mood < 0) {
      mood = 0;
    }
  
    print(mood);
    /*    
    if (status == "sad") {
        sadPengy()
    } else if (status == "normal") {
        normalPengy()
    } else if (status == "happy") {
        excitedPengy()
    } else if (status == "jubilant") {
        jubilantPengy()
    }
    */
}
function mouseClicked() {
    print("clicked");
    mood = mood + 5;
  
    if (mood > 100) {
      mood = 100;
    }
  }


  function sadPengy(){
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
    image(imageJulibiant, width/2, height/2, 200, 200);
  }
  

input.onGesture(Gesture.ScreenUp, function () {
    let drowsiness = drowsiness - 0.1
    if (status == "sad") {
        sadPengy()
    } else if (status == "excited") {
        excitedPengy()
    }
})
//handleData function is called
//when the bluetooth data is received.

function handleData(data) {
    let incoming = data.trim(); // trim() removes newline "\n" caracter
    print(incoming);
}

//START -- MICROBIT DEVICE CONNECTION
//variable to store microbit device connection
let microBit;

function setupBLE() {
    microBit = new uBitWebBluetooth();

    //onConnect happens when microBit is connected.
    microBit.onConnect(function () {
        console.log("connected");
    });

    //onDisconnect happens when microBit is disconnected.
    microBit.onDisconnect(function () {
        console.log("disconnected");
    });

    //onReceiveSerial happens when microBit receive serial data.
    microBit.onReceiveSerial(handleData);

    //define connect and disconnect buttons
    const connectButton = createButton("Connect");
    connectButton.mousePressed(function () {
        microBit.connectDevice();
    });

    const disconnectButton = createButton("Disconnect");
    disconnectButton.mousePressed(function () {
        microBit.disconnectDevice();
    });
}

function connect() {
    microBit.connectDevice();
}
