function preload() {
    img = loadImage("Madhu and Abhi.png")
    img1 = loadImage("Pinni and Babai.JPG")
    img2 = loadImage("Pinni and Babai (1).JPG")
    img3 = loadImage("Madhu and Abhi (1).JPG")
}

function setup() {
    img.loadPixels();
    canvas = createCanvas(400, 520);
    canvas.position(232,222);
}

function draw() {
    image(img1, 0, 0, 400, 520);
}

canvas1 = document.getElementById("myCanvas");
ctx = canvas1.getContext("2d");
backgroundImage = "Pinni and Babai (1).JPG";

function loadimage() {
    backgroundImageTag = new Image(); //defining a variable with new image
    backgroundImageTag.onload = uploadBackground; //setting a function, onloading this variable
    backgroundImageTag.src = backgroundImage; //load image
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas1.width, canvas1.height);
}
